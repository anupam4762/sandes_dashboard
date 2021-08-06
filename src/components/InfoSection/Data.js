import aboutus from '../../images/aboutus.svg';
import service from '../../images/online_chatting.svg';
import faq from '../../images/faq.svg';
import signup from '../../images/signup.svg';

export const homeObjOne = {
    id: 'about',
    lightBg:true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'About Us',
    headLine: 'Sandes',
    description: 'NIC developed Instant messaging (IM) technology is a type of online chat that offers real-time text transmission over the Internet.',
    buttonLabel: 'Know More',
    imgStart: true,
    img: aboutus,
    alt: 'peoples',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjTwo = {
    id: 'services',
    lightBg:true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Services',
    headLine: 'Private Chat, Group Chat, Audio Call, Video Call, Broadcasting',
   // description: 'Instant messaging (IM) technology is a type of online chat that offers real-time text transmission over the Internet.',
    buttonLabel: 'Start',
    imgStart: true,
    img: service,
    alt: 'services',
    dark: false,
    primary: false,
    darkText: false
};

export const homeObjThree = {
    id: 'faq',
    lightBg:true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Frequently Asked Questions',
    headLine: 'ChatBot, FAQ Section',
    description: 'Document providing answers to a list of typical questions that users might ask regarding the offered technology',
    buttonLabel: 'Have a Query?',
    imgStart: false,
    img: faq,
    alt: 'tech',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjFour = {
    id: 'signup',
    lightBg:false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Login/Sign-Up',
    headLine: 'Register Yourself with Sandes',
    description: 'User can signup using mobile number or email and provide their basic details to enjoy instant messaging ',
    buttonLabel: 'Get Ready',
    imgStart: true,
    img: signup,
    alt: 'tech',
    dark: true,
    primary: true,
    darkText: false
};