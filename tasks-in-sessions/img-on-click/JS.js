var img =document.images[0]
console.log(document)
img.width="200";
img.height="300"

function toggleImg( ){
  if(img.src.includes("2-1"))
    img.src="img2-4.png"
  else 
    img.src="img2-1.png"
} 

