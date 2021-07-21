import $ from '../core';

$.prototype.getAttribute = function(...attribute) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].getAttribute) {
      continue;
    }

    this[i].getAttribute(...attribute);
  }

  return this;
}

$.prototype.setAttribute = function(...attribute) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].setAttribute) {
      continue;
    }

    this[i].setAttribute(...attribute);
  }

  return this;
}

$.prototype.removeAttribute = function(...attribute) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].removeAttribute) {
      continue;
    }

    this[i].removeAttribute(...attribute);
  }

  return this;
}

$.prototype.toggleAttribute = function(...attribute) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].hasAttribute) {
      continue;
    }

    if (this[i].hasAttribute(...attribute)) {
      this[i].removeAttribute(...attribute);
    } else {
      this[i].setAttribute(...attribute);
    }
  }

  return this;
}