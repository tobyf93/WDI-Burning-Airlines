# == Route Map
#
#           Prefix Verb   URI Pattern                      Controller#Action
#     reservations GET    /reservations(.:format)          reservations#index
#                  POST   /reservations(.:format)          reservations#create
#  new_reservation GET    /reservations/new(.:format)      reservations#new
# edit_reservation GET    /reservations/:id/edit(.:format) reservations#edit
#      reservation GET    /reservations/:id(.:format)      reservations#show
#                  PATCH  /reservations/:id(.:format)      reservations#update
#                  PUT    /reservations/:id(.:format)      reservations#update
#                  DELETE /reservations/:id(.:format)      reservations#destroy
#           planes GET    /planes(.:format)                planes#index
#                  POST   /planes(.:format)                planes#create
#        new_plane GET    /planes/new(.:format)            planes#new
#       edit_plane GET    /planes/:id/edit(.:format)       planes#edit
#            plane GET    /planes/:id(.:format)            planes#show
#                  PATCH  /planes/:id(.:format)            planes#update
#                  PUT    /planes/:id(.:format)            planes#update
#                  DELETE /planes/:id(.:format)            planes#destroy
#          flights GET    /flights(.:format)               flights#index
#                  POST   /flights(.:format)               flights#create
#       new_flight GET    /flights/new(.:format)           flights#new
#      edit_flight GET    /flights/:id/edit(.:format)      flights#edit
#           flight GET    /flights/:id(.:format)           flights#show
#                  PATCH  /flights/:id(.:format)           flights#update
#                  PUT    /flights/:id(.:format)           flights#update
#                  DELETE /flights/:id(.:format)           flights#destroy
#            users GET    /users(.:format)                 users#index
#                  POST   /users(.:format)                 users#create
#         new_user GET    /users/new(.:format)             users#new
#        edit_user GET    /users/:id/edit(.:format)        users#edit
#             user GET    /users/:id(.:format)             users#show
#                  PATCH  /users/:id(.:format)             users#update
#                  PUT    /users/:id(.:format)             users#update
#                  DELETE /users/:id(.:format)             users#destroy
#             root GET    /                                pages#app
#

Rails.application.routes.draw do
  resources :reservations
  resources :planes
  resources :flights
  resources :users
  root :to => 'pages#app'

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
