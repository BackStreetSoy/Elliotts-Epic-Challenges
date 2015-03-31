get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/say' do
  if request.xhr?
    content_type :json
    {hacker: Faker::Hacker.say_something_smart, company: Faker::Company.catch_phrase}.to_json
  else
    erb :fail
  end

end
