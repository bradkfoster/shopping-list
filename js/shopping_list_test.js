var expect = chai.expect;
var should = chai.should();

describe('everything', function () {
  let shoppingListItem;
  let param1 = 'pizza';
  let param2 = 'cheesy';
  let param3 = null;
  let item2;
  let item3; 

  beforeEach(function () {
    shoppingListItem = new ShoppingListItem(param1, param2, param3);
    item2 = new ShoppingListItem("apple", "red", param3);
    item3 = new ShoppingListItem("pen", "pointy", param3);

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

    it('property should is_done', function () {
      expect(shoppingListItem.is_done).to.equal(param3);
    });
  });

  describe('Check', function () {
    it('check should be a function', function () {
      expect(shoppingListItem.check).to.be.a('function');
    });

    it('check sets is_done to true', function () {
      shoppingListItem.check();
      expect(shoppingListItem.is_done).to.equal(true);
    });
    it('uncheck should be a function', function () {
      expect(shoppingListItem.uncheck).to.be.a('function');
    });
    it('uncheck sets is_done to false', function () {
      shoppingListItem.uncheck();
      expect(shoppingListItem.is_done).to.equal(false);
    });
    it('shoppingListItem should have a constructor', function () {
      expect(shoppingListItem.constructor).to.be.a('function');
    });
  });

  describe('Uncheck', function () {
    it('render should be a method', function () {
      expect(shoppingListItem.render).to.be.a('function');


    });


    it('checks if render returns a string', function () {
      shoppingListItem.render();
      expect(shoppingListItem.render()).to.be.a('string');

    });
    it('checks if render returns a <li> tag', function () {
      shoppingListItem.render();
      expect(shoppingListItem.render()).to.equal(`<li class="completed_${param3}"><span>${param1}</span> <span>${param2}</span></li>`)
     // console.log(shoppingListItem);

    });
  })





describe('ShoppingList', function () {
  let shoppingList;

  beforeEach(function () {
    shoppingList = new ShoppingList();
  });

  describe('creating Class and items', function () {

    it('should be a class', function () {
      expect(shoppingList).to.be.an.instanceof(ShoppingList);
    });

    it('should have property named items', function () {
      //console.log(shoppingList);
      expect(shoppingList).to.have.a.property('items');
    });

    it('should be an empty array', function () {
      expect(shoppingList.items).to.be.an('Array');
    });

  });

  describe('addItem', function () {


    it('should have a method named addItem', function () {
      expect(shoppingList.addItem).to.be.a('function');
     
    });

    it('should add shoppingListItem', function(){
      shoppingList.addItem(shoppingListItem);
      shoppingList.items.should.contain(shoppingListItem);
      
    });
    it('should be instance of ShoppingListItem', function(){
      shoppingList.addItem(shoppingListItem);
      expect(shoppingList.items[0]).to.be.an.instanceof(ShoppingListItem);
      
    });
    it('throws error ', function(){
      shoppingList.addItem(shoppingListItem);
      expect(shoppingList.addItem.bind(shoppingList,'z')).to.throw('item');
      
    });



  });//closes describe addItem

  describe('removeItem', function(){
    it('should have a method named removeItem', function(){
      expect(shoppingList.removeItem).to.be.a('function');

    });

    it('should remove item if it exist in items',function(){
      shoppingList.addItem(shoppingListItem);
      shoppingList.removeItem(shoppingListItem);
      expect(shoppingList.items).to.deep.equal([]);
    });

    it('removes last shopping list item in cart if no parameter is given',function(){
      shoppingList.addItem(shoppingListItem);
      shoppingList.addItem(item2);
      shoppingList.addItem(item3);
      item3.render();
      shoppingList.removeItem();
      expect(shoppingList.items).to.deep.equal([shoppingListItem,item2]);
      
    })
    it('should throw error',function(){
      shoppingList.addItem(shoppingListItem);
      expect(shoppingList.removeItem.bind(shoppingList,'z')).to.throw('err');
    })
    
  })//closes removeItem

  describe('Render', function(){

    it('should have a method named render ', function(){
      expect(shoppingList.render).to.be.a('function');

    })
    it('checks if render returns a string', function () {
      shoppingList.addItem(shoppingListItem);
      shoppingList.addItem(item2);
      shoppingList.addItem(item3);
      
      shoppingList.render();
      expect(shoppingList.render()).to.be.a('string');

    });
    // shoppingList.addItem(shoppingListItem);
    // shoppingList.addItem(item2);
    // console.log(shoppingList.render());


  });// Render



});//closing shoppingList;



});