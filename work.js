// imageContainer
const imageContainer = document.querySelector('.image-container')
// prevBtn
const prevBtn = document.getElementById('prev')
// nextBtn
const nextBtn = document.getElementById('next')

console.log(imageContainer);
console.log(prevBtn);
console.log(nextBtn);

let x = 0;

prevBtn.addEventListener('click', () => {
  console.log(x)
  x = x + 36;
  console.log(x)
  rotate()
})

nextBtn.addEventListener('click', () => {
  console.log(x)
  x = x - 36;
  console.log(x)
  rotate()
})

const rotate = () => {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}