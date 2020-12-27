function LogoSize(width, height) {
  var maxWidth = 110;
  var maxHeight = 30;

  if (width >= height) {
    var ratio = maxWidth / width;
    var h = Math.ceil(ratio * height);

    if (h > maxHeight) {
      // Too tall, resize
      var ratio = maxHeight / height;
      var w = Math.ceil(ratio * width);
      var ret = {
        width: w,
        height: maxHeight,
      };
    } else {
      var ret = {
        width: maxWidth,
        height: h,
      };
    }
  } else {
    var ratio = maxHeight / height;
    var w = Math.ceil(ratio * width);

    if (w > maxWidth) {
      var ratio = maxWidth / width;
      var h = Math.ceil(ratio * height);
      var ret = {
        width: maxWidth,
        height: h,
      };
    } else {
      var ret = {
        width: w,
        height: maxHeight,
      };
    }
  }

  return ret;
}

export default LogoSize;
