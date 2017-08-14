transfer = function(beaker_from,beaker_to) {
  if ( beaker_to.capacity - beaker_to.contents >= beaker_from.contents) {
    beaker_to.contents += beaker_from.contents
    beaker_from.contents = 0
  } else {
    beaker_from.contents -= beaker_to.capacity - beaker_to.contents
    beaker_to.fill();
  }
}
