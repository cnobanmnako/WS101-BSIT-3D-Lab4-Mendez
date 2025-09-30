let stocks = [
<<<<<<< HEAD
  { symbol: "AAPL", price: 253.43, volume: 12_300_000, sector: "Tech" },
  { symbol: "MSFT", price: 514.60, volume: 17_430_000, sector: "Tech" },
  { symbol: "JPM", price: 315.69, volume: 1_592_345, sector: "Finance" },
  { symbol: "XOM", price: 114.22, volume: 19_188_195, sector: "Energy" }
=======
  { symbol: "AAPL", price: 150, volume: 10000, sector: "Tech" },
  { symbol: "MSFT", price: 280, volume: 12000, sector: "Tech" },
  { symbol: "JPM", price: 140, volume: 8000, sector: "Finance" },
  { symbol: "XOM", price: 100, volume: 15000, sector: "Energy" }
>>>>>>> f9f90669b07faa30981d998354a68436dd6e5fb3
];

function displayStocks(data) {
  let tbody = document.querySelector("#stockTable tbody");
  tbody.innerHTML = "";
  data.forEach(stock => {
    let row = `<tr>
      <td>${stock.symbol}</td>
<<<<<<< HEAD
      <td>${stock.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</td>
      <td>${stock.volume.toLocaleString()}</td>
=======
      <td>${stock.price}</td>
      <td>${stock.volume}</td>
>>>>>>> f9f90669b07faa30981d998354a68436dd6e5fb3
      <td>${stock.sector}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

function calculateAverage() {
  let total = 0;
  stocks.forEach(s => total += s.price);
  let avg = total / stocks.length;
<<<<<<< HEAD
  document.getElementById("average").innerText =
    "Average Price: " + avg.toLocaleString("en-US", { style: "currency", currency: "USD" });
=======
  document.getElementById("average").innerText = "Average Price: $" + avg.toFixed(2);
>>>>>>> f9f90669b07faa30981d998354a68436dd6e5fb3
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
<<<<<<< HEAD
    "Highest Volume: " + highest.symbol + " (" + highest.volume.toLocaleString() + ")";
=======
    "Highest Volume: " + highest.symbol + " (" + highest.volume + ")";
>>>>>>> f9f90669b07faa30981d998354a68436dd6e5fb3
}

function groupByPrice() {
  let low = stocks.filter(s => s.price < 120);
  let medium = stocks.filter(s => s.price >= 120 && s.price <= 200);
  let high = stocks.filter(s => s.price > 200);

  document.getElementById("grouped").innerText =
<<<<<<< HEAD
    "Low (<120): " + low.map(s => `${s.symbol} (${s.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}, Vol: ${s.volume.toLocaleString()})`).join(", ") +
    " | Medium (120-200): " + medium.map(s => `${s.symbol} (${s.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}, Vol: ${s.volume.toLocaleString()})`).join(", ") +
    " | High (>200): " + high.map(s => `${s.symbol} (${s.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}, Vol: ${s.volume.toLocaleString()})`).join(", ");
=======
    "Low (<120): " + low.map(s => s.symbol).join(", ") +
    " | Medium (120-200): " + medium.map(s => s.symbol).join(", ") +
    " | High (>200): " + high.map(s => s.symbol).join(", ");
>>>>>>> f9f90669b07faa30981d998354a68436dd6e5fb3
}

async function fetchNewData() {
  document.getElementById("fetchResult").innerText = "Fetching new data...";
<<<<<<< HEAD
  await new Promise(resolve => setTimeout(resolve, 2000));

  let newStock = { symbol: "TSLA", price: 442.16, volume: 79_920_000, sector: "Tech" };
  stocks.push(newStock);

  displayStocks(stocks);
  document.getElementById("fetchResult").innerText =
    "New stock data added: " + newStock.symbol +
    " (" + newStock.price.toLocaleString("en-US", { style: "currency", currency: "USD" }) +
    ", Vol: " + newStock.volume.toLocaleString() + ")";
=======
  await new Promise(resolve => setTimeout(resolve, 2000)); // simulate delay

  let newStock = { symbol: "TSLA", price: 300, volume: 20000, sector: "Tech" };
  stocks.push(newStock);

  displayStocks(stocks);
  document.getElementById("fetchResult").innerText = "New stock data added: " + newStock.symbol;
>>>>>>> f9f90669b07faa30981d998354a68436dd6e5fb3
}

// Show the initial data
displayStocks(stocks);
