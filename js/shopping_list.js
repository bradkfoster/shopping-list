class ShoppingList {
  constructor(items) {
    this.items = [];
  }
  addItem(stuff) {

    if (stuff instanceof ShoppingListItem) {
      this.items.push(stuff);
    } else {
      throw new Error('item');
    }
    // console.log(this.items);

  }

  removeItem(takeOut) {
    let ind = this.items.indexOf(takeOut);
    if (ind > -1) {
      this.items.splice(ind, 1);
    } else if (takeOut === undefined) {

      this.items.pop();
      
    } else {

      throw new Error('err')
    }
  }



}