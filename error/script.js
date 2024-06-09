const button = document.querySelector('button');
const fileInput = document.querySelector("input[type=file]");

button.addEventListener('click',()=>{

    const imagecontainer = document.querySelector('.imagecontainer');
    const image = document.createElement('img');

    var fReader = new FileReader();
    fReader.readAsDataURL(fileInput.files[0]);

    fReader.onloadend = function(event){
        
        image.src = event.target.result;
        image.classList.add('profile-image');
         }
    

    

   

    imagecontainer.appendChild(image);
    console.log(imagecontainer);
   
});