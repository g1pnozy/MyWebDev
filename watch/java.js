function getAverageColor{
    var img = document.getElementById('image');
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var width = img.width;
    var height = img.height;
    canvas.width = width;
    canvas.height = height;
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, width, height);
    var data = imageData.data;
    var r = 0;
    var g = 0;
    var b = 0;
    var i = 0;
    var count = 0;
    while (i < data.length) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
        i += 4;
        count++;
    }
    r = Math.round(r / count);
    g = Math.round(g / count);
    b = Math.round(b / count);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}