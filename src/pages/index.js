import React, {useState} from "react"
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "../components/InfoSection/Data";

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
       <>
        <Sidebar isOpen= {isOpen} toggle={toggle}/>
        <Navbar toggle= {toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <Services/>
        <InfoSection {...homeObjThree}/>
        <InfoSection {...homeObjFour}/>
       </> 
    );
};

export default Home
