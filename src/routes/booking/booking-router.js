'use strict';

const express = require('express');
const bookingRouter = express.Router();
const BookingService = require('./booking-service');
const BookingSchema = require('./booking-schema');

bookingRouter
  .route('/')
  .post(express.json(), async (req, res, next) => {
    
    //grab data from body and turn it into an object
    const { email, name, address, booking_type, booking_date, bokking_time } = req.body;
    const newBooking = { email, name, address, booking_type, booking_date, bokking_time };
    
    //validate data
    const validBooking = BookingSchema.validate(newBooking);
    if (validBooking.error) {
      return next({status: 400, message: validBooking.error.details[0].message});
    }

    //add booking to database
    const insertedBooking = await BookingService.createBooking(req.app.get('db'), newBooking);  
    console.log(insertedBooking)
    //if there is a problem, let the user know
    if(!insertedBooking) { return res.status(500).send({message: 'Error saving place.'}); }
    
    //send back the added booking
    return res.status(201).json(insertedBooking);
  })
  .get(async (req, res, next) => {

    //grab all bookings from db
    const bookings = await BookingService.getBookings(req.app.get('db'));
    console.log(bookings)
    //if no bookings let client know
    if(!bookings) return res.status(200).json({message: 'No bookings'});

    //send back bookings
    return res.status(200).json(bookings);

  });
  
module.exports = bookingRouter;
  