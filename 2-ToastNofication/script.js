const btn = document.getElementById('btn')
const container = document.getElementById('container')

btn.addEventListener('click', () => {
  createNotification()
})
function createNotification() {
  const nofi = document.createElement('div')
  nofi.classList.add('toast')
}
