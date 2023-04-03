// import logo from './logo.svg';
// import './App.css';
import Search from './Search';

function App() {

  const baseUrl = 'https://developer.nps.gov/api/v1';
  const endpoint = '/parks?start=51';
  const apiKey = 'LeuX8rC4mDQKAOhb44i1FGFaZkqN2CbhqiKTix4O';
  const url = `${baseUrl}${endpoint}?api_key=${apiKey}`;

  // const apiData = document.querySelector('#api-data');

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(error => console.error(error));

  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;





// originally located under Search
/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          National Park App homepage
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
