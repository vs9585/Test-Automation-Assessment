global.utils = require('../../../utils.js');

describe('404 Error response when file is not available for retrieval',function(){

  it('Verify error response when file is not available for retrieval', function() {

    var fileName = 'getNavPriceLists.jsonp';
    return utils.httpGET('/retail/mvc/' +fileName)
      .expect(404)
      .expect('Content-Type', 'text/html;charset=UTF-8')
  });
});
