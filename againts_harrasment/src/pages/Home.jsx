import ContentHome from "../components/Content/Content";
import Footer from "../components/Footer/footer";
import Hero from "../components/Hero/Hero";
import CustomNavbar from "../components/Navbar/Navbar";

function Home(){
    return(
        <div>
            <CustomNavbar/>
            <Hero/>
            <ContentHome/>
            <Footer/>
        </div>
    )
}

export default Home;