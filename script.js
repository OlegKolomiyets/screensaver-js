"use strict";
//option
let timeout = 0;
let changeTime = 5000;

//
function showRandomPic() {
  let random = Math.floor(Math.random() * imagesArr.length);
  console.log(random);
  return imagesArr[random];
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
const imagesArr = [
  "https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=9060",
  "https://images.pexels.com/photos/1451074/pexels-photo-1451074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=560",
  "https://images.pexels.com/photos/1460880/pexels-photo-1460880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=200",
  "https://images.pexels.com/photos/1437629/pexels-photo-1437629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500",
  "https://images.pexels.com/photos/87284/ocean-seacoast-rocks-water-87284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=426&w=400",
  "https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=1260",
  "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];
let container = document.querySelector("#screensaver");
let img = document.createElement("span");

setInterval(() => {
  let randomPics = showRandomPic();

  let height = randomPics.match(/\&h=([\d]+)/);
  let width = randomPics.match(/\&w=([\d]+)/);
  img.classList.toggle("fadeMe");
  img.innerHTML = `<img src=${randomPics} width="${width[1]}" height="${height[1]}">`;
  img.style.left = `${random(0, window.innerWidth - width[1])}px`;
  img.style.top = `${random(0, window.innerHeight - height[1])}px`;
}, changeTime);

container.appendChild(img);
