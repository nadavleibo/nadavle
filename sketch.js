const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};


function generateStarMap() {
  const dob = document.getElementById("dob").value;
  if (dob) {
    const imageContainer = document.getElementById("image-container");

    // Clear any existing content in the container
    imageContainer.innerHTML = "";

    
    const circleMask = document.createElement("div");
    circleMask.className = "circle-mask";

    const mapImg = document.createElement("img");
    const randomMapNumber = getRandomNumber(1, 6);
    mapImg.src = `starmap (${randomMapNumber}).png`;

    mapImg.alt = "Star Map Image";
    mapImg.id = "star-map";
    mapImg.style.display = "block"; // Show the image

    circleMask.appendChild(mapImg);
    imageContainer.appendChild(circleMask);
    



    magnify("star-map", 3);
  } else {
    alert("Please enter a valid date of birth.");
  }
}
