import $ from "../core";

$.prototype.tab = function() {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).on("click", function() {
      $(this)
        .addClass('tab-item-active')
        .siblings().removeClass('tab-item-active')
        .closest('.tab').find('.tab-content').removeClass('tab-content-active')
        .eq($(this).index()).addClass('tab-content-active');
    });
  }
}