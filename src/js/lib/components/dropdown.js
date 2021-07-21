import $ from "../core";

$.prototype.dropdown = function() {
  for (let i = 0; i < this.length; i++) {
    const id = $(this[i]).getAttribute("id")[0].id;

    $(this[i]).on("click", function() {
      $(`[data-dopdown-id=${id}]`).fadeToggle(300);
    });
  }
}