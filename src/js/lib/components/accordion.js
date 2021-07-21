import $ from "../core";

$.prototype.accordion = function(headerActive = "accordion-header-active", contentActive = "accordion-content-active",
paddings = "40") {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).on("click", function() {
      $(this).toggleClass(headerActive);
      $(this.nextElementSibling).toggleClass(contentActive);

      if (this.classList.contains(headerActive)) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + paddings + "px";
      } else {
        this.nextElementSibling.style.maxHeight = "0px"
      }
    });
  }
}
