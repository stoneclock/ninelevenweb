const Game = new Phaser.Game(1000,700 , Phaser.AUTO, '', {preload, create, update})

let player, alien1, alien2, alien3, alien4, alien5, alien6, virus7, virus8, virus9, 
virus10, cursors, fon, exp

const upbtn = document.GetElementById('upbtn'),
downbtn = document.GetElementById('downbtn'),
leftbtn = document.GetElementById('leftbtn'),
rightbtn = document.GetElementById('rightbtn')

let p = 1, q = 1, r = 1, s = 1, t = 1, u = 1, v = 1

function preload() {
    Game.load.spritesheet('exp', 'explosion.png', 900/9, 900/9)
    Game.load.image('bird', 'plane1.png', 480, 195)
    Game.load.image('alien', 'alien.jpg', 159, 880)
    Game.load.image('background', 'fon.jpg')
}

function create() {
    Game.scale.pageAlignHorizontally = true
    fon=Game.add.sprite(0, 0, 'background')
    fon.width=2000
    fon.height=1200
    Game.world.setBounds(0, 0, 2000,700)

player = Game.add.sprite(50, 50, 'bird')
player.anchor.setTo(0.5)
player.scale.setTo(0.3)

exp = Game.add.sprite(5000, 5000, 'exp')
exp.anchor.setTo(0.5)
exp.scale.setTo(1)
exp.animations.add('nineleven', [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90], 10, false)

alien1 = Game.add.sprite(450, 130, 'alien')
alien1.anchor.setTo(0.5)
alien1.scale.setTo(0.3)

alien2 = Game.add.sprite(900, 130, 'alien')
alien2.anchor.setTo(0.5)
alien2.scale.setTo(0.3)

alien3 = Game.add.sprite(1350, 130, 'alien')
alien3.anchor.setTo(0.5)
alien3.scale.setTo(0.3)

alien4 = Game.add.sprite(1800, 130, 'alien')
alien4.anchor.setTo(0.5)
alien4.scale.setTo(0.3)

Game.camera.follow(player, 
Phaser.Camera.follow_platformer, 0.1, 0.1)

cursors = Game.input.keyboard.createCursorKeys()
}

function update() {
    if (cursors.right.isDown) {
        if(player.x<=fon.width-player.width/2)
        player.x += 12
        player.scale.setTo(0.3,0.3)
    } else if (cursors.left.isDown) {
        player.x -= 12
        player.scale.setTo(-0.3,0.3)
    }

    if (cursors.up.isDown) {
        player.y -= 12
    } else if (cursors.down.isDown) {
        player.y += 12
    }


    if(alien1.y < window.innerHeight - 100 && p == 1){
        alien1.y += 15
    }
    else{
        p = 2
    }

    if(alien1.y > 0 && p == 2){
        alien1.y -= 15
    }
    else{
        p = 1
    }

    if (player.y < alien1.y + 132 &&
        player.y > alien1.y - 70 &&
        player.x < alien1.x + 132 &&
        player.x > alien1.x - 70)
    {
        exp.x = 450
        exp.y = 130
        exp.animations.play('nineleven')
        player.x = 50
        player.y = 50
        if (player.x <= 15 ||
            player.x >= 85 ||
            player.y <= 15 ||
            player.y >= 85) {
                exp.x = 5000
                exp.y = 5000
        }
    }

// Starting alien2 code


    if(alien2.y < window.innerHeight - 100 && q == 1){
        alien2.y += 18
    }
    else{
        q = 2
    }

    if(alien2.y > 0 && q == 2){
        alien2.y -= 18
    }
    else{
        q = 1
    }

    if (player.y < alien2.y + 132 &&
        player.y > alien2.y - 70 &&
        player.x < alien2.x + 132 &&
        player.x > alien2.x - 70)
    {
        exp.x = alien2.x
        exp.y = alien2.y
        exp.animations.play('nineleven')
        player.x = 50
        player.y = 50
        if (player.x <= 15 ||
            player.x >= 85 ||
            player.y <= 15 ||
            player.y >= 85) {
                exp.x = 5000
                exp.y = 5000
        }
    }


// statring alien3


    if(alien3.y < window.innerHeight - 100 && r == 1){
        alien3.y += 21
    }
    else{
        r = 2
    }

    if(alien3.y > 0 && r == 2){
        alien3.y -= 21
    }
    else{
        r = 1
    }

    if (player.y < alien3.y + 132 &&
        player.y > alien3.y - 70 &&
        player.x < alien3.x + 132 &&
        player.x > alien3.x - 70)
    {
        exp.x = alien3.x
        exp.y = alien3.y
        exp.animations.play('nineleven')
        player.x = 50
        player.y = 50
        if (player.x <= 15 ||
            player.x >= 85 ||
            player.y <= 15 ||
            player.y >= 85) {
                exp.x = 5000
                exp.y = 5000
        }
    }

// Starting alien4 code


    if(alien4.y < window.innerHeight - 100 && s == 1){
        alien4.y += 25
    }
    else{
        s = 2
    }

    if(alien4.y > 0 && s == 2){
        alien4.y -= 25
    }
    else{
        s = 1
    }

    if (player.y < alien4.y + 132 &&
        player.y > alien4.y - 70 &&
        player.x < alien4.x + 132 &&
        player.x > alien4.x - 70)
    {
        exp.x = alien4.x
        exp.y = alien4.y
        exp.animations.play('nineleven')
        player.x = 50
        player.y = 50
        if (player.x <= 15 ||
            player.x >= 85 ||
            player.y <= 15 ||
            player.y >= 85) {
                exp.x = 5000
                exp.y = 5000
        }
    }
}

