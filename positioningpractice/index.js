// const container = document.getElementById('container')
// const delbutton = document.getElementById('del')

// delbutton.addEventListener('click',()=>{
//     container.remove()
// })

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://andruxnet-random-famous-quotes.p.rapidapi.com/',
  params: {
    cat: 'famous',
    count: '10'
  },
  headers: {
    'X-RapidAPI-Key': 'fb50418fbfmsh1c9d9bea01e2963p18e0e8jsnee6b9ec968ee',
    'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}