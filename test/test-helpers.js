'use strict';

function cleanTables(db) {
  return db.raw(
    `TRUNCATE
      bookings
      RESTART IDENTITY CASCADE`
  );
}

function seedTables(db, bookings) {
  return db.transaction(async trx => {
    await seedBookings(trx, bookings);
    await trx.into('bookings').insert(videos);
    await trx.raw(
      // eslint-disable-next-line quotes
      `SELECT setval('bookings_id_seq', ?)`, [videos[videos.length-1].id]
    );
    }
  });
}



module.exports = {
  makeBookings,
  makeBadData
  cleanTables,
  seedBookings,
};