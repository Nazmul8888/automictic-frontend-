import { useLoaderData, useParams } from "react-router-dom";


const DetailsCart = () => {

    const car_data = useLoaderData()
  

    const { details } = useParams();


const filteredData = car_data.filter(item => item.brand_name === details)[0];





    return (
        <div className="max-w-7xl mx-auto">
             <div className="flex  my-20 space-x-10">
            <div className="bg-gray-300 rounded-md  p-4 w-1/2">
                <img className="w-full object-cover bg-red-600" src={filteredData?.image_thin} alt="" />
            </div>
            <div className="space-y-4">

                <h1 className="text-4xl font-semibold text-gray-900">
                    {filteredData?.name}
                </h1>
                <p className="text-2xl italic ">{filteredData?.brand_name}</p>

                <p className="text-2xl ">
                    {filteredData?.description_short}
                </p>

                <p className="text-rose-600  text-3xl font-bold">
                    {filteredData?.price
}$

                </p>

                <button className="bg-blue-600 text-lg text-white px-4 py-1.5 rounded-md">Buy</button>

            </div>
        </div>
        </div>
       
    );
};

export default DetailsCart;