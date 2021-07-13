import $ from "../core";

$.prototype.animateOverTime = function(duration, callback, finaly) {
  let timeStart;

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    let timeElapsed = time - timeStart,
        complection = Math.min(timeElapsed / duration, 1);

    callback(complection);

    if (timeElapsed < duration) {
      requestAnimationFrame(_animateOverTime);
    }
    else {
      if (typeof finaly === "function") {
        finaly();
      }
    }
  }

  return _animateOverTime;
};

$.prototype.fadeIn = function(duration, display, finaly) {
  for (let i = 0; i < this.length; i ++) {
    this[i].style.display = display || "block"; //параметр по умолчанию

    const _fadeIn = (complection) => {
      this[i].style.opacity = complection;
    }

    const animation = this.animateOverTime(duration, _fadeIn, finaly);
    requestAnimationFrame(animation);
  }

  return this;
};

$.prototype.fadeOut = function(duration, finaly) {
  for (let i = 0; i < this.length; i ++) {

    const _fadeOut = (complection) => {
      this[i].style.opacity = 1 - complection;

      if (complection === 1) {
        this[i].style.display = "none";
      }
    }

    const animation = this.animateOverTime(duration, _fadeOut, finaly);
    requestAnimationFrame(animation);
  }

  return this;
};