function Sharpie(color, width) {
    this.color = (typeof color) == 'string' ? color : undefined;
    this.width = (typeof width) == 'number' ? width : undefined;
    this.inkAmount = 100;
    this.use = function(width) {
        this.inkAmount -= this.width;
    }

}