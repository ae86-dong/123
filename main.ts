makerbit.onIrButton(IrButton.NUM9, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Yes)
})
makerbit.onIrButton(IrButton.NUM0, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Cow)
})
makerbit.onIrButton(IrButton.Light, IrButtonAction.Pressed, function () {
    mbit_小车类.RGB_Car_Big2(mbit_&#23567;&#36710;&#31867;.enColor.White)
})
makerbit.onIrButton(IrButton.NUM1, IrButtonAction.Pressed, function () {
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
makerbit.onIrButton(IrButton.NUM3, IrButtonAction.Pressed, function () {
    basic.pause(100)
    music.playTone(330, music.beat(BeatFraction.Whole))
})
makerbit.onIrButton(IrButton.Power, IrButtonAction.Pressed, function () {
    mbit_小车类.RGB_Car_Big2(mbit_&#23567;&#36710;&#31867;.enColor.OFF)
})
makerbit.onIrButton(IrButton.Plus, IrButtonAction.Pressed, function () {
    mbit_小车类.RGB_Car_Big2(mbit_&#23567;&#36710;&#31867;.enColor.Pinkish)
})
makerbit.onIrButton(IrButton.NUM7, IrButtonAction.Pressed, function () {
    basic.pause(100)
    music.playTone(494, music.beat(BeatFraction.Whole))
})
makerbit.onIrButton(IrButton.NUM2, IrButtonAction.Pressed, function () {
    basic.pause(100)
    music.playTone(294, music.beat(BeatFraction.Whole))
})
makerbit.onIrButton(IrButton.NUM8, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Tortoise)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    mbit_小车类.CarCtrlSpeed2(mbit_&#23567;&#36710;&#31867;.CarState.Car_Run, 33, 0)
    basic.pause(50)
    mbit_小车类.CarCtrl(mbit_&#23567;&#36710;&#31867;.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.NUM6, IrButtonAction.Pressed, function () {
    basic.pause(100)
    music.playTone(440, music.beat(BeatFraction.Whole))
})
makerbit.onIrButton(IrButton.NUM5, IrButtonAction.Pressed, function () {
    basic.pause(100)
    music.playTone(392, music.beat(BeatFraction.Whole))
})
makerbit.onIrButton(IrButton.NUM4, IrButtonAction.Pressed, function () {
    basic.pause(100)
    music.playTone(349, music.beat(BeatFraction.Whole))
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    mbit_小车类.CarCtrlSpeed2(mbit_&#23567;&#36710;&#31867;.CarState.Car_Back, 35, 0)
    basic.pause(50)
    mbit_小车类.CarCtrl(mbit_&#23567;&#36710;&#31867;.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Minus, IrButtonAction.Pressed, function () {
    mbit_小车类.RGB_Car_Big2(mbit_&#23567;&#36710;&#31867;.enColor.Green)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    mbit_小车类.CarCtrlSpeed2(mbit_&#23567;&#36710;&#31867;.CarState.Car_Back, 0, 70)
    basic.pause(100)
    mbit_小车类.CarCtrl(mbit_&#23567;&#36710;&#31867;.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    mbit_小车类.CarCtrlSpeed2(mbit_&#23567;&#36710;&#31867;.CarState.Car_Run, 0, 70)
    basic.pause(50)
    mbit_小车类.CarCtrl(mbit_&#23567;&#36710;&#31867;.CarState.Car_Stop)
})
makerbit.connectIrReceiver(DigitalPin.P8)
