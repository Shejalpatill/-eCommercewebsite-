import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/Home/Index';
import Header from './Components/Header/Header';
import DestinationPage from './Pages/Destination'; 
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import BookingForm from './Components/BookingForm';

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      console.log(response.data.data);
      setCountryList(response.data.data); // Update state with fetched data
    } catch (error) {
      console.error('Error fetching data:', error); 
    }
  };

  const values = {
    countryList
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/:id" element={<DestinationPage />} />
          <Route path="/booking" element={<BookingForm />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
