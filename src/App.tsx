import { useEffect, useState } from "react";
import getPrice from "./services/getPriceList";
import { PriceCard } from "./component/PriceCard";
import { Table } from "react-bootstrap";
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [prices, setPrices] = useState<any[]>([])
  useEffect(() => {
    async function fetchPrices() {
      const result = await getPrice();
        setPrices(result);
        
      }
    fetchPrices();
    const intervalId = setInterval(fetchPrices, 10000); 
    return () => clearInterval(intervalId);
  }, 
  []);

  return (
    <div>
    <Analytics />
    
      <h1 className="d-flex justify-content-center">Coin Prices App</h1>
      <ul>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>1h%</th>
              <th>24h%</th>
              <th>7d%</th>
              <th>Market Cap</th>
              <th>Volume</th>
              <th>Total Supply</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item, index) => (
              <PriceCard key={index} name={item.name} price={item.price} icon={item.icon} symbol={item.symbol}
              priceChange1h={item.priceChange1h} priceChange1w={item.priceChange1w} priceChange1d={item.priceChange1d} totalSupply={item.totalSupply} marketCap={item.marketCap} volume={item.volume} index={index}         />
            ))}
          </tbody>
        </Table>
      </ul>
    </div>
  );
}

export default App;
