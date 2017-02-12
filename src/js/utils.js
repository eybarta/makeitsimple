export function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

export function contrastColor(color) {
    let rgb;
    if (/,/g.test(color)) {
        rgb = color;
    } else {
        rgb = hexToRgb(hex);
    }
    var o = Math.round(((parseInt(rgb.r) * 299) + (parseInt(rgb.g) * 587) + (parseInt(rgb.b) * 114)) /1000);
    if(o > 125) {
        return '#282d31';
    }
    else {
        return 'white';
    }
}