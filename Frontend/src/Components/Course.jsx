import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";

function Course() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBooks(res.data);
      } catch (error) {
        console.log("Error fetching books:", error);
      }
    };
    getBooks();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-10 px-4">
       
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-semibold">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12 text-sm md:text-base">
            Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            quasi exercitationem similique repellendus, deserunt itaque
            pariatur. Placeat eveniet omnis, ipsa nihil possimus consequuntur
            odio reiciendis saepe esse eligendi, expedita quae. ipsum dolor sit
            amet consectetur adipisicing elit. Nostrum, reiciendis facere?
            Facere, minima nemo aspernatur iusto aut repellendus officiis
            molestiae praesentium nostrum sapiente dolorum repudiandae
            doloremque mollitia error atque fugiat.
          </p>
          
        </div>

      
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {books.map((items) => {
            return <Card items={items} key={items.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Course;