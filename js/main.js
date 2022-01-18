$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let userInput = $("#groceries").val();
    // console.log(userInput);
    let list = userInput.split(", ").sort();
    // console.log(list);
    // console.log(userInput)
    list.forEach(function(listItem) {
      listItem = listItem.charAt(0).toUpperCase() + listItem.slice(1);
      $("#output").append("<li>" + listItem + "</li>");
    });
  });
});