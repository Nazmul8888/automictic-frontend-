import { useLoaderData } from "react-router-dom";


const Home = () => {

    const news = useLoaderData()
    console.log(news)
    return (
        <div className="py-20">
            
                    <>
                    
            <div className="grid grid-cols-4  gap-4 ml-10 ">
              {news.map((item, index) => (
        <div className="user" key={index}>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
     <figure><img src={item.image} alt="Shoes" /></figure>
    <div className="card-body">
    <h2 className="card-title">{item.brand_name}</h2>
    <h2 className="font-bold">{item.name}</h2>
    <p >{item.description_short}</p>
    <p className="text-xl font-semibold">{item.type}</p>
    <p>{item.price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
        </div>
        </div>



        </div>
      ))}

                    </div>
                   
                   
                       
                    </>
                    

                
            
        </div>
   
    );
};

export default Home;