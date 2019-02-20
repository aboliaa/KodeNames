var data = [];

var i;
for (i = 1; i <= 280; i++) {
    if (i == 46) {
        // Dirty hack to fix corrupted image
    }
    else {
        data.push('IMAGE-'+i+'.jpeg');
    }
}
