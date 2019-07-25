'use strict';
const xss = require('xss');

const PlacesService = {
  
  createBooking(db, newBooking) {
    return db
      .insert(newBooking)
      .into('bookings')
      .returning('*')
      .then(newBooking => newBooking[0]);

  },
  getBookings(db) {
    return db
      .select('*')
      .from('bookings')
      .then(bookings => bookings.map(booking => this.serializeBooking(booking)));
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