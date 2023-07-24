const fetchSuggestionFromChatGPT = () => 
    fetch('/api/suggestion' , {
        cache: 'no-store'
    }).then(response => response.json())
    
export default fetchSuggestionFromChatGPT