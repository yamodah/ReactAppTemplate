function Greeting({ language}) {
    switch (language) {
      case "es":
        return <h2>Hola!</h2>;
      case "fr":
        return  <h2>Bonjour!</h2>;
      case "en":
      default:
        return null;
    }
  }
  export default Greeting