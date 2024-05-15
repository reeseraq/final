

let s = 0

let counter = document.querySelector('#counter')

counter.textContent = 'let the time begin...'

function count() {
  s = s + 1
  counter.textContent = s
}

setInterval(count, 500)
