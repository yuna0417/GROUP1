
let bee = document.getElementById("bee")
let nowPosLeft 
let nowPosTop 
let speed = 10
let oriLeft
let oriTop

let clickSE = new Audio("https://dl.dropbox.com/s/wgpgfwbdieuh48q/click.mp3?dl=0")
let errorSE = new Audio("https://dl.dropbox.com/s/yhgz5u4dppb4i59/errorse.mp3?dl=0")
let rightSE = new Audio('https://dl.dropbox.com/s/lxdzdzjjwy4t7i6/rightse.mp3?dl=0')
let winSE = new Audio('https://dl.dropbox.com/s/89yx71o7smxefxb/winse.mp3?dl=0')

ok1.ok = 0
ok2.ok = 0

// all data loaded
window.onload = function () {
    nowPosLeft = bee.offsetLeft
    nowPosTop = bee.offsetTop
    console.log("nowPosLeft=" + nowPosLeft);
    console.log("nowPosLeft=" , nowPosLeft);
    oriLeft = bee.offsetLeft
    oriTop = bee.offsetTop
}


arrowUP.onclick = function () {
    if (nowPosTop - speed > 0) {
        bee.style.top = (nowPosTop - speed) + "px" 
        nowPosTop = nowPosTop - speed
        hitTest()
    }  
}
arrowDown.onclick = function () {
    if (nowPosTop + speed < 430) {
        bee.style.top = (nowPosTop + speed) + "px" 
        nowPosTop = nowPosTop + speed
        hitTest()
    }  
}

arrowLeft.onclick = function () {
     if (nowPosLeft - speed > 0) {
        bee.style.left = (nowPosLeft - speed) + "px" 
        nowPosLeft = nowPosLeft - speed
//         bee.style.transform = "scaleX(-1)"
         bee.src = "/res/4c993730-d103-498b-9b27-63b3e521e3a2/bee_2_1.png"
         hitTest()
    }  
}
arrowRight.onclick = function () {
     if (nowPosLeft + speed < 1000) {
        bee.style.left = (nowPosLeft + speed) + "px" 
        nowPosLeft = nowPosLeft + speed
//           bee.style.transform = "scaleX(1)"
          bee.src = "/res/4c993730-d103-498b-9b27-63b3e521e3a2/bee.png"
         hitTest()
    }  
}

function hitTest() {
    clickSE.play()
    console.log("hittest");
    let beeLeft = bee.offsetLeft
    let beeTop = bee.offsetTop
    //berry hit test
    let berryLeft = berry.offsetLeft
    let berryTop = berry.offsetTop
    let dx = beeLeft - berryLeft
    let dy = beeTop - berryTop
    dx = Math.abs(dx)
    dy = Math.abs(dy)
    if (dx <= 40 && dy <= 40) {
        console.log("hit berry");
        speed = 20
    }
    
    //scallion hit test
    let scallionLeft = scallion.offsetLeft
    let scallionTop = scallion.offsetTop
    let dx1 = beeLeft - scallionLeft
    let dy1 = beeTop - scallionTop
    dx1 = Math.abs(dx1)
    dy1 = Math.abs(dy1)
    if (dx1 <= 40 && dy1 <= 40) {
        console.log("hit scallion");
        speed = 5
    }
    
    //dragonfly hit test
    let dragonflyLeft = dragonfly.offsetLeft
    let dragonflyTop = dragonfly.offsetTop
    let dx2 = beeLeft - dragonflyLeft
    let dy2 = beeTop - dragonflyTop
    dx2 = Math.abs(dx2)
    dy2 = Math.abs(dy2)
    if (dx2 <= 40 && dy2 <= 40) {
        console.log("hit dragonfly");
        bee.style.left = oriLeft + "px"
        bee.style.top = oriTop + "px"
        nowPosLeft = oriLeft
        nowPosTop = oriTop
        errorSE.play()
    }
    
     // flower1 hit test
    let flower1Left = flower1.offsetLeft
    let flower1Top = flower1.offsetTop
    let dx3 = beeLeft - flower1Left
    let dy3 = beeTop - flower1Top
    dx3 = Math.abs(dx3)
    dy3 = Math.abs(dy3)
    if (dx3 <= 40 && dy3 <= 40) {
        console.log("hit flower1");
        ok1.style.visibility = "visible"
        rightSE.play()
        ok1.ok = 1
       if (ok1.ok == 1 && ok2.ok ==1) {
       winSE.play()
       } 
        
       
    }
     // flower2 hit test
    let flower2Left = flower2.offsetLeft
    let flower2Top = flower2.offsetTop
    let dx4 = beeLeft - flower2Left
    let dy4 = beeTop - flower2Top
    dx4 = Math.abs(dx4)
    dy4 = Math.abs(dy4)
    if (dx4 <= 40 && dy4 <= 40) {
        console.log("hit flower2");
        ok2.style.visibility = "visible"
        rightSE.play()
        ok2.ok = 1
         if (ok1.ok == 1 && ok2.ok ==1) {
       winSE.play()
       } 
    }
    
    
    
}