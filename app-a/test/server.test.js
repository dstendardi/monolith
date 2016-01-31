const util = require('./util');

describe('server', () => {
  
  it('returns dynamo tables using service a', () =>
    util
      .request()
      .get('/')
      .expect(200)
      .then(res => {
        util.expect(res.text).to.equal('from service a : {"TableNames":[]}')
      })
  );
});
