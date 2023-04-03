// import App from './App'
// import React, { useState, useEffect} from "react";

// function Search() {

//     const [search, setSearch] = useState[""]

//       const baseUrl = 'https://developer.nps.gov/api/v1';
//       const endpoint = '/campgrounds';
//       const apiKey = 'LeuX8rC4mDQKAOhb44i1FGFaZkqN2CbhqiKTix4O';
//       const url = `${baseUrl}${endpoint}?api_key=${apiKey}`;

//     const apiData = document.querySelector('#api-data');

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     apiData.innerHTML = JSON.stringify(data);
//     console.log(data)
//   })
//   .catch(error => {
//     console.error(error);
//     apiData.innerHTML = 'Error retrieving data from API';
//   });



//   return (
//     <div className="searchbar">
//       <label htmlFor="search">Search Parks:</label>
//       <input
//         type="text"
//         id="search"
//         placeholder="Type a name to search..."
//         onChange={(e) => console.log("Searching...")}
//       />
//     </div>
//   );
// }

// export default Search;