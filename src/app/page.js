'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('Silverter Kristian M.');
  const [value, setValue] = useState('');

  const handlerPressEnter = (event) => {
    if (event.key === 'Enter') {
      handlerUpdateName();
    }
  };
  const handlerOnClick = () => handlerUpdateName();

  const handlerInputChange = (event) => setValue(event.target.value);
  const handlerUpdateName = () => setName(value);

  return (
    <main className="container">
      <div className="card">
        <div className="bio">
          <div className="img-container">
            <Image
              alt="Avatar"
              src="/assets/silver.svg"
              width={200}
              height={200}
              priority={true}
            />
          </div>
          <div className="bio-data">
            <h1>{name}</h1>
            <div style={{ marginTop: '0.5rem' }}>
              <p>D121211007</p>
              <p>Something missing...</p>
            </div>
          </div>
        </div>
        <div className="cta-container" style={{ margin: '1rem' }}>
          <input
            className="input-name"
            placeholder="Tuliskan namamu..."
            type="text"
            onKeyDown={handlerPressEnter}
            onChange={handlerInputChange}
          />
        </div>
        <div className="cta-container" style={{ margin: '1rem' }}>
          <button type="button" className="cta" onClick={handlerOnClick}>
            Simpan
          </button>
        </div>
      </div>
    </main>
  );
}
