$(function() {
  $("form#celebrityForm").submit(function(event){
    event.preventDefault();
    var answer1 = $("input:radio[name=a1]:checked").val();
    var answer2 = $("input:radio[name=a2]:checked").val();
    var answer3 = $("input:radio[name=a3]:checked").val();
    $(".person").hide();
    if (answer1 === answer2) {
      $("#" + answer1).show()
    } else if ( answer1 === answer3) {
      $("#" + answer1).show()
    } else if (answer2 == answer3) {
      $("#" + answer2).show()
    }
  })
})
