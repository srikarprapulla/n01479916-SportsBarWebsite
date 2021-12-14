$(document).ready(function () {
  $.getJSON("https://rana0909.github.io/N01481584-SportsBarWebsite/json/cricket.json", function (data) {
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
        let image = new Image();
        image.src = eachObj.imageSource;
        image.className = "image";
        $("#" + eachObj.id).append(image);
      } else {
        $("#text").append('<section id="' + eachObj.id + '">' + "</section>");
        let image = new Image();
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
