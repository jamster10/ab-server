'use strict';

const Joi = require('joi');

const BookingSchema = Joi.object().keys({
  name: Joi.string().trim().min(1).max(255).required(),
  email: Joi.string().trim().min(5).max(254).email({ minDomainSegments: 2 }).required(),
  address: Joi.string().trim().min(1).max(90).required(),
  booking_type: Joi.string().valid(['housekeeping', 'dog walk']).required(),
  booking_date: Joi.required(),
  booking_time: Joi.required(),
});

module.exports = BookingSchema;
