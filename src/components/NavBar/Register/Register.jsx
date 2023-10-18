import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Router/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext)




    const handelRegister = e=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        
        createUser(email,password)
        .then(result=>{
          console.log(result.user)
        })

        .catch(error=>{
          console.log(error)
        })


        console.log(name,email,password)
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" required placeholder="Name Here" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" required placeholder="password" className="input input-bordered"  />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center mt-4">Have a Account? please<Link className="text-green-600 font-bold" to='/login'> Login
                </Link>
             </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;