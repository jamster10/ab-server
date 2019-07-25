'use strict';

const express = require('express');
const bookingRouter = express.Router();
const BookingService = require('./booking-service');
const BookingSchema = require('./booking-schema');

bookingRouter
  .route('/')
  .post(express.json(), async (req, res, next) => {
    
    //grab data from body and turn it into an object
    const { email, name, address, booking_type, booking_date, booking_time } = req.body;
    const newBooking = { email, name, address, booking_type, booking_date, booking_time };
    
    //validate data
    const validBooking = BookingSchema.validate(newBooking);
    if (validBooking.error) {
      return next({status: 400, message: validBooking.error.details[0].message});
    }

    try {
      //add booking to database
      const insertedBooking = await BookingService.createBooking(req.app.get('db'), newBooking);  
      //send back the added booking
      return res.status(201).json(insertedBooking);
      
    } catch (e){
      //if there is a problem, log it. Also let the user know theres an error.
       next({status: 500, message: e.message});
    }
  })
  .get(async (req, res, next) => {
    const { page = 1, filter = '', ordering={column: 'booking_date', direction: 'asc'} } = req.query; 
    //default page is 1, no default filtering, default ordering is by column in ascending order.

    try{
      //grab all bookings from db
      const bookings = await BookingService.getBookings(req.app.get('db'), page, filter, ordering);
      return res.status(200).json(bookings);
    } catch (e){
      //if there is a problem, log it. Also let the user know theres an error.
      next({status: 500, message: e.message});
    }
  });
  
module.exports = bookingRouter;
  