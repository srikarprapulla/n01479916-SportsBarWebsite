$(document).ready(function () {
  $.getJSON("./../json/cricket.json", function (data) {
    $.each(data, function (index, eachObj) {
      if (index % 2 == 1) {
        $("#text").append(
          '<section id="' +
            eachObj.id +
            '">' +
            '<p class="description">' +
            eachObj.description +
            "</p>" +
            "</section>"
        );
        var image = new Image();
        image.src = eachObj.imageSource;
        image.className = "image";
        $("#" + eachObj.id).append(image);
      } else {
        $("#text").append('<section id="' + eachObj.id + '">' + "</section>");
        var image = new Image();
        image.src = eachObj.imageSource;
        image.className = "image";
        $("#" + eachObj.id).append(image);
        $("#" + eachObj.id).append(
          '<p class="description">' + eachObj.description + "</p>"
        );
      }
    });
  });
});
