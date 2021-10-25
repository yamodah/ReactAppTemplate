
function AskWhereSearch ({name}){
    const googSearch = "https://www.google.com/"
    const bingSearch = "https://wwww.bing.com"
    const element = (<p>{name}, would you like to search with <a href={googSearch}><button>Google</button></a> or <a href={bingSearch}><button>Bing</button></a></p>)
    return element;
}

export default AskWhereSearch