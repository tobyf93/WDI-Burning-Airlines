# == Route Map
#
#                        Prefix Verb   URI Pattern                                                          Controller#Action
#     plane_flight_reservations GET    /planes/:plane_id/flights/:flight_id/reservations(.:format)          reservations#index
#                               POST   /planes/:plane_id/flights/:flight_id/reservations(.:format)          reservations#create
#  new_plane_flight_reservation GET    /planes/:plane_id/flights/:flight_id/reservations/new(.:format)      reservations#new
# edit_plane_flight_reservation GET    /planes/:plane_id/flights/:flight_id/reservations/:id/edit(.:format) reservations#edit
#      plane_flight_reservation GET    /planes/:plane_id/flights/:flight_id/reservations/:id(.:format)      reservations#show
#                               PATCH  /planes/:plane_id/flights/:flight_id/reservations/:id(.:format)      reservations#update
#                               PUT    /planes/:plane_id/flights/:flight_id/reservations/:id(.:format)      reservations#update
#                               DELETE /planes/:plane_id/flights/:flight_id/reservations/:id(.:format)      reservations#destroy
#                 plane_flights GET    /planes/:plane_id/flights(.:format)                                  flights#index
#                               POST   /planes/:plane_id/flights(.:format)                                  flights#create
#              new_plane_flight GET    /planes/:plane_id/flights/new(.:format)                              flights#new
#             edit_plane_flight GET    /planes/:plane_id/flights/:id/edit(.:format)                         flights#edit
#                  plane_flight GET    /planes/:plane_id/flights/:id(.:format)                              flights#show
#                               PATCH  /planes/:plane_id/flights/:id(.:format)                              flights#update
#                               PUT    /planes/:plane_id/flights/:id(.:format)                              flights#update
#                               DELETE /planes/:plane_id/flights/:id(.:format)                              flights#destroy
#                        planes GET    /planes(.:format)                                                    planes#index
#                               POST   /planes(.:format)                                                    planes#create
#                     new_plane GET    /planes/new(.:format)                                                planes#new
#                    edit_plane GET    /planes/:id/edit(.:format)                                           planes#edit
#                         plane GET    /planes/:id(.:format)                                                planes#show
#                               PATCH  /planes/:id(.:format)                                                planes#update
#                               PUT    /planes/:id(.:format)                                                planes#update
#                               DELETE /planes/:id(.:format)                                                planes#destroy
#                       flights GET    /flights(.:format)                                                   flights#index
#                               POST   /flights(.:format)                                                   flights#create
#                    new_flight GET    /flights/new(.:format)                                               flights#new
#                   edit_flight GET    /flights/:id/edit(.:format)                                          flights#edit
#                        flight GET    /flights/:id(.:format)                                               flights#show
#                               PATCH  /flights/:id(.:format)                                               flights#update
#                               PUT    /flights/:id(.:format)                                               flights#update
#                               DELETE /flights/:id(.:format)                                               flights#destroy
#                         users GET    /users(.:format)                                                     users#index
#                               POST   /users(.:format)                                                     users#create
#                      new_user GET    /users/new(.:format)                                                 users#new
#                     edit_user GET    /users/:id/edit(.:format)                                            users#edit
#                          user GET    /users/:id(.:format)                                                 users#show
#                               PATCH  /users/:id(.:format)                                                 users#update
#                               PUT    /users/:id(.:format)                                                 users#update
#                               DELETE /users/:id(.:format)                                                 users#destroy
#                          root GET    /                                                                    pages#app
#                        signup GET    /signup(.:format)                                                    pages#signup
#                         login GET    /login(.:format)                                                     pages#login
#                               POST   /login(.:format)                                                     session#create
#                               DELETE /login(.:format)                                                     session#destroy
#

Rails.application.routes.draw do

  resources :planes do
    resources :flights do
      resources :reservations
    end
  end

  resources :reservations
  resources :flights
  resources :users
  root :to => 'pages#app'

  get '/signup' => 'pages#signup'
  get '/login' => 'pages#login'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
