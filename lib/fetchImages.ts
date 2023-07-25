const fetchImages = () => 
    fetch('/api/getImages' , {
        cache: 'no-store'
    }).then(response => response.json())

export default fetchImages