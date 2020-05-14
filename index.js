/* eslint-env browser */

// the amount of milliseconds in a day
const oneDay = 1000 * 60 * 60 * 24


/** @type HTMLProgressElement */
const bar = document.createElement('progress')
bar.max = 100
;(function interval () {
  const now = new Date()
  const year = now.getFullYear()
  // Calc current day
  const days = (year % 100 === 0
    ? year % 400 === 0
    : year % 4 === 0)
    ? 366 // If it's a leap year
    : 365 // If it isn't
  // Gets the year, using local time
  const start = new Date(year, 0, 0)
  const diff = now - start
  const currentDay = Math.floor(diff / oneDay)
  const percent = currentDay / days * 100

  bar.value = percent
  bar.title = `(${percent.toPrecision(4)}%)`
  setTimeout(interval, 1000)
})()

document.currentScript.replaceWith(bar)
