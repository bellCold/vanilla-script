const imges = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImge = imges[Math.floor(Math.random() * imges.length)];

const bgimg = document.createElement("img");

bgimg.src = `../images/${chosenImge}`;

document.body.appendChild(bgimg);
