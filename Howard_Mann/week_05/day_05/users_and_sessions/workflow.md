# USER SESSION LOGON WORKFLOW

# PART A: CREATE USER MODEL
1. In gem.file uncomment bcrypt gem and in terminal run bundle install

2. In terminal create user model with a has many relationship
  - ``` rails g model User ```
  - Add standard columns remembering to save password_digest and create admin with boolean admin set as default. Features at a minimum
    ```
      t.string :email
      t.string :name
      t.text :password_digest
      t.boolean :admin, :default => false
    ```
  - Run ```rake db:migrate```

3. In routes create routes for user model
  - ``` resources :users ```

4. In user model enable rails method to enable bcrypt and assign has_many relationships
  - ```has_secure_password```
  - ```has_many :model_name```

5. Remember to assign belongs_to relationship to models associated with the User model
  - ```belongs_to :user```

6. In seed file, seed some test users and write simple tests. Remember to seed :password and :password_confirmation key value pairs. bcrypt will save this in a unique password_digest key value pair. Write some code to test
  ```
    User.destroy_all # Reset the seed file

    u1 = User.create :name => "howie", :email => "howie@ga.co", :password => "chicken", :password_confirmation => "chicken"
  ```

7. In users_controller file set up default CRUD methods for User  (HM: this is straight forward, hard part is linking this to session in Part B)
  ``` # CRUD USER
   def index
    @user = User.all
   end

   def show
    @user = User.find(params[:id])
   end

   def new
    @user = User.new
   end

   def create
    @user = User.create(user_params)
    redirect_to users_path
   end

   def edit
    @user = User.find(params[:id])
   end

   def update
    user = User.find(params[:id])
    user.update( user_params )
    redirect_to user_path(user)
   end

   def destroy
    user = User.find(params[:id])
    user.destroy
    redirect_to users_path
   end

   private
    def user_params
      params.require(:user).permit(:email, :name, :password, :password_confirmation)
    end
  ```

8. In user views folder set up full view CRUD for user
  - Only difference is for form field to have f.password_field vs. text_field to hide the passwords being entered

# PART B: CREATE SESSION CONTROLLER AND VIEWS

1. In terminal. Create session controller. This is a bit weird, it is a controller but we do not pluralise we use singular. We only create a controller and view, no models. We add the new at the end to generate a new view for us for the login page
  - ``` rails g controller Session new ```

2. In the session controller start by defining three methods:
  - new: for displaying the login page. We do not write anything in this method, it only serves the purpose of redirecting to the login view page from our route request
  - create: for logging in and authenticating user params. This is where the most work lies. We will come back to this later. For now just define it
  - destroy: for logging out of our session, do this last, requires little code but dependent on everything else.

3. In routes write the session login routes referencing
  - get request to login url which will call on the session controller new method
    ```
      get '/login' => 'session#new', :as => 'login'
    ```
  - post request to same url which will call on the session controller create method
    ```
      post '/login' => 'session#create'
    ```
  - delete request to different url which will call on the destroy method (more on this later, quite hard)
    ```
      delete '/logout' => 'session#destroy', :as => 'logout'
    ```

4. In view session new file create a login form. This is not worth memorising but good to understand. Difference is we are using a form_tag helper vs. standard form_for helper as we are not trying to edit or create anything in the model, we are only using to submit the params values to the create method to authenticate with brypt. Remember difference is use form_tag and '/login' url defined in route above, not any instance object  
  ```
    <%= form_tag login_path do %>
      <%= label_tag :email %>
      <%= email_field_tag :email, 'please enter', required: true %>
      <%= label_tag :password %>
      <%= password_field_tag :password %>
      <%= submit_tag 'Login' %>
    <% end %>
  ```

5. In session controller in create method we write code to achieve the following overarching principle: A user logs in by:
  - Going on the login page to enter their email and password
  - This is posted to the same url and stored in params
  - The create method then finds the user in the database based on the email (because password is not stored)
  - It then checks if the user exists, and if so uses rails built in method to authenticate the submitted password against the encrypted value in the database
  - If successful it then stores the users unique id in a session[:user_id] variable to be accessed across all pages
  - IMPORTANT!! The session[:id] is very important as it used to validate if the user has successfully logged in or not. If authenticated then we store the user's id in the session[:user_id] which allows us to access the user and authorize views. If not then we don't store
  - It then redirects user to their user page
  - Then as user passes the above steps we authorize that they can view the page
  - Then to log out we call on the destroy method which will reset the session[:user_id] to nil which will remove authorizations and permissions


  - Detailed session controller steps below:
    - find the user in the database from the params submitted, either email, name or phone number
      ```
        user = User.find_by(:email => params[:email])
      ```
    - next step is tricky, let's break it up in steps. First we rely on the bcrypt authenticate method which will take the submitted params[:password] and generate it's unique hash which it will then verify against that which is saved in the database. If it checks out it will return the user otherwise will return false. We also want to verify that the user by that email exists in our database

    !HMM: ordering is important here, user.present? must come first otherwise it will report error that cannot call authenticate method on nil class
      ```
      if user.present? && user.authenticate(params[:password])
        session[:user_id] = user.id # see step below
      else
        render :new
      end
      ```
    side point: the magic with authenticate is that it relies on similar variables to encrypt the password to be the same unique hash saved in our database.

    -  step two. This is hard and relies on some new methods called session. We can cache values in the session[:id] method which will persist in the browser across all pages and reload. HM think of this as the opposite of params where the user is sending a dynamic url to a page which only lasts for that page. This is where we can set a value which is stored in the session[:id] and persists across more than one page but the entire app.
      - Advanced: Best practice is to only store the user.id in the session[:user_id] method because of performance issues. We then use this id to access our database on other pages so we don't strain the browswer

    - To log out we write some code in the destroy method which resets the session[:user_id] to nil
      ```
      def destroy
        session[:used_id] = nil
        redirect_to users_path
      end
      ```

6. In application_controller we write some code to cache the current user based on the session[:user_id] which will allow us to access the current user across all pages in the app and establish authorisations. Again this is quite tricky to memorise but good to understand principle.

  - Principle, before all app controller actions we want to store the @current_user instance variable which allows us to manage authorisations. The @current_user will only represent a User from the database if it passes the login authenticate step and the session[:user_id] is cached with the users.id. HM! note to future self, this clicked for you before and I am sure you will get it again.
  ```
    before_action :fetch_user

    # Will get the current user if their is a session[:user_id] otherwise will be set as nil
    private

      def fetch_user
        @current_user = User.find(session[:user_id]) if session[:user_id]

        session[:user_id] = nil unless @current_user.present?
      end
  ```

7. LAST STEP. Back to users_controller and every other view page you need we want to write in the authorisations which will only allow users to view certain pages if they have been authenticated in the session login stage

  ```
  # Before the :only actions run the private authorize method below
  before_action :authorize, :only => [:index, :edit]

  private
    def authorize
      unless @current_user.present?
        redirect_to login_path
      end        
    end

  ```
