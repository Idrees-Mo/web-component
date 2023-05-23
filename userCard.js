class UserCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = 'Mo Idrees';
  }
}

customElements.define('user-card', UserCard);
