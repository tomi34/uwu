input.onButtonPressed(Button.A, () => {
    basic.clearScreen()
    let on = 0
    let x = 0
    let y = 0
    let yes = 0
    do {
        if (randint(0,1) == 1 && led.point(x, y) === false) { 
            led.plot(x, y)
            on++
            if (x == 2 && y == 2) {
                yes = 1
            }
        }
        if (x == 4) {
            x = 0
            y++
        }
        else if (x == 4 && y == 4 && on < 15) {
            x = 0
            y = 0
        }
        else {
            x++
        }
    } while (on != 15)
    
    basic.pause(3000)
    basic.clearScreen()
    if (yes == 1) {
        basic.showLeds(`
        #...#
        .#.#.
        ..#..
        .#.#.
        #...#
        `)
    }
    else {
        basic.showLeds(`
        .....
        ....#
        ...#.
        #.#..
        .#...
        `)
    }
})