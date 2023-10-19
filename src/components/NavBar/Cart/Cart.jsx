import { useEffect, useState } from "react";
import Swal from 'sweetalert2';


const Cart = () => {

    const [loadedData, setLoadedData] = useState([]);

  // useEffect to load data from local storage when the component mounts
  useEffect(() => {
    // Retrieve data from local storage
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('items'));

    // Update the state with the loaded data
    if (dataFromLocalStorage) {
      setLoadedData(dataFromLocalStorage);
    }


  }, []);


  const handleDeleteItem = (itemIndex) => {
    const updatedData = [...loadedData];
  
    updatedData.splice(itemIndex, 1);
  
    setLoadedData(updatedData);
  
    localStorage.setItem('items', JSON.stringify(updatedData));

    
    Swal.fire({
        title: 'Successfully remove from you cart',
        icon: 'success',
        timer: 2000, // Close the alert after 2 seconds (adjust as needed)
        showConfirmButton: false, // Hide the "OK" button
      });



  };


    return (
        <div className="max-w-7xl mx-auto ">
            {loadedData.map((item, index) => (

<div key={index} className="relative card card-side bg-base-100 shadow-xl m-10 ">
    <div onClick={() => handleDeleteItem(index)} className="absolute bg-rose-600 top-[-10px] right-[-10px] p-2 rounded-full">

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>




    </div>


<figure><img src={item?.image_thin} alt="Movie" className="w-[200px] h-full object-cover" /></figure>
<div className="card-body">
  <h2 className="card-title">{item.name}</h2>
  <p>{item.description_short}</p>
  <p className="text-2xl text-rose-600 font-bold">{item?.price}$</p>
</div>
</div>

            ))}

          
        </div>
    );
};

export default Cart;