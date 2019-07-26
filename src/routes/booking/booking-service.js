'use strict';
const xss = require('xss');

const PlacesService = {
  
  getBookings(db, page, filterBy, ordering) {
    if (filterBy){
      return db('bookings')
        .where('booking_type', filterBy)
        .paginate(20, page, ordering)
        .then(bookings => {
          bookings.data = bookings.data.map(booking => this.serializeBooking(booking));//send back the
          return bookings; //send back the newly created booking
        });
    } else {
      return db('bookings')
        .paginate(20, page, ordering)
        .then(bookings => {
          bookings.data = bookings.data.map(booking => this.serializeBooking(booking));//send back the
          return bookings; 
        });
    }
  },
  createBooking(db, newBooking) {
    return db
      .insert(newBooking)
      .into('bookings')
      .then(([newBookingId]) => this.getBooking(db, newBookingId));
  },
  getBooking(db, id) {
    return db
      .select('*')
      .from('bookings')
      .where({id})
      .then(([booking]) => this.serializeBooking(booking));
  },
  //protect from xss on fields where possible as joi validations prevent other cases
  serializeBooking(booking) {
    return {
      email: xss(booking.email),
      name: xss(booking.name),
      address: xss(booking.address),
      booking_type: booking.booking_type,
      booking_date: booking.booking_date,
      booking_time: booking.booking_time,
      updated_at: booking.updated_at,
      created_at: booking.created_at,
    };
  }
};

module.exports = PlacesService;