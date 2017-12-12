// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function getWidth() {
  return $("#input_width").val();
};

function getHeight() {
  return $("#input_height").val();
};

$("#submit_button").click(function() {
	let width = getWidth();
  let height = getHeight();
  makeGrid(width, height);
});

function makeGrid(width, height) {
  var table = $("#pixel_canvas");
  table.empty();
	for (var row = 0; row < height; row++) {
  	table.append("<tr>");
  	for (var col = 0; col < width; col++) {
    	table.append("<td></td>");
    }
    table.append("</tr>");
  }
}

$("#pixel_canvas").click(function(event) {
  let color = $('#colorPicker').val();
  $(event.target).css('backgroundColor', color);
});
