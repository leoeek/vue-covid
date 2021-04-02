export function currentDate (now = new Date()) {
  var date = now
  var day = date.getDate()
  var month = date.getMonth() + 1
  var year = date.getFullYear()

  var formatterDay
  if (day < 10) {
    formatterDay = `0${day}`
  } else {
    formatterDay = day
  }

  var formatterMonth
  if (month < 10) {
    formatterMonth = `0${month}`
  } else {
    formatterMonth = month
  }
  return `${year}-${formatterMonth}-${formatterDay}`
}

export function formatDate (dt) {
  console.log('dt', dt)
  const c = dt.split('-')

  return `${c[2]}/${c[1]}/${c[0]}`
}
