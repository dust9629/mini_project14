$(function() {
  $("#create").on("submit", function (event) {
    event.preventDefault();
    var value = $(this).find("input").val();

    $("#todo-list").append(
      '<li>' +
      '<span>' +
      value +
      '</span>' +
      '<button type="button" class="complete">Complete</button> ' +
      '<button type="button" class="remove">Delete</button>' +
      '</li>'
    );

    $(this).trigger("reset");
  });

  $("body").on("click", ".complete", function () {
    $(this).parent("li").addClass("completed");
  });

  $("body").on("click", ".remove", function () {
    $(this).parent("li").remove();
  });
});