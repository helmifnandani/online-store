import SideBarIcon from "./SideBarIcon";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import {FaFire, FaPoo} from "react-icons/fa";

const SideBar = () => {
    return (
        <div className="fixed top-[40px] left-0 h-screen w-16 m-0 flex flex-col bg-gray-100 text-gray-900 shadow-lg dark:bg-gray-900 dark:text-white">
            <SideBarIcon icon={<FaFire size="28"/>} />
            <SideBarIcon icon={<BsPlus size="32"/>} />
            <SideBarIcon icon={<BsFillLightningFill size="28"/>} />
            <SideBarIcon icon={<BsGearFill size="28"/>} />
            <SideBarIcon icon={<FaPoo size="28"/>} />
        </div>
    )
};

export default SideBar;