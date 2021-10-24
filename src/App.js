import "./App.css";

function App() {
  const googSearch = "https://www.google.com/"
  const bingSearch = "https://wwww.bing.com"
  const element = (<p>Hello, would you like to search with<br /><a href={googSearch}>Google</a><br/> or<br /><a href={bingSearch}>Bing</a></p>)
  return element;
}

export default App;