import React from "react"
import {
     ServicesContainer, 
     ServicesWrapper, 
     ServicesH1, 
     ServicesCard, 
     ServicesH2, 
     ServicesIcon, 
     ServicesP 
    } from "./ServicesElements";

import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/mobile_app.svg';
import Icon3 from '../../images/connected.svg';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Private & Group Chatting</ServicesH2>
                    <ServicesP>One to One and Group Chatting with end to end encrypted functionality to provide high level security. </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Audio & Video Calling</ServicesH2>
                    <ServicesP>Peer to Peer, smooth and efficient audio and video calling </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Broadcasting and Multicasting</ServicesH2>
                    <ServicesP>Registered Users can broadcast as well as multicast messages to other registered users</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
