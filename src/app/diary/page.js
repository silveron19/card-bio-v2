'use client';
import { useEffect, useState } from 'react';
import '@styles/diary.css';

function Diary() {
  const endpoint = 'https://6555c36d84b36e3a431e44ff.mockapi.io/api/v1/diary';

  const [diaries, setDiaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getDiary() {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      const diary = await response.json();
      setDiaries(diary);
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDiary();
  }, []);

  let content;

  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>Something went wrong!</p>;
  } else {
    content = (
      <ul>
        {diaries.map((diary) => (
          <li key={diary.id}>
            <div className="diary-container">
              <h1>{diary.judul}</h1>
              <p>{diary.isi_diary}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return <section className="diary">{content}</section>;
}

export default Diary;
