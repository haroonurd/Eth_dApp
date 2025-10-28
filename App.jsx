import React, { useState } from 'react';
import { ethers } from 'ethers';

export default function App() {
  const [account, setAccount] = useState(null);

  async function connect() {
    if (!window.ethereum) {
      alert('Install MetaMask');
      return;
    }
    const [acct] = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(acct);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Ethereum DApp Template</h1>
      <p>Account: {account || 'Not connected'}</p>
      <button onClick={connect}>Connect MetaMask</button>
      <p>This frontend is a minimal starting point — expand with contract ABIs and UI components.</p>
    </div>
  );
}
