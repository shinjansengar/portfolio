import "./index.scss";
import ProfileSummary from "../profileSummary";
import Experience from "../experience";
import Projects from "../projects";
import Footer from "../footer";

const Content = () =>{
    return (
        <div>
            <ProfileSummary />
            <Experience />
            <Projects />
            <Footer />
        </div>
    )
};

export default Content;