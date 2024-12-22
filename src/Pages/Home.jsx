import { useContext } from "react";
import AuthContext from "../providers/AuthContext";


const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            {user&&user?.email}
            <h2>this is home page {user?.email}</h2>
        </div>
    );
};

export default Home;