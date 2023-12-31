import { useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
const Unauthorized = () => {
    const navigate = useNavigate();
    // go back 1 page in history
    const goBack = () => navigate(-1);
    const { auth } = useAuth();

    return (
        <section>
            <h1>Unauthorized</h1>
            <br />
            <p>You do not have access to the requested page.</p>
            <div className="flexGrow">
                <button onClick={goBack}>Go Back</button>
            </div>
        </section>
    )
}

export default Unauthorized