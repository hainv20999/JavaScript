function creatHeart() {
  // Create heart
  const heart = document.createElement('div')
  heart.classList.add('heart')
  heart.innerText = '💝'
  document.body.appendChild(heart)

  // set heart trên trục y ,
  heart.style.left = Math.random() * 100 + 'vw'

  //tạo hiệu ứng chuyển động bằng animation
  heart.style.animationDuration = Math.random() * 2 + 3 + 's'
  setTimeout(() => {
    heart.remove()
  }, 5000)
}
setInterval(creatHeart, 500)
