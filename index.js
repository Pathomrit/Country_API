const container = document.getElementById("container");
const getCountries = async () => {
  const url = "https://restcountries.com/v3.1/all";
  const res = await fetch(url);
  const items = await res.json();
  items.forEach((elememt) => {
    // console.log(elememt.flags.png);
    // console.log("ชื่อประเทศ ", elememt.name.common," เมืองหลวง ", elememt.capital);
    createCard(elememt);
  });
};
const createCard = (data) => {
  const cardEl = document.createElement("div");
  cardEl.classList.add("countries");
  const contentEl = `
    <div class="img-container">
    <img src="${data.flags.png}"/>
    </div>
    <div class="info">
        <h2 class="name">${data.name.common}</h2>
        <p>เมืองหลวง : <span>${data.capital}</span></p>
    </div>
    `;
  cardEl.innerHTML = contentEl;
  container.appendChild(cardEl);
};
getCountries();
