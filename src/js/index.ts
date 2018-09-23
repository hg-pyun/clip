class Rect {
    width : number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
}

console.log('hello', new Rect(100, 100));