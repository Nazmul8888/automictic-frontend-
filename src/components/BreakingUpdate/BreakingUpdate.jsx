import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingUpdate = () => {
    return (
        <div className="py-5">
              <div className="flex">
            <button className="btn bg-red-700 text-yellow-50"> Brand Update</button>
            <Marquee pauseOnHover= {true} speed={100}>
            <Link className="mr-12" to='/'> BMW all model here & home delivery System......</Link>
                 <Link className="mr-12" to='/'> FORD all model here & home delivery System............</Link>
                 <Link className="mr-12" to='/'> TESLA all model here & home delivery System............</Link>
                 <Link className="mr-12" to='/'> Hond all model here & home delivery System............</Link>
            </Marquee>
        </div>
        </div>
    );
};

export default BreakingUpdate;
