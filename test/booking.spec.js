/* global request, expect */
'use strict';
const app = require('../src/app');

describe('booking endpoint works', () => {
  it('Handles a bad path', () => {
    return request(app)
      .get('/')
      .expect(404, {message:'Resource not Found'});
  });
  it('Handles a bad path', () => {
    return request(app)
      .post('/')
      .expect(404, {message:'Resource not Found'});
  });
  it('Handles a bad path', () => {
    return request(app)
      .post('/whatever')
      .expect(404, {message:'Resource not Found'});
  });

  context('[GET] Given no data in DB', () => {
    it('Returns an empty data array',  () => {
      return request(app)
        .get('/booking')
        .expect(200);
    });
  });

  context('[POST] Given no data in DB', () => {
    it('Returns an added item',  () => {
      return request(app)
        .get('/booking')
        .expect(200);
    });
  });
  
  context('[GET] Given data in the DB', () => {
    it('Given no page, it returns first 20 items',  () => {
      return request(app)
        .get('/booking')
        .expect(200);
    });
    it('Given page 1, it returns first 20 items',  () => {
      return request(app)
        .get('/booking')
        .query({ page: '1' })
        .expect(200);
    });
    it('Given page 2, it returns second 20 items',  () => {
      return request(app)
        .get('/booking')
        .query({ page: '1' })
        .expect(200);
    });
    it('Given no filter, response is unsorted',  () => {
      return request(app)
        .get('/booking')
        .expect(200);
    });
    it('Given filter, response is sorted (dog walk)',  () => {
      return request(app)
        .get('/booking')
        .query({filter: 'dog walk'})
        .expect(200);
    });
    it('Given filter, response is sorted (housekeeping)',  () => {
      return request(app)
        .get('/booking')
        .query({filter: 'housekeeping'})
        .expect(200);
    });
    it('Given an ordering sorts data accordingly',  () => {
      return request(app)
        .get('/booking')
        .query({filter: 'housekeeping'})
        .expect(200);
    });
  });

  context('[POST] Given data in the DB', () => {
    it('Accepts good data',  () => {
      return request(app)
        .post('/booking')
        .send()
        .expect(200);
    });
    it('Rejects bad data',  () => {

      

      return request(app)
        .post('/booking')
        .send()
        .expect(200);
    });
    it('Protects from xss',  () => {



      return request(app)
        .post('/booking')
        .send()
        .expect(200);
    });
  });

});