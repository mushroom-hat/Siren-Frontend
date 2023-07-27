import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import useLogout from "../hooks/useLogout";
import Window from "../components/views/window";
import SideNav from "../components/views/sideBar";

const Home = () => {

    return (
        <>
        <Window>
        </Window>
        </>
        
    )
}

export default Home
