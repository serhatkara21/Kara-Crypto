
import React, { useEffect, useState } from 'react';

const COINS = [
  'bitcoin', 'ethereum', 'tether', 'binancecoin', 'usd-coin',
  'ripple', 'cardano', 'dogecoin', 'solana', 'tron',
  'polkadot', 'polygon', 'litecoin', 'shiba-inu', 'avalanche',
  'uniswap', 'chainlink', 'stellar', 'monero', 'cosmos',
  'ethereum-classic', 'bitcoin-cash', 'filecoin', 'aptos', 'vechain',
  'internet-computer', 'quant', 'hbar', 'arbitrum', 'near',
  'lido-dao', 'cronos', 'algo', 'flow', 'sui',
  'decentraland', 'sandbox', 'frax', 'gmx', 'rocket-pool',
  'axie-infinity', 'aave', 'chiliz', 'immutablex', 'iota',
  'mina', 'pancakeswap', 'dash', 'synthetix', 'zkSync',
  'curve-dao-token', 'theta', 'maker', 'gala', 'convex-finance',
  'stepn', '1inch', 'enj', 'mask', 'kava',
  'zilliqa', 'helium', 'basic-attention-token', 'oasis-network', 'harmony',
  'arweave', 'woo-network', 'loopring', 'wax', 'waves',
  'nexo', 'balancer', 'celo', 'sushi', 'yearn-finance',
  'compound', 'fantom', 'serum', 'ankr', 'render-token',
  'fetch-ai', 'stacks', 'iotex', 'bittorrent', 'hive',
  'theta-fuel', 'ontology', 'reserve-rights', 'status', 'energy-web-token',
  'ocean-protocol', 'kadena', 'secret', 'reef', 'celer-network',
  'ergo', 'dydx', 'nervos-network', 'vulcan-forged', 'uma'
];

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${COINS.join(',')}`
        );
        const data = await res.json();
        setCoins(data);
      } catch (error) {
        console.error('Error fetching coins:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, []);

  if (loading) return <p style={{ color: '#fff', textAlign: 'center' }}>Loading...</p>;

  return (
    <div style={{ backgroundColor: '#121212', color: '#fff', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img src="/coingecko-logo.png" alt="CoinGecko" style={{ height: '40px', marginRight: '10px' }} />
        <h1>Crypto Market</h1>
      </header>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #444' }}>
            <th style={{ textAlign: 'left', padding: '10px' }}>#</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Coin</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Price</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={coin.id} style={{ borderBottom: '1px solid #444' }}>
              <td style={{ padding: '10px' }}>{index + 1}</td>
              <td style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                <img src={coin.image} alt={coin.name} style={{ height: '20px', marginRight: '10px' }} />
                {coin.name}
              </td>
              <td style={{ padding: '10px' }}>${coin.current_price.toLocaleString()}</td>
              <td style={{ padding: '10px' }}>${coin.market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
