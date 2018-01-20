var expect = chai.expect;
var should = chai.should();

describe('ShoppingListItem', function(){

  it('should be a function', function(){
    expect(ShoppingListItem).to.be.a('function');

  });
  it('property should be name',function(){
    ShoppingListItem.should.have.property('name');
  });


});