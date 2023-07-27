import { useLocation, useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import useLogout from "../../hooks/useLogout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faHome, faGear, faShieldHalved, faFolderClosed } from '@fortawesome/free-solid-svg-icons'

const SideNav = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const logout = useLogout();

    const signOut = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        await logout();
        navigate('/');
    }

    const SideBarIcon = ({text, icon, linkpage}) => {
        // get current page and compare to linkpage
        const isActive = location.pathname === linkpage;

        return (
            <Link
              to={linkpage}
              className={`mb-1 ml-2 pl-2 py-2 flex items-center space-x-3 hover:text-white hover:bg-[#546A7B] rounded ${
                isActive ? 'bg-[#546A7B] text-white' : 'hover:bg-opacity-50'
              }`}
            >
              <FontAwesomeIcon icon={icon} size="base" />
              <span>{text}</span>
              <br />
            </Link>
          );
    }
    return (
            <div className="min-h-full w-48 flex-none bg-primary shadow-lg">
                    <section className="ml-4 pt-28 text-xs font-bold text-gray-400">
                   
                    <SideBarIcon text="Home" icon={faHome} linkpage="/home" />
                    <SideBarIcon text="Files" icon={faFolderClosed} linkpage="/files" />
                    <SideBarIcon text="Admin" icon={faShieldHalved} linkpage="/admin" />
                    <SideBarIcon text="Settings" icon={faGear} linkpage="/settings" />
                        <div className="flexGrow">
                            <button onClick={signOut}>Sign Out</button>
                        </div>
                    </section>

            </div>
    )
}

export default SideNav;