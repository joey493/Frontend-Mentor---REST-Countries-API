import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getAll } from './countriesApi'
import ClipLoader from "react-spinners/ClipLoader";
import Home from "./pages/Home";
import Country from "./pages/Country";


function App() {
  const [data, setData] = useState([])

  const override = `
  display: block;
  margin: 10rem auto;
`;

  const getCountries = async () => {
    try {
      await getAll()
        .then(res => setData([...res]))
    } catch (err) {
      console.error('error found on getAll: ', err)
    }
  }

  useEffect(() => {
    getCountries()
  }, [])

  return (
    <div className="App">
      <header className="main-header bg-dark-blue txt-white">
        <div className="container">
          <h1 className="fw-semi-bold fs-600 bg-transparent">Where in the world?</h1>
        </div>
      </header>
      <Routes>
        <Route path='/' element={
          data.length === 0
            ? <ClipLoader color='#86E6D3' css={override} size={150} />
            : <Home countries={data} />
        } />
        <Route path='/:id' element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
