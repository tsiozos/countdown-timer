// Add your code here
function showSmallNumber(num: number) {
    let im: Image;
    let dec: Image;
    let comp: Image = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `); //composite image of the two arrays
    basic.clearScreen();
    if (num >= 0 && num <= 9) {
        numbers[num].showImage(0, 0)
    } else if (num >= 10 && num <= 99) {
        dec = numbers[Math.idiv(num, 10)];
        im = numbers[num % 10];
        // copy the first digit in the first position
        for (let l = 0; l <= 4; l++)
            for (let c = 0; c <= 4; c++)
                comp.setPixel(c, l, im.pixel(c, l));

        // decimals digit
        for (let l = 0; l <= 4; l++)
            // copy the second digit to the decimals position
            for (let c = 0; c <= 1; c++)
                comp.setPixel(c, l, dec.pixel(c + 3, l));

        comp.showImage(0, 0);
    }
}

let numbers: Image[] = []
numbers = [
    images.createImage(`
    . . . . .
    . . . # #
    . . . # #
    . . . . .
    . . . . .
    `),
    images.createImage(`
    . . . . #
    . . . # #
    . . . . #
    . . . . #
    . . . . .
    `),
    images.createImage(`
    . . . # #
    . . . . #
    . . . # .
    . . . # #
    . . . . .
    `),
    images.createImage(`
    . . . # #
    . . . . #
    . . . . #
    . . . # #
    . . . . .
    `),
    images.createImage(`
    . . . # .
    . . . # .
    . . . # #
    . . . . #
    . . . . .
    `),
    images.createImage(`
    . . . # #
    . . . # .
    . . . . #
    . . . # .
    . . . . .
    `),
    images.createImage(`
    . . . # #
    . . . # .
    . . . # #
    . . . # #
    . . . . .
    `),
    images.createImage(`
    . . . # #
    . . . . #
    . . . . #
    . . . . #
    . . . . .
    `),
    images.createImage(`
    . . . # #
    . . . # #
    . . . # #
    . . . # #
    . . . . .
    `),
    images.createImage(`
    . . . # #
    . . . # #
    . . . . #
    . . . # #
    . . . . .
    `)
]