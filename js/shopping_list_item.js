

class ShoppingListItem {

  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done = null;
  }

  check() {
    return this.is_done = true;
    //return this.is_done;
  }
  uncheck(){
    return this.is_done = false;
  }
  render(){
    var someHtml = `<li class="completed_${this.is_done}"><span>${this.name}</span> <span>${this.description}</span></li>`
    console.log(someHtml);
    return someHtml;
  }

}

