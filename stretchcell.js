/*
Implement a cell type named StretchCell(inner, width, height) that conforms to the table cell interface
described earlier in the chapter. It should wrap another cell (like UnderlinedCell does) and ensure that 
the resulting cell has at least the given width and height, even if the inner cell would naturally be smaller.
*/

function StretchCell(inner, width, height) {
	this.inner = inner;
}

StretchCell.prototype.minWidth = function() {
	return this.inner.minWidth();
}

StretchCell.prototype.minHeight = function() {
  return this.inner.minHeight() + 1;
}

StretchCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height-1).concat([repeat(" ", width)]);
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]
