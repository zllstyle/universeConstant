//Practice rules
class Practice {
  constructor() {}
  //Ordinary cultivation, passing in objects, talents and cultivation time
  practice_law(object, talent, time) {
    switch (talent) {
      case 0:
        //console.log('No talent. Just plow the land')
        return 0
      case 1:
        if ((time = 1)) {
          //Returns the quantized strength value
          return 1
        }
        break
      case 2:
        if ((time = 1)) {
          return 2
        }
        break
      case 3:
        if ((time = 1)) {
          return 3
        }
        break
      case 4:
        if ((time = 1)) {
          return 4
        }
        break
      case 5:
        if ((time = 1)) {
          return 5
        }
        break
    }
  }
}
