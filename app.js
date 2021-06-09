//grab everything we need
//Define out functions
//add eventlisteners


//GRABBING
const arrows = document.querySelectorAll('.arrow');
const movieList = document.querySelectorAll('.movie-list');


//EVENT LISTENERS AND FUNCTIONS
arrows.forEach((arrow, i) => {

  const itemNum = movieList[i].querySelectorAll("img").length;

  let clickCounter = 0;
  arrow.addEventListener('click', () => {
    const ratio =  Math.floor(window.innerWidth/270)
    clickCounter++;

    if(itemNum - (4+clickCounter) + (4 - ratio) >= 0) {
    movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get('transform')[0].x.value - 300}px)`;
     } else {
      movieList[i].style.transform = 'translateX(0)';
      clickCounter = 0;
     }
  })
  console.log(Math.floor(window.innerWidth/270));
});


const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll('.container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle');


ball.addEventListener('click', ()=> {
  items.forEach(item => {
    item.classList.toggle('active')
  })
  ball.classList.toggle('active')
})