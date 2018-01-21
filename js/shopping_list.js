class ShoppingList {
  constructor(items) {
    this.items = [];
  }
  addItem(stuff) {

    if (stuff instanceof ShoppingListItem) {
      this.items.push(stuff);
    }
    else{
      throw new Error('item');
    }
   // console.log(this.items);

  }

}