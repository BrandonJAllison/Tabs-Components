class Dropdown {
  constructor(dropdown) {
    
    this.dropdown = dropdown;
    this.button = this.dropdown.querySelector('.dropdown-button');
    this.content = this.dropdown.querySelector('.dropdown-content');
    this.button.addEventListener('click', () => this.toggleContent());
    this.container = document.querySelector('.section');
    this.container.addEventListener('click', () => this.removeContent());

  }

  toggleContent() {
    console.log('it works');

    this.content.classList.toggle('dropdown-hidden');
  }
  removeContent(){
    
    this.content.classList.add('dropdown-hidden');
  }
}

const container = document.querySelector('body');
container.addEventListener('click', function() {

})

const dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));