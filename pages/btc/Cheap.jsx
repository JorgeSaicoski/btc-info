import React from 'react'

function Cheap() {
  return (
    <div className="bg-extraColor p-11 rounded-3xl flex flex-col justify-between min-h-screen">
      <p>May you must to have 2 brokers for this option.</p>
      <p>A broke that accept your FIAT currency and a broke that accept you choice the transfer fee.</p>
      <p>Why? If you send your BTC directly to your security wallet your broke will use the most expensive fee and most fast too.</p>
      <p>It will cost to about 0.0004BTC</p>
      <p>So you should to buy another crypto in your original broker. My advice is to use LTC, it is a cheap and fast coin.</p>
      <p>Now you have LTC and want BTC, what can You do?</p>
      <p>Find a flexible broker that accept low fee tax for BTC. My advice is to use NiceHash.</p>
      <p>You have a lot of another options, but you must to check the fee for do a swap coins.</p>
      <p>Now you will send your LTC from your original broker to you flexible broker.</p>
      <p>And then you will swap your LTC to BTC so you can send to your security wallet.</p>
      <p>This operation can be very slowly. Maybe you will be waiting for 24h to receive your BTC in your wallet.</p>
      <p>But, it will cost about to 0,0010 LTC (send your LTC to another wallet) + broker fee + BTC tax (this 2 will be about 0.000005 BTC).</p>
      <div className="mt-10 flex flex-col items-center">
        <p className='mb-1.5'>Here is a step for step:</p>
        <ul className="list-decimal">
          <li>Buy LTC with your FIAT Currency in a broker in your country</li>
          <li>Send your LTC to a baltic country (besties laws for this operation) broker (NiceHash). <p className="text-atentionColor">0.0010 LTC</p></li>
          <li>Swap your LTC to BTC. <p className="text-atentionColor">Broker Fee</p></li>
          <li>Send your BTC to your security wallet (Electrum) <p className="text-atentionColor">0.000005 BTC + 24h</p></li>
        </ul>
      </div>
    </div>
  )
}

export default Cheap
