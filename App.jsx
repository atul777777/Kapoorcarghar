import React, { useEffect, useState } from 'react';
import Routers from './pages/Routers';
import './App.css';
import Axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await Axios.get('http://localhost:5000/getData');
      setData(response.data);
      console.log('Data received:', response.data);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        <Routers />
      )}
    </div>
  );
}

export default App;
