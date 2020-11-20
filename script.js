"use strict";
//option
let timeout = 10000;
let changeTime = 5000;

//
const imagesArr = [
  "https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=9060",
  "https://images.pexels.com/photos/1451074/pexels-photo-1451074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=560",
  "https://images.pexels.com/photos/1460880/pexels-photo-1460880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=200",
  "https://images.pexels.com/photos/1437629/pexels-photo-1437629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500",
  "https://images.pexels.com/photos/87284/ocean-seacoast-rocks-water-87284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=426&w=400",
  "https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=1260",
  "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];
let container = document.querySelector(".screensaver");

function showRandomPic() {
  let random = Math.floor(Math.random() * (imagesArr.length - 0 + 1)) + 0;
  return imagesArr[random];
}

let img = document.createElement("span");
// photo.classList.add("photo");

setInterval(() => {
  //img.style.left = Math.floor(Math.random() * (max - min + 1)) + min; // сделать нормально

  //window.innerWidth
  //window.innerHeight;
  img.innerHTML = `<img src=${showRandomPic()}>`;
  img.style.left =
    Math.floor(Math.random() * (window.innerWidth - 0 + 1)) + 0 + "px";
  img.style.top =
    Math.floor(Math.random() * (window.innerHeight - 0 + 1)) + 0 + "px";
}, changeTime);

// console.log(setInterval);
container.appendChild(img);
