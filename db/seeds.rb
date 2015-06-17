Flight.destroy_all
Plane.destroy_all
Reservation.destroy_all
User.destroy_all
Reservation.destroy_all

# Reservations
r1 = Reservation.create :row => 1, :column => 1
r2 = Reservation.create :row => 1, :column => 2
r3 = Reservation.create :row => 1, :column => 3

r4 = Reservation.create :row => 2, :column => 1
r5 = Reservation.create :row => 2, :column => 2
r6 = Reservation.create :row => 2, :column => 3

r7 = Reservation.create :row => 3, :column => 1
r8 = Reservation.create :row => 3, :column => 2
r9 = Reservation.create :row => 3, :column => 3

# Flights
f1 = Flight.create :origin => 'Sydney', :destination => 'Kazakhstan', :date => '2015-06-20'
f2 = Flight.create :origin => 'Kazakhstan', :destination => 'Sydney', :date => '2015-06-20'
f3 = Flight.create :origin => 'Sydney', :destination => 'Brisbane', :date => '2015-06-20'

f1.reservations << r1 << r2 << r3
f2.reservations << r4 << r5 << r6
f3.reservations << r7 << r8 << r9

# Planes
p1 = Plane.create :rows => 10, :columns => 10, :name => 'Big Bitch Airlines'
p1.flights << f1 << f2 << f3