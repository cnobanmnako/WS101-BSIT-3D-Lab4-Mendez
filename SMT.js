let stocks = [
  { symbol: "AAPL", price: 150, volume: 10000, sector: "Tech" },
  { symbol: "MSFT", price: 280, volume: 12000, sector: "Tech" },
  { symbol: "JPM", price: 140, volume: 8000, sector: "Finance" },
  { symbol: "XOM", price: 100, volume: 15000, sector: "Energy" }
];

function displayStocks(data) {
  let tbody = document.querySelector("#stockTable tbody");
  tbody.innerHTML = "";
  data.forEach(stock => {
    let row = `<tr>
      <td>${stock.symbol}</td>
      <td>${stock.price}</td>
      <td>${stock.volume}</td>
      <td>${stock.sector}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

function calculateAverage() {
  let total = 0;
  stocks.forEach(s => total += s.price);
  let avg = total / stocks.length;
  document.getElementById("average").innerText = "Average Price: $" + avg.toFixed(2);
}

function filterBySector() {
  let sector = document.getElementById("sectorFilter").value;
  if (sector === "all") {
    displayStocks(stocks);
  } else {
    let filtered = stocks.filter(s => s.sector === sector);
    displayStocks(filtered);
  }
}

function findHighestVolume() {
  let highest = stocks[0];
  stocks.forEach(s => {
    if (s.volume > highest.volume) {
      highest = s;
    }
  });
  document.getElementById("highestVolume").innerText =
    "Highest Volume: " + highest.symbol + " (" + highest.volume + ")";
}

function groupByPrice() {
  let low = stocks.filter(s => s.price < 120);
  let medium = stocks.filter(s => s.price >= 120 && s.price <= 200);
  let high = stocks.filter(s => s.price > 200);

  document.getElementById("grouped").innerText =
    "Low (<120): " + low.map(s => s.symbol).join(", ") +
    " | Medium (120-200): " + medium.map(s => s.symbol).join(", ") +
    " | High (>200): " + high.map(s => s.symbol).join(", ");
}

async function fetchNewData() {
  document.getElementById("fetchResult").innerText = "Fetching new data...";
  await new Promise(resolve => setTimeout(resolve, 2000)); // simulate delay

  let newStock = { symbol: "TSLA", price: 300, volume: 20000, sector: "Tech" };
  stocks.push(newStock);

  displayStocks(stocks);
  document.getElementById("fetchResult").innerText = "New stock data added: " + newStock.symbol;
}

// Show the initial data
displayStocks(stocks);
