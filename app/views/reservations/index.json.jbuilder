json.array!(@reservations) do |reservation|
  user = reservation.user
  name = user ? user.name : ''

  json.extract! reservation, :id, :row, :column, :user_id, :flight_id
  json.url reservation_url(reservation, format: :json)
  json.name name
end
