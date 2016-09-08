
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({username: 'tommygaessler', email: 'tommy.gaessler@gmail.com'}),
        knex('users').insert({username: 'michael_gaessler', email: 'michaelsgaessler@gmail.com'}),
        knex('users').insert({username: 'ggaessler', email: 'gary.gaessler@gmail.com'})
      ]);
    });
};
