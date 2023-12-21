import Footer from "../components/Footer/footer";
import CustomNavbar from "../components/Navbar/Navbar";
import RuangAman from "../components/RuangAman/RuangAman";

function SafeRoom(){
    return(
        <div>
            <CustomNavbar/>
            <RuangAman/>
            <Footer/>
        </div>
    )
}

export default SafeRoom;