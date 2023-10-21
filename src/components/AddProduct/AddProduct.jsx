import Swal from 'sweetalert2';




const handelCoffee = e => {
    e.preventDefault()
    const name = e.target.name.value;
    const brand_name = e.target.brand_name.value;
    const description_short = e.target.description_short.value;
    const type = e.target.type.value;
    const price = e.target.price.value;
    const image = e.target.image.value;

    const newProduct = { brand_name, description_short, type, name, price,  image }
    console.log(newProduct);

    // how send to data server

    fetch('http://localhost:5000/product', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })

        .then(res => res.json())
        .then(data => {
            console.log(data)

            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Added Successfully ',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })

            }
        })


}

const AddProduct = () => {
    return (
        <div className="py-10 w-[1320px] mx-auto ">
            <h1 className="text-4xl  text-center font-semibold">Add Product</h1>
            <form onSubmit={handelCoffee}  className='py-5'>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Product Name</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Brand_name </span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="brand_name" placeholder="Brand_name" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Description_short</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="description_short" placeholder="Description_short" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold">Price </span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Type</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div >
                    <div className="form-control w-full mb-8">
                        <label className="label">
                            <span className="label-text font-bold">image URL</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="image" placeholder="image URL" className="input input-bordered w-full" />
                        </label>
                    </div>


                </div>

                <input type="submit" value="Add Product" className="btn btn-block hover:bg-red-600" />
            </form>
        </div>
    );
};

export default AddProduct;