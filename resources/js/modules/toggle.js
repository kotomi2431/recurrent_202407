// var ham = document.getElementByld('.hamburger'); 
// var nav = document.getElementByld('.nav_sp'); 
// ham.addEventListener('click', function () { 
//     ham.classList.toggle('active'); 
//     nav.classList.toggle('active'); 
//   });

export default class Humburger {
  constructor(btnSelector, tabSelector) {
      this.btn = document.querySelector(btnSelector);
      this.tab = document.querySelector(tabSelector);
      this.expanded = false;
      this.scrollPosition = null;

      this.btn.addEventListener('click', () => {
          this.toggle();
      });
  }

  toggle() {
      this.expanded = !this.expanded;
      this.btn.setAttribute('aria-expanded', this.expanded);
      this.tab.setAttribute('aria-hidden', !this.expanded);

      if (this.expanded) {
          this.open();
      } else {
          this.close();
      }
  }

  open() {
      this.btn.classList.add('is_expanded');
      this.tab.classList.add('is_open');
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      }

  close() {
      this.btn.classList.remove('is_expanded');
      this.tab.classList.remove('is_open');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      this.btn.setAttribute('aria-expanded', false);
  } 
}

  