//Fetch API

const apiKey = 'YktJ5t1SbBaQViikIxzZ1MRcQs3WMWGt';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then(response => response.json())
.then( ({data}) => {
    const {url} = data.images.original
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
    
})
.catch(console.warn);

