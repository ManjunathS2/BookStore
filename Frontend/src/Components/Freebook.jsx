import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import axios from "axios";

function Freebook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        
        const data = res.data.filter((book) => book.category === "Free");
        console.log(data);
        setBooks(data); 
      } catch (error) {
        console.log("Error fetching books:", error);
      }
    };
    getBooks();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mb-10">
          <h1 className="font-bold text-xl pb-2">Free offered books</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            quod molestias recusandae exercitationem corporis nulla voluptatum
            eveniet laborum deserunt error, ab, cumque voluptates neque nisi
            voluptate quasi suscipit quas odio!
          </p>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {books.map((items) => (
              <Card items={items} key={items.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;