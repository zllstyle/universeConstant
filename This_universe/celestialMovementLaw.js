//Celestial body movement law class
class Clestial_law {
  constructor() {}
  //Law of planetary orbit
  surround(starSize1, starSize2) {
    if (starSize1 > starSize2) {
      console.log(starSize2 + 'revolve around' + starSize1)
    } else if (starSize1 < starSize2) {
      console.log(starSize1 + 'revolve around' + starSize2)
    }
    console.log('They collided')
  }
}
