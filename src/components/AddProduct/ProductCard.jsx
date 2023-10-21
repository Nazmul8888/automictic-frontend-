

const ProductCard = ({brand}) => {
    const {brand_name, description_short, type, name, price,  image }= brand;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{brand_name}</h2>
                <h3 className="card-title">{name}</h3>
                <h2 className="card-title">{type}</h2>
               <p>{description_short}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;