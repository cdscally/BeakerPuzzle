function Beaker(capacity) {
  if (capacity != 3 && capacity != 5) {
    throw "A beaker can only have capacity of 3 or 5"
  }
  this.capacity = capacity;
  this.contents = 0;
}

Beaker.prototype.fill = function() {
  this.contents = this.capacity;
}

Beaker.prototype.empty = function() {
  this.contents = 0;
}
