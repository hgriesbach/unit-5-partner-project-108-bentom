// This function goes through each index value and assigns the variable to a spot on the screen. It also determines which row each card will be going on.
function SetGrid () {
    for (let RandCardPosition = 0; RandCardPosition <= RandomList.length - 1; RandCardPosition++) {
        if (RandCardPosition < 4) {
            RandomList[RandCardPosition][0].setPosition(RandCardPosition % 4 * 32 + 32, 40)
            RandomList[RandCardPosition][0].setFlag(SpriteFlag.Invisible, true)
            RandomList[RandCardPosition][1].setPosition(RandCardPosition % 4 * 32 + 32, 40)
            RandomList[RandCardPosition][1].setFlag(SpriteFlag.Invisible, true)
            RandomList[RandCardPosition][2].setPosition(RandCardPosition % 4 * 32 + 32, 40)
            RandomList[RandCardPosition][2].setFlag(SpriteFlag.Invisible, true)
            RandomList[RandCardPosition][3].setPosition(RandCardPosition % 4 * 32 + 32, 40)
            RandomList[RandCardPosition][3].setFlag(SpriteFlag.Invisible, false)
        } else {
            RandomList[RandCardPosition][0].setPosition(RandCardPosition % 4 * 32 + 32, 80)
            RandomList[RandCardPosition][0].setFlag(SpriteFlag.Invisible, true)
            RandomList[RandCardPosition][1].setPosition(RandCardPosition % 4 * 32 + 32, 80)
            RandomList[RandCardPosition][1].setFlag(SpriteFlag.Invisible, true)
            RandomList[RandCardPosition][2].setPosition(RandCardPosition % 4 * 32 + 32, 80)
            RandomList[RandCardPosition][2].setFlag(SpriteFlag.Invisible, true)
            RandomList[RandCardPosition][3].setPosition(RandCardPosition % 4 * 32 + 32, 80)
            RandomList[RandCardPosition][3].setFlag(SpriteFlag.Invisible, false)
        }
    }
}
// Calculates the position that the program should be at in the list when the game is running.
function CardPositionCalculator (RawNumber: number) {
    return RawNumber % 8
}
// These two bits allow for the player to change which card is highlighted.
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameRunning) {
        CardPositionTracker += -1
    }
})
// If this were working, it would allow for the program to switch between sprites easily by using lists and their positions.
function RunGame () {
    GameRunning = true
    CardPositionTracker = 1000000000
    while (GameRunning) {
        RandomList[CardPositionCalculator(CardPositionTracker)][3] = RandListReference[CardPositionCalculator(CardPositionTracker)][2]
        CardPositionTracker += 1
        SetGrid()
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    CardPositionTracker += 1
    test += 1
})
// This function initializes each variable with the needed lists. It then randomizes the lists .
function CreateCards () {
    Card1 = [
    sprites.create(assets.image`CardFrontNoSelect`, SpriteKind.Player),
    sprites.create(assets.image`CardFrontYesSelect`, SpriteKind.Player),
    sprites.create(assets.image`CardBack1`, SpriteKind.Player),
    sprites.create(assets.image`CardFrontNoSelect`, SpriteKind.Player)
    ]
    Card2 = [
    sprites.create(assets.image`CardFrontNoSelect`, SpriteKind.Player),
    sprites.create(assets.image`CardFrontYesSelect`, SpriteKind.Player),
    sprites.create(assets.image`CardBack1`, SpriteKind.Player),
    sprites.create(assets.image`CardFrontNoSelect`, SpriteKind.Player)
    ]
    Card3 = [
    sprites.create(assets.image`CardFrontNoSelect`, SpriteKind.Player),
    sprites.create(assets.image`CardFrontYesSelect`, SpriteKind.Player),
    sprites.create(assets.image`CardBack2`, SpriteKind.Player),
    sprites.create(assets.image`CardFrontNoSelect`, SpriteKind.Player)
    ]
    Card4 = [
    sprites.create(assets.image`CardFrontNoSelect`, SpriteKind.Player),
    sprites.create(assets.image`CardFrontYesSelect`, SpriteKind.Player),
    sprites.create(assets.image`CardBack2`, SpriteKind.Player),
    sprites.create(assets.image`CardFrontNoSelect`, SpriteKind.Player)
    ]
    Card5 = [
    sprites.create(assets.image`CardFrontNoSelect`, SpriteKind.Player),
    sprites.create(assets.image`CardFrontYesSelect`, SpriteKind.Player),
    sprites.create(assets.image`CardBack3`, SpriteKind.Player),
    sprites.create(assets.image`CardFrontNoSelect`, SpriteKind.Player)
    ]
    Card6 = [
    sprites.create(assets.image`CardFrontNoSelect`, SpriteKind.Player),
    sprites.create(assets.image`CardFrontYesSelect`, SpriteKind.Player),
    sprites.create(assets.image`CardBack3`, SpriteKind.Player),
    sprites.create(assets.image`CardFrontNoSelect`, SpriteKind.Player)
    ]
    Card7 = [
    sprites.create(assets.image`CardFrontNoSelect`, SpriteKind.Player),
    sprites.create(assets.image`CardFrontYesSelect`, SpriteKind.Player),
    sprites.create(assets.image`CardBack4`, SpriteKind.Player),
    sprites.create(assets.image`CardFrontNoSelect`, SpriteKind.Player)
    ]
    Card8 = [
    sprites.create(assets.image`CardFrontNoSelect`, SpriteKind.Player),
    sprites.create(assets.image`CardFrontYesSelect`, SpriteKind.Player),
    sprites.create(assets.image`CardBack4`, SpriteKind.Player),
    sprites.create(assets.image`CardFrontNoSelect`, SpriteKind.Player)
    ]
    OrderedList = [
    Card1,
    Card2,
    Card3,
    Card4,
    Card5,
    Card6,
    Card7,
    Card8
    ]
    RandomList = []
    for (let index = 0; index < 8; index++) {
        RandomList.push(OrderedList.removeAt(randint(0, OrderedList.length - 1)))
    }
    RandListReference = []
    for (let SecondRandListCreate = 0; SecondRandListCreate <= RandomList.length - 1; SecondRandListCreate++) {
        RandListReference.push(RandomList[SecondRandListCreate])
    }
}
let OrderedList: Sprite[][] = []
let Card8: Sprite[] = []
let Card7: Sprite[] = []
let Card6: Sprite[] = []
let Card5: Sprite[] = []
let Card4: Sprite[] = []
let Card3: Sprite[] = []
let Card2: Sprite[] = []
let Card1: Sprite[] = []
let test = 0
let RandListReference: Sprite[][] = []
let CardPositionTracker = 0
let GameRunning = false
let RandomList: Sprite[][] = []
CreateCards()
SetGrid()
pause(100)
RunGame()
