'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [index, setIndex] = useState(0);
  const [quote, setQuote] = useState('Something missing...');
  const [name, setName] = useState('Silverter Kristian M.');

  function handlerUpdateQuote() {
    if (quote === 'Something missing...') {
      setQuote("It's you >///<");
    } else if (quote === "It's you >///<") {
      setQuote(`Love you ${index}`);
    } else {
      setQuote(`Love you ${index + 1}`);
      setIndex(index + 1);
    }
  }

  const handlerPressEnter = (event) => {
    if (event.key === 'Enter') {
      handlerUpdateName(event);
    }
  };

  const handlerUpdateName = (event) => setName(event.target.value);

  return (
    <main className="container">
      <div className="card">
        <div className="bio">
          <div className="img-container">
            <Image
              alt=""
              src={'/assets/silver.svg'}
              width={200}
              height={200}
              priority={true}
            />
          </div>
          <div className="bio-data">
            <h1>{name}</h1>
            <div style={{ marginTop: '0.5rem' }}>
              <p>D121211007</p>
              <p>{quote}</p>
            </div>
          </div>
        </div>
        <div className="cta-container" style={{ margin: '1rem' }}>
          <input
            className="input-name"
            placeholder="Tuliskan namamu..."
            onKeyDown={handlerPressEnter}
            type="text"
          />
        </div>
        <div
          className="cta-container"
          style={{ margin: '1rem' }}
          onClick={handlerUpdateQuote}>
          <button type="button" className="cta">
            Halo!
          </button>
        </div>
      </div>
    </main>
  );
}
