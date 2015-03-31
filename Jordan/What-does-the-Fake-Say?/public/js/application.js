$(document).ready(function() {

  var current = ["company"]

  $("#say_something").click(function(e){
      e.preventDefault();

      $.ajax({
        url:"/say",
        method:"GET",
        success: function(response){
          $("#response").text(response[current[0]])
        }

      })

  });

$("#hacker").click(function(e){
  e.preventDefault();

    current = ["hacker"]


    })


$("#company").click(function(e){
  e.preventDefault();

    current = ["company"]


    })

});
