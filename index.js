class Polygon {
    constructor(integersArray) {
        this.sides = integersArray;
        this.count = this.sides.length
    }
    get countSides() {
        return this.count
    }

    get perimeter() {
        return this.sides.reduce(function(sum, value) {return sum + value})
    }
}

class Triangle extends Polygon {
    get isValid() {
        if(this.count === 3) {
            if(this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] + this.sides[2] > this.sides[1] && this.sides[2] + this.sides[1] > this.sides[0]) {
                return true
            }
        }
        return false
    }
}

class Square extends Polygon {
    get isValid() {
        if(this.count === 4) {
            let side1 = this.sides[0];
            let side2 = this.sides[1];
            let side3 = this.sides[2];
            let side4 = this.sides[3];
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
        }
    }

    get area() {
        if(this.count === 4) {
            return this.sides[0] ** 2
        }
    }
}
