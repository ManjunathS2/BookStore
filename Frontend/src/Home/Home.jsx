import React from 'react'
import Navbar from "../Components/Navbar";
import Freebook from '../Components/Freebook';
import Banner from '../Components/Banner';
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </div>
  );
}


export default Home