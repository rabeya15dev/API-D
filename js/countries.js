const loadCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = counties => {
  // for (country of countries) {
  //   console.log(country);
  // }
  const countriesDiv = document.getElementById('countries');
  counties.forEach(country => {
    // console.log(country);
    const div = document.createElement('div');
    div.classList.add('country');
    div.innerHTML = `
    <h3>${country.name.common}</h3>
    <p>${country.capital}</p>

    <button onclick="loadCountryByName('${country.name.common}')">Details</button>
    `;


    // const h3 = document.createElement('h3');
    // h3.innerText = country.name.common;
    // div.appendChild(h3);
    // const p = document.createElement('p');
    // p.innerText = country.capital;
    // div.appendChild(p);

    countriesDiv.appendChild(div);

  });
}

const loadCountryByName = name => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]));

}

const displayCountryDetails = country => {
  console.log(country)
  const countryDiv = document.getElementById('country-detail');
  countryDiv.innerHTML = `
  <h5>${country.name.common}</h5>
  <p>:${country.population}</p>
  <img src="${country.flag.common}">

  `
}