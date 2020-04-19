sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    mySprite2.destroy(effects.trail, 100)
    mySprite.say("C bon sa mèr", 2000)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . a a a . . . . . . . . . . 
. . . a a . . . . . . . . . . . 
. . . . a a a . . . . . . . . . 
. . . . . . a . . . . . . . . . 
. . . a a a a . . . . . . . . . 
. . . . a a . . . . . . . . . . 
. . . a a a a . . . . . . . . . 
. . . a . . a . . . . . . . . . 
. . . a a a a . . . . . . . . . 
. . . a . . a . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 7 . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . 2 2 . . . . . . . . 
. . . . . . 2 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
mySprite2.setPosition(15, 30)
mySprite.setFlag(SpriteFlag.BounceOnWall, true)
