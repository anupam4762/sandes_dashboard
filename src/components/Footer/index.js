import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"
import { FooterContainer, FooterWrapper, FooterLinkContainer, FooterLinkWrapper, FooterLinkTitle, FooterLink, FooterLinkItems,  SocialMedia, SocialIconLink, SocialMediaLogo, SocialMediaWrap, SocialIcons, WebsiteRights} from "./FooterElements"
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to="/">How it Works</FooterLink>
                            <FooterLink to="/">Testimonials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Creator and Contributors</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us  </FooterLinkTitle>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Support</FooterLink>
                            <FooterLink to="/">Sponsorships</FooterLink>
                            <FooterLink to="/">Latest News</FooterLink>
                        </FooterLinkItems>
                        
                    </FooterLinkWrapper>

                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">You Tube</FooterLink>
                            <FooterLink to="/">Twitter</FooterLink>
                            <FooterLink to="/">Instagram</FooterLink>
                            <FooterLink to="/">Linkedin</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Videos </FooterLinkTitle>
                            <FooterLink to="/">Submit Videos</FooterLink>
                            <FooterLink to="/">Agency</FooterLink>
                            <FooterLink to="/">Influencers</FooterLink>
                            <FooterLink to="/">Ambassadors</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinkContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialMediaLogo to="/"  onClick={toggleHome}>Sandes</SocialMediaLogo>
                        <WebsiteRights> @ NIC 2020 All rights reserved .</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" taget="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                            <SocialIconLink href="/" taget="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                            <SocialIconLink href="/" taget="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                            <SocialIconLink href="/" taget="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                            <SocialIconLink href="/" taget="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
