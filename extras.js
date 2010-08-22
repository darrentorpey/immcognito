function any(arr, test) {
  result = false;
  for (var i = 0; i < arr.length; i++)
    if (test(arr[i])) result = true;
  return result;
}

gbox.getGroup = function(group) {
  return this._objects[group];
}