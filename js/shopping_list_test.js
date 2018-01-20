var expect = chai.expect;
var should = chai.should();

describe('everything', function () {
  let shoppingListItem;
  let param1 = 'pizza';
  let param2 = 'cheesy';
  let param3 = false;

  beforeEach(function () {
    shoppingListItem = new ShoppingListItem(param1, param2, param3);
  });

  describe('ShoppingListItem', function () {


    it('should be a function', function () {
      expect(ShoppingListItem).to.be.a('function');

    });
    it('property should be name', function () {
      shoppingListItem.name.should.equal(param1);
    });
    it('property should be description', function () {
      expect(shoppingListItem.description).to.equal(param2);

      
      
    });
    
    it('property should is_done', function (){
      expect(shoppingListItem.is_done).to.equal(param3);
    });
  });

});