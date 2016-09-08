process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
// temporary server
chai.use(chaiHttp);

var server = require('../../src/server/app');
const knex = require('../../src/server/db/knex');

describe('routes : users', function() {

  beforeEach((done) => {
    knex.migrate.rollback()
    .then(() => {
      knex.migrate.latest()
      .then(() => {
        knex.seed.run()
        .then(() => {
          done();
        });
      });
    });
  });

  afterEach((done) => {
    knex.migrate.rollback()
    .then(() => {
      done();
    });
  });

  describe('GET /api/v1/users', () => {
    it('should respond with all users', (done) => {
      chai.request(server)
      .get('/api/v1/users')
      .end((err, res) => {
        should.not.exist(err);
        res.redirects.length.should.equal(0);
        res.status.should.equal(200);
        res.type.should.equal('application/json');
        console.log(res.body);
        res.body.status.eql('Success');
        res.body.data.length.should.eql(0);
        done();
      });
    });
  });
});
