let rectangles =[]
let grid = [3,3]
class Rectangle{
  constructor(_O,_H,_W,_X,_Y,_R,_G,_B) {
    this.o = _O
    this.height = _H
    this.width = _W
    this.x = _X
    this.y = _Y

    this.r = _R
    this.g = _G
    this.b = _B
  }
}

function setup() {
  createCanvas(600, 600);
  background(200)
  let _O = 'v'
  let _H = 0
  let _W = 0
  let _X = 0
  let _Y = 0
  let _R = 0
  let _G = 0
  let _B = 0
  for (i=0; i<5; i++) {
    //i++ = num of loops
    if ((i++)%2 == 0) { //swap orientation from horizontal to vertical
      if (_O = 'v') {
        _O = 'h'
      }

      if (_O = 'h') {
        _O = 'v'
      }
    }
    if (_O == 'v'){
      _H = 150
      _W = 50
    }

    else if (_O == 'h'){
      _H = 50
      _W = 150
    }
    rectangles[i] = new Rectangle(_O,_H,_W,_X,_Y,_R,_G,_B);
  }
  console.log(rectangles)
}

function draw() {

}
