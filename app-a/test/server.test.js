const util = require('./util');

describe('server', () => {

  it('should return table names in dynamo, through service a', () =>
    util
      .request()
      .get('/')
      .expect(200)
      .then(res => {
        util.expect(res.text).to.equal('from service a : {"TableNames":[]}')
      })
  );

});
