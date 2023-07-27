import Window from "../components/views/window";
import { Link } from "react-router-dom"
import Users from "../components/Users"
import AdminMainDisplay from "../components/views/adminMainDisplay";

const AdminPage = () => {
    return (
        <>
        <Window>
            <AdminMainDisplay />
        </Window>
        </>
        
    )
}

export default AdminPage