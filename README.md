# WDi16 ([General Assembly, Sydney](https://generalassemb.ly/sydney))
##Homework Repository

1. Repository Setup;
2. Do Your Homework;
3. Submit Your Homework.
___
### 1. Repository Setup

You only need to do this part once, not every time you're submitting homework!

- **Fork this repository**
    + *'Forking' creates a personal, 'forked' copy of this repository on your Github account.*  
    + Hit the **Fork** button in the top right-hand corner of this page.
- **Clone your forked repository to your computer**
    + *'Cloning' takes your 'forked' repository on GitHub and creates a local copy (aka 'clone') on your computer.*
    + Make sure you're browser is open to **your** forked version of this repository on Github (eg [http://github.com/{{YOUR_USERNAME}}/WDi16_Homework](http://hithub.com/{{YOUR_USERNAME}}/WDi16_Homework)).
    + Hit the **Clone or Download** button in the top right-hand corner of the page and copy the URL to your clipboard.
    + Open your computer's terminal to the directory in which you intend to store your homework.
    + `git clone url_of_your_fork_on_github` (where `url_of_your_fork_on_github` is the URL you copied after hitting 'Clone or Download', above).
- **Add an upstream remote repository**
    +  *Creating an upstream repository links the local repository on your computer to this repository on Github*
    + `cd WDI15_Homework`
    + `git remote add upstream https://github.com/ga-wolf/WDi16_Homework`
    + `git pull upstream master`

### 2. Do your Homework

You should put each night's homework in a new folder within the appropriate directory of your homework repo. So, for day two, where you have two tasks ("Calculator" and "Strings"), you might do something like this:

1. Open Terminal/iTerm2;
2. Go to your local homework repo (eg, `cd Projects/general-assembly/WDi16_Homework`);
3. From here, go to the folder matching your name within that repo, and the appropriate week (eg, `groucho_marx/week_01`);
4. Create new folders for each of the day's homework tasks: (eg `mkdir calculator` and `mkdir strings`);
5. Create the files necessary to complete the homework in their respective directories;
6. Get to it!

### 3. Submit Your Homework

You need to do this every time you're submitting homework.

- **Commit your work to your local repository progressively**
    + `git add .`
    + `git commit -m "YOUR_COMMIT_MESSAGE_GOES_HERE"`(where `YOUR_COMMIT_MESSAGE_GOES_HERE` is your description of the work you are committing)
- **Merge changes from this repository into your own local repository**
    + `git pull upstream master` 
- **Push the changes in your local repository to your forked repository**
    + `git push origin master`
- **Once you're finished, submit a pull request for me to accept your homework**
    + Navigate to your forked version of this repository on Github (eg [https://github.com/{{YOUR_USERNAME_HERE}}/WDi16_Homework](https://github.com/{{YOUR_USERNAME_HERE}}/WDi16_Homework)).
    + Hit the **Pull request** button.
    + Make sure the destination for the pull request is set to my repository, not your own or anyone else's.
    - In the pull request comment, tell me the following:
        + How difficult did you find this (out of 10)? 0 being no problems at all, 10 being impossible;
        + Was there anything that you struggled with?;
        + Is there anything that you'd like some further information on?;
        + Roughly how long did it take?

If you don't mention anything in the Pull Request comments, we will assume you had no problems at all with it!
