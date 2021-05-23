// Remove Button Event
$(document).ready(function () {
  $(document).on("click", ".remove", function () {
    $(this).parents("tr").remove();
  });
});

// delete all

// $(document).on("click", ".rmaBtn", function () {
//   $(".remove").parents("tr").remove();
// });

//  Add Button Event
$(document).on("click", "#saveBtn", function () {
  // lay ra gia tri nhap vao
  var idRes = document.getElementById("idRes").value;
  var nameBr = document.getElementById("nameBr").value;
  var title = document.getElementById("title").value;
  var inputState = document.getElementById("inputState").value;
  var borrowed = document.getElementById("dateBor").value;
  var returned = document.getElementById("dateReturn").value;

  // them vao bang
  $("tbody").append(
    "<tr><td class='idRes'>" +
      idRes +
      "</td><td class='nameBr'>" +
      nameBr +
      "</td><td class='title'>" +
      title +
      "</td><td class='inputState'>" +
      inputState +
      "</td><td id='bor'>" +
      borrowed +
      "</td><td id='return'>" +
      returned +
      "</td><td> <a class='remove' data-toggle='tooltip'><i class='fa fa-remove'></i></a> </td></tr>"
  );
});

// Search Event
$(document).ready(function () {
  $("#searchInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#mytable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

$(document).ready(function () {
  $("#hide").click(function () {
    $("#form-open").hide();
  });
  $("#show").click(function () {
    $("#form-open").show();
  });
});

$(document).ready(function () {
  $(document).on("click", "#nav-implement-lab", function () {
    $("searchInput").focus();
  });
});
