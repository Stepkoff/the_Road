const container = document.querySelector(".container");

document.querySelector(".navbar__open-icon").addEventListener("click", () => {
  container.classList.add("active");
  document.body.style.overflow = 'hidden'
});

document.querySelector(".navbar__close-icon").addEventListener("click", () => {
  container.classList.remove("active");
  document.body.style.overflow = ''
});

const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".navbar__link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

const runPopularTours = () => {
  const navigationButtons = [...document.querySelectorAll('.popular__card-btn')]
  navigationButtons.forEach(el => {
    el.addEventListener('click', () => {
      el.parentElement.parentElement.classList.toggle('popular__card--changed')
    })
  })
}
runPopularTours()