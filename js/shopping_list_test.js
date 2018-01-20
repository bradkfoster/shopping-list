var expect = chai.expect;
var should = chai.should();

describe('everything', function () {
  let shoppingListItem;
  let param1 = 'pizza';
  let param2 = 'cheesy';
  let param3 = null;

  beforeEach(function () {
    shoppingListItem = new ShoppingListItem(param1, param2, param3);
  });

  describe('ShoppingListItem', function () {

    it('should be a function', function () {
      expect(ShoppingListItem).to.be.a('function');
    });
    it('property should be name', function () {

      expect(param1).to.be.a("string");
      shoppingListItem.name.should.equal(param1);
    
    });
    it('property should be description', function () {
      expect(param2).to.be.a("string");
      expect(shoppingListItem.description).to.equal(param2);
    });
    
    it('property should is_done', function (){
      expect(shoppingListItem.is_done).to.equal(param3);
    });
  });

  describe('Check', function(){
    it('check should be a function', function(){
      expect(shoppingListItem.check).to.be.a('function');
    });

    it('check sets is_done to true', function(){
      shoppingListItem.check();
      expect(shoppingListItem.is_done).to.equal(true); 
    });
    it('uncheck should be a function', function(){
      expect(shoppingListItem.uncheck).to.be.a('function');
    });
    it('uncheck sets is_done to false', function(){
      shoppingListItem.uncheck();
      expect(shoppingListItem.is_done).to.equal(false); 
    });

    it('render should be a method', function(){
      expect(shoppingListItem.render).to.be.a('function');
     
      
    });
   
    
    it('checks if render returns a string', function(){
      shoppingListItem.render();
      expect(shoppingListItem.render()).to.be.a('string');

  });
  it('checks if render returns a <li>', function(){
    shoppingListItem.render();
    expect(shoppingListItem.render()).to.equal(`<li class="completed_${param3}"><span>${param1}</span> <span>${param2}</span></li>`)
    console.log(shoppingListItem);

});
});

});