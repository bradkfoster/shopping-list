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

  render(){
    let ul = `<ul>`;
    let closeul = `</ul>`;

    for(let i = 0; i < this.items.length; i++){
      let render = this.items[i].render();
      console.log(render);
    }
    return ul + render + closeul;
  }

}