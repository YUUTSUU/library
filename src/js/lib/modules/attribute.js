import $ from '../core';

$.prototype.addAttribute = function(...attribute) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].setAttribute) {
      continue;
    }

    this[i].setAttribute(...attribute);
  }
}

$.prototype.removeAttribute = function(...attribute) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].removeAttribute) {
      continue;
    }

    this[i].removeAttribute(...attribute);
  }
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
}