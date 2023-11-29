import ContentAbout from "../components/ContentAbout/ContentAbout";
import Footer from "../components/Footer/footer";
import CustomNavbar from "../components/Navbar/Navbar";


function About(){
    return(
        <div>
            <CustomNavbar/>
            <ContentAbout/>
            <Footer/>
        </div>
    )
}

export default About;