class PagesController < ApplicationController
  def index
    @uptime = ` uptime `
    @random = rand(0..10)
  end

  def uptime
    render :text => ` uptime `
  end

  def random
    render :text => rand(0..10)
  end

  def json
    # Ruby hash rocket
    @json = {
      :uptime => ` uptime `,
      :random => rand(0..10),
      :fortune => ` fortune `,
      :message => "Note to self: this is a powerful feature"
    }

    render :json => @json
  end

end
