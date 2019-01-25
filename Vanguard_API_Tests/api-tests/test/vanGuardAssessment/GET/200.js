global.utils = require('../../../utils.js');
var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;

describe('200 GET Net Asset Value',function(){

  it('Retreive NAV from the given file', function() {

    var fileName = 'getNavPriceList.jsonp';
    return utils.httpGET('/retail/mvc/' +fileName)
      .expect(200)
      .expect('Content-Type', 'application/x-javascript;charset=utf-8') //verifying content type
      .then(function(res){
        var response = res.text;

        //assert response array length is 28
        assert.equal((JSON.parse(response)).length, 28);

        //assert each object in array response has 'navPriceArray' and 'portId
        (JSON.parse(response)).every(i => expect(i).to.have.all.keys('navPriceArray', 'portId'));

        //assert length of 'navpPriceArray' is 1 in every object
        (JSON.parse(response)).every(i => assert.equal(i.navPriceArray.length, 1));

        //assert each object inside 'navPriceArray' has following keys:
        /*
         'amountChange',
         'asOfDate',
         'currency',
         'final',
         'isFinal',
         'measureType',
         'percentChange',
         'price',
         'pricePeriodType',
         'priceStatusType',
         'yield'
         */
        (JSON.parse(response)).every(i => expect(i.navPriceArray[0]).to.have.all.keys('amountChange', 'asOfDate', 'currency', 'final', 'isFinal', 'measureType', 'percentChange', 'price', 'pricePeriodType', 'priceStatusType', 'yield'));
      });
  });
});
