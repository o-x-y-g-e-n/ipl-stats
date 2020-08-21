const _getColor = () => {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

/**
 * Gets the array of different colors
 * @param {*} count
 */
export function getRandomColor(count) {
  let arr = []
  for (let i = 0; i < count; i++) {
    arr.push(_getColor())
  }
  return arr
}

export function getUnqiuePlayersOfMatch(data) {
  let color = []
  let myObject = {}
  data.forEach((row) => {
    if (myObject.hasOwnProperty(row.player_of_match)) {
      myObject[row.player_of_match] =
        parseInt(myObject[row.player_of_match]) + 1
    } else {
      myObject[row.player_of_match] = 1
    }
    color.push(_getColor())
  })
  return { playersOfMatch: myObject, playersOfMatchColor: color }
}

/**
 * A storngly coupled function to convert array's into objects with two keys fieldValue and totalCount
 * @param {*} data
 */
export function arrayToObject(data) {
  let myObject = {}
  data.forEach((row) => {
    myObject[row.fieldValue] = row.totalCount
  })
  return myObject
}
