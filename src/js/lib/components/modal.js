import $ from "../core";

$.prototype.calcSroll = function() {
  const div = document.createElement("div");

  div.style.width = "50px";
  div.style.height = "50px";
  div.style.overflowY = "scroll";
  div.style.visibility = "hidden";

  document.body.appendChild(div);

  const scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
}

$.prototype.modal = function(created) {
  const offset = this.calcSroll();

  for (let i = 0; i < this.length; i++) {
    const target = this[i].getAttribute("data-target");
    $(this[i]).on("click", function(event) {
    event.preventDefault();
        $(target).fadeIn(500);
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${offset}px`
    });

    document.querySelectorAll(`${target} [data-close]`).forEach(close => {
      $(close).on("click", function() {
        $(target).fadeOut(500);
        document.body.style.overflow = "";
        document.body.style.marginRight = "0px"
        if (created) {
          document.querySelector(target).remove();
        }
      });
    });

    $(target).on("click", function(event) {
      if (event.target.classList.contains("modal")) {
        $(target).fadeOut(500);
        document.body.style.overflow = "";
        document.body.style.marginRight = "0px"
        if (created) {
          document.querySelector(target).remove();
        }
      }
    });
  }
};

$.prototype.createModal = function({text, btns} = {}) {
  for (let i = 0; i< this.length; i++) {
    let modal = document.createElement("div");
    modal.classList.add("modal");
    modal.setAttribute("id", this[i].getAttribute("data-target").slice(1));

    const buttons = [];
    for (let j = 0;j < btns.count; j++){
      let btn = document.createElement("button");
      btn.classList.add("btn", ...btns.settings[j][1]);
      btn.textContent = btns.settings[j][0];
      if (btns.settings[j][2]) {
          btn.setAttribute("data-close", "true");
      }
      if (btns.settings[j][3] && typeof(btns.settings[j][3]) === "function") {
          btn.addEventListener("click", btns.settings[j][3]);
      }

      buttons.push(btn);
    }

    modal.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <button class="close" data-close>
            <span>&times;</span>
          </button>
          <div class="modal-header">
            <div class="modal-title">
              ${text.title}
            </div>
          </div>
          <div class="modal-body">
            ${text.body}
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    `;

    modal.querySelector(".modal-footer").append(...buttons);
    document.querySelector(".container").append(modal);
    $(this[i]).modal(true);
    $(this[i].getAttribute("data-target")).fadeIn(500);
  }
};