import $ from "./lib/lib";

$("#first").on("click", function() {
  $(".content").eq(0).fadeToggle(800)
});

$("[data-count='second']").on("click", function() {
  $(".content").eq(1).fadeToggle(800)
});

$("button").eq(2).on("click", function() {
  $(".content").fadeToggle(800)
});

// $(".wrap").html(
//   `
//   <div class="dropdown m-20">
//     <button class="btn btn-primary dropdown-toggle" name="kdlsk" id="dropDownMenuButton">Dropdown button</button>
//     <div class="dropdown-menu" data-dopdown-id="dropDownMenuButton">
//         <a href="#" class="dropdown-item">Action #1</a>
//         <a href="#" class="dropdown-item">Action #2</a>
//         <a href="#" class="dropdown-item">Action #3</a>
//     </div>
//   </div>
//   `
// )

$(".dropdown-toggle").dropdown();

$("[data-toggle=modal]").modal();

$("#trigger").on("click", function() {
  $("#trigger").createModal({
    text: {
      title: "Modal title 2",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quidem veritatis aperiam accusamus numquam impedit officiis quasi obcaecati non tenetur iusto, totam eligendi dolorum rerum accusantium mollitia neque cum! Perspiciatis!"
    },
    btns: {
      count: 3,
      settings: [
        [
          "close",
          ["btn-danger", "mr-20"],
          true
        ],
        [
          "Save changes",
          ["btn-succes"],
          false,
          () => {
            alert("Данные сохранены");
          }
        ],
        [
          "Another btn",
          ["btn-warning", "ml-10"],
          false,
          () => {
            alert("Hello World")
          }
        ]
      ]
    }
  });
});

$("[data-tabpanel] .tab-item").tab();

$(".accordion-header").accordion();

$(".carousel").carousel({
  slides: 3,
  autoPlay: true,
  indicator: true
});

$().get("https://jsonplaceholder.typicode.com/todos/1")
  .then(res => console.log(res))