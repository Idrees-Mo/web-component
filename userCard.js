class UserCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h3>${this.getAttribute('name')}</h3>`;
  }
}

customElements.define('user-card', UserCard);
