class Sunglasses {
    constructor(name) {
        this.name = name;
    }
    catEye() {
        return `Features a feminine design with dramatic, upswept corners, a staple of 1950s and '60s glamour.`
    }
    round() {
        return `Characterized by perfectly circular lenses, famously worn by John Lennon and associated with bohemian style.`
    }

}

class Geometric extends Sunglasses {
    round() {
        return `Features a single, large lens that covers the entire eye area, often with a sporty or futuristic look.`
    }
    square() {
        return `Features angular frames and bold lines, offering balance to round or oval face shapes.`
    }

}   