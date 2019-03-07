class Dropdown {
  constructor(dropdown) {
    
    this.dropdown = dropdown;
    this.button = this.dropdown.querySelector('.dropdown-button');
    this.content = this.dropdown.querySelector('.dropdown-content');
    this.button.addEventListener('click', () => this.toggleContent());
  }

  toggleContent() {
    console.log('it works');

    this.content.classList.toggle('dropdown-hidden');
  }
}

let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));