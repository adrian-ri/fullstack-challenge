import Deals from "../Components/deals";
import { Deal } from "../interfaces";


interface Props{
    dealArray: Deal[],
}

const Home = ({dealArray}:Props) =>{
    return(
        <div>
            <Deals  dealArray={dealArray}/>
        </div>
    )
};

export default Home;