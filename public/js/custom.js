function linkifyHeaders() {
  $.each($("h2,h3,h4,h5"), function (index, h) {
    var content = "<a href='#" + $(h).attr("id") + "'>" + $(h).text() + "</a>";
    $(h).html(content);
  });
}

$(document).ready(function() {
  linkifyHeaders();
});
