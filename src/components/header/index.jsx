import PersonalInfo from "../personalInfo";
import HeaderNav from "../headerNav";
import SocialLinks from "../socialLinks";
import "./index.scss";


const Header = () =>{
    return(
        <header>
            <PersonalInfo />
            <HeaderNav />
            <SocialLinks />
        </header>
    );
};

export default Header;