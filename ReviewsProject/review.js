const reviews = [
  {
    id: 1,
    name: "Tomasz Romasz",
    job: "Web Developer",
    img: "https://images.pexels.com/photos/5611966/pexels-photo-5611966.jpeg?auto=compress&cs=tinysrgb&w=400",
    text: "Light blue, sleek hair clumsily hangs over a bony, radiant face. Round amber eyes, set narrowly within their sockets, watch guardedly over the sea they've worshipped for so long",
  },
  {
    id: 2,
    name: "Miłosz Sidor",
    job: "Software Engineer",
    img: "https://cdn.pixabay.com/photo/2018/02/21/08/40/woman-3169726_1280.jpg",
    text: "Gray, short hair slightly reveals a thin, friendly face. Shining brown eyes, set handsomely within their sockets, watch watchfully over the town they've rarely felt at home at for so long.",
  },
  {
    id: 3,
    name: "Pietruszka Szpąciciel",
    job: "CS GO Case",
    img: "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_640.jpg",
    text: "Ginger, curly hair double braided to reveal a strong, lively face. Bright green eyes, set graciously within their sockets, watch yearningly over the country they've become enchancted by for so long.",
  },
  {
    id: 4,
    name: "Animaki Barte",
    job: "Artist",
    img: "https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682_1280.jpg",
    text: "Blonde, oily hair gently hangs over a craggy, gloomy face. Clear green eyes, set handsomely within their sockets, watch anxiously over the sea they've sworn to protect for so long.",
  },
  {
    id: 5,
    name: "Pieczar Bielsk",
    job: "Developer",
    img: "https://cdn.pixabay.com/photo/2017/04/01/21/06/portrait-2194457_640.jpg",
    text: "This is the face of Cale Faley, a true vindicator among vampires. He stands easily among others, despite his fragile frame.",
  },
  {
    id: 6,
    name: "Romek Borowka",
    job: "Artist",
    img: "https://cdn.pixabay.com/photo/2019/04/12/21/19/man-4123268_640.jpg",
    text: "Red, oily hair gently hangs over a thin, cheerful face. Lidded black eyes, set far within their sockets, watch rapidly over the rivers they've fought for for so long.",
  },
];

const image = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;
const min = 0;
const max = 5;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  image.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

function randomInRange(min, max) {
  currentItem = Math.random() * (min - max) + min;
}

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson(currentItem);
});
