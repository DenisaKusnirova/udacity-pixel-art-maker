
// Get the width
function getWidth() {
  return $("#input_width").val();
};

// Get the height
function getHeight() {
  return $("#input_height").val();
};

// When size is submitted by the user, call makeGrid()
$("#submit_button").click(function() {
	let width = getWidth();
  let height = getHeight();
  makeGrid(width, height);
});

// Create a table
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

// Get the color
$("#pixel_canvas").on('click', 'td', function() {
  let color = $('#colorPicker').val();
  this.style.backgroundColor = color;
});
