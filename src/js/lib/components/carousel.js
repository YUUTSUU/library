import $ from "../core";

$.prototype.carousel = function({slides, autoPlay, indicator} = {}) {
  for (let i = 0; i < this.length; i++) {
    const innerElement = this[i].querySelector(".carousel-inner"),
          innerWidth = +window.getComputedStyle(innerElement).width.replace(/\D/g, ""),
          slidesItem = this[i].querySelectorAll(".carousel-item"),
          slidesField = this[i].querySelector(".carousel-slides"),
          dots = [],
          quantity = slides - 1 || slidesItem.length - 1; 

    slidesField.style.width = `${100 * (quantity + 1)}%`;

    slidesItem.forEach(slide => {
      slide.style.width = `${innerWidth}px`;
    });

    let offset = 0,
        index = 0,
        slidePause = null;

    if (indicator) {
      const indicators = document.createElement("ol")
      indicators.classList.add("carousel-indicators");
      this[i].prepend(indicators);
      for (let j = 0; j < slidesItem.length; j++) {
        const dot = document.createElement("li");
        dot.setAttribute("data-slide-to", j + 0);
        dots.push(dot);
        indicators.append(...dots);
        if (j == 0) {
          dot.classList.add("active");
        }
      }

      const id = this[i].getAttribute("id");

      $(`#${id} .carousel-indicators li`).click(function() {
        index = this.getAttribute("data-slide-to");
        offset = innerWidth * index;

        slidesField.style.transform = `translateX(-${offset}px)`;

        try {
          dots.forEach(dot => {
            dot.classList.remove("active");
          });
          dots[index].classList.add("active");
        } catch(e) {}
      });
    }

    $(this[i].querySelector("[data-slide='next']")).click(event => {
      event.preventDefault();

      if (offset == innerWidth * quantity) {
        offset = 0;
      } else {
        offset += innerWidth;
      }
      slidesField.style.transform = `translateX(-${offset}px)`;

      if(index == quantity) {
        index = 0;
      } else {
        index++;
      }

      try {
        dots.forEach(dot => {
          dot.classList.remove("active");
        });
        dots[index].classList.add("active");
      } catch(e) {}
    });

    $(this[i].querySelector("[data-slide='prev']")).click(event => {
      event.preventDefault();

      if (offset == 0) {
        offset = innerWidth * quantity;
      } else {
        offset -= innerWidth;
      }
      slidesField.style.transform = `translateX(-${offset}px)`;

      if(index == 0) {
        index = quantity;
      } else {
        index--;
      }

      try {
        dots.forEach(dot => {
          dot.classList.remove("active");
        });
        dots[index].classList.add("active");
      } catch(e) {}
    });

    animated();

    $(this[i]).on("mouseenter", () => {
      clearInterval(slidePause);
    })

    $(this[i]).on("mouseleave", () => {
      animated();
    })

    function animated() {
      if (autoPlay) {
        slidePause = setInterval(() => {
          if (offset == innerWidth * quantity) {
            offset = 0;
          } else {
            offset += innerWidth;
          }
  
          if(index == quantity) {
            index = 0;
          } else {
            index++;
          }
  
          slidesField.style.transform = `translateX(-${offset}px)`;
          try {
            dots.forEach(dot => {
              dot.classList.remove("active");
            });
            dots[index].classList.add("active");
          } catch(e) {}
        }, 3000);
      }
    }
  }
}