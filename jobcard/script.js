const button = document.querySelector('button')






button.addEventListener('click',()=>{
    
    const outercard = document.createElement('div')
    outercard.classList.add('outercard')
    outercard.setAttribute('id','printdoc')

//logic for the input classes, this is the trickiest part of my experiment
const cardname = document.getElementById('name')
const myname = cardname.value
cardname.value = ''

const cardId = document.getElementById('id')

const myId = cardId.value
cardId.value = ''

const cardbirth = document.getElementById('birth')
const myBirth = cardbirth.value
cardbirth.value = ''

const cardBranch = document.getElementById('branch')
const myBranch = cardBranch.value
cardBranch.value = ''

////////////////////////////////////////////////////////////////////////////////////
///everything below this is code that should insert the image to our code, hopefully it works
const fileInput = document.querySelector("input[type=file]");

var fReader = new FileReader();
fReader.readAsDataURL(fileInput.files[0]);

fReader.onloadend = function(event){
    
    image.src = event.target.result;
    
    image.classList.add('profile-image');
     }
 ///need to solidify more knowledge in this, test its capabilities    
////////////////////////////////////////////////////////////////////////////////////////     

const cardIssue = document.getElementById('issue')
const myIssue = cardIssue.value
cardIssue.value = ''












////////////////////////////////////////end of input logic


///here we have created our photo placeholder
const image = document.createElement('img')
image.src = './img/pp.jpg'
image.classList.add('profile-image')
///////let me change some few lines and add a new function and let us see if it works

// const image = document.createElement('img')
// image.src = myImg
// image.classList.add('profile-image')




const addnew = document.getElementById('card')

const delbutton = document.createElement('button')
delbutton.classList.add('delbutton')
delbutton.innerText = 'delete'

const printbutton = document.createElement('button')
printbutton.classList.add('delbutton')
printbutton.innerText = 'Print'

addnew.appendChild(delbutton)
addnew.appendChild(printbutton)

addnew.appendChild(outercard)

///this is the container that will contaij the photo
const photocontainer = document.createElement('div')
photocontainer.classList.add('photocontainer')

///let us append the image container
photocontainer.appendChild(image)


const detailscontainer = document.createElement('div')
detailscontainer.classList.add('detailscontainer')

//////////////////////////////////////////////////////our card details will reside here
const cardone = document.createElement('p')
cardone.textContent = myname
  
const cardtwo = document.createElement('p')
cardtwo.textContent = myId

const cardthree = document.createElement('p')
cardthree.textContent = myBirth

const cardfour = document.createElement('p')
cardfour.textContent = myBranch

const cardfive = document.createElement('p')
cardfive.textContent = myIssue

////////////////////////////////////////////////////////////////////////////////end of card details
///////////////////////////////////////insert information to the card details
detailscontainer.appendChild(cardone)
detailscontainer.appendChild(cardtwo)
detailscontainer.appendChild(cardthree)
detailscontainer.appendChild(cardfour)
detailscontainer.appendChild(cardfive)


outercard.appendChild(photocontainer)
outercard.appendChild(detailscontainer)


delbutton.addEventListener('click',()=>{
    outercard.remove()
    delbutton.remove()
    printbutton.remove()
})
printbutton.addEventListener('click',()=>{
    
    let prtContent = document.getElementById('printdoc')



html2canvas(prtContent).then(canvas => {
   let WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
   WinPrint.document.body.appendChild(canvas);
   
   WinPrint.document.close();
   WinPrint.focus();
   WinPrint.print();
   WinPrint.close();
});

})




// input.focus()

})






