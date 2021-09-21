import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import EntryList from './components/entryList';

function App() {
  const dummyData = ['earth', 'mars', 'venus', 'pluto'];

  return (
    <div className="App">
      <Layout>
        <section>
          <EntryList data={dummyData} />
        </section>
      </Layout>
    </div>
  );
}

export default App;
