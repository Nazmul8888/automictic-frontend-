import { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import Swal from 'sweetalert2';
import Banner from "../Banner/Banner";
import BreakingUpdate from "../BreakingUpdate/BreakingUpdate";
import MiddelSection from "../MiddelSection/MiddelSection";



const Home = () => {

  const [item, setItem] = useState(0)




  function buy(e, item) {
    e.preventDefault();
    const existingItems = JSON.parse(localStorage.getItem('items')) || [];

    // Add the new item to the existing items array.
    existingItems.push(item);

    // Save the updated items array back to local storage.
    localStorage.setItem('items', JSON.stringify(existingItems));
    setItem(existingItems.length)


    Swal.fire({
      title: `${item?.brand_name} added to the cart!`,
      text: 'Your item has been added to the cart.',
      icon: 'success',
      timer: 2000, // Close the alert after 2 seconds (adjust as needed)
      showConfirmButton: false, // Hide the "OK" button
    });







  }

  const news = useLoaderData()
  console.log(news)
  return (

    <>
    <BreakingUpdate></BreakingUpdate>
      <Banner></Banner>
      
      <div className="py-20 relative">
        <h1 className="text-center text-5xl font-bold text-[#ff6347] py-5">ALL BRANDS </h1>



        <Link to="/cart">

          <div className="absolute top-10 bg-green-600 px-4 rounded-md border-2  z-[200] right-0 mr-2 pt-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

            <div className="absolute top-[20px] right-[5px] bg-red-600 text-white rounded-full px-4 py-2 ">
              {item}
            </div>

          </div>

        </Link>



        <div className="grid grid-cols-3  gap-4 ml-20 ">




          {news?.map((item, index) => (
            <div className="user" key={index}>


              <Link to={`/product/${item.brand_name}`}>
                <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl">
                  <figure><img src={item.image} alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.brand_name}</h2>
                    <h2 className="font-bold">{item.name}</h2>
                    <p >{item.description_short}</p>
                    <p className="text-xl font-semibold">{item.type}</p>
                    <p>{item.price}</p>

                    <div className="card-actions ">
                      <button className="btn btn-primary" onClick={(e) => buy(e, item)}>Add to cart</button>
                    </div>
                  </div>
                </div>
              </Link>


              




            </div>
          ))}

        </div>




     <MiddelSection></MiddelSection>



      </div>
    </>

  );
};

export default Home;