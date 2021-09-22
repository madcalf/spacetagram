import { useEffect, useState } from 'react';
import './App.css';
import Layout from './components/layout';
import EntryList from './components/entryList';
import axios from 'axios';

function App() {
  const apiKey = '9ueCLo2R7DzlPhmtfxpbLc3oZKglHmIRDSBBhA6U';
  const [data, setData] = useState();
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2021-09-01`;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(url);
      console.log(data);
      setData(data);
    };

    fetchData();
  }, [url]);

  return (
    <div className="App">
      <Layout>
        <EntryList data={data} />
      </Layout>
    </div>
  );
}

export default App;
