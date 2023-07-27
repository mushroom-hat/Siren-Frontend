import SideBar from "./sideBar";
import MainDisplay from "./mainDisplay";

const Window = ({children}) => {

    return(
        <div className="bg-primary min-h-screen flex">
            <SideBar />
            <MainDisplay>
                {children}
            </MainDisplay>
        </div>
    )

}

export default Window;