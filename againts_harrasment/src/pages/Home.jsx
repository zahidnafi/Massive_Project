import ContentHome from "../components/Content/Content";
import Footer from "../components/Footer/footer";
import CustomNavbar from "../components/Navbar/Navbar";

function Home(){
    return(
        <div>
            <CustomNavbar/>
            <ContentHome/>
            <Footer/>
        </div>
    )
}

export default Home;