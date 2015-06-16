Flight.destroy_all
Plane.destroy_all
Reservation.destroy_all
User.destroy_all

# Flights
f1 = Flight.create :origin => 'Sydney', :destination => 'Kazakhstan', :date => '2015-06-20'
f2 = Flight.create :origin => 'Kazakhstan', :destination => 'Sydney', :date => '2015-06-20'
f3 = Flight.create :origin => 'Sydney', :destination => 'Brisbane', :date => '2015-06-20'

# Planes
p1 = Plane.create :rows => 10, :columns => 10, :name => 'Big Bitch Airlines'
p1.flights << f1 << f2 << f3