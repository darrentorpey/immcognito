function any(arr, test) {
  result = false;
  for (var i = 0; i < arr.length; i++)
    if (test(arr[i])) result = true;
  return result;
}

gbox.getGroup = function(group) {
  return this._objects[group];
}

timerJustFinished = function(obj, name, time) {
  return toys.timer.after(obj, name, time) == toys.TOY_DONE
}