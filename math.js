module.exports = {
    dist: (x1, y1, x2, y2) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2),
    triArea: (w, h) => {
        if (w > 0 && h > 0) return w * h * (1 / 2);
        return NaN;
    },
    triHypotLen: (b, h) => {
        if (b > 0 && h > 0) return Math.sqrt(b ** 2 + h ** 2);
        return NaN;
    }
};
