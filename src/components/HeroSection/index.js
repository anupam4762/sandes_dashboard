import React, {useState} from "react";
import Video from '../../videos/video.mp4';
import { Button } from "../ButtonElement";

import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroBtnWrapper, 
    HeroH1, 
    HeroP, 
    ArrowForward, 
    ArrowRight 
} from "./HeroElements";

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome aboard - Sandes</HeroH1>
                <HeroP>Sign Up for Joining our family and enjoy the instant messaging services...</HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Get Started {hover ? <ArrowForward/> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection
