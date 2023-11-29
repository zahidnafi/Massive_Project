
import Footer from "../components/Footer/footer";
import MainArticle from "../components/MainArticle/Main Article";
import MoreArticle from "../components/MoreArticle/MoreArticle";
import CustomNavbar from "../components/Navbar/Navbar";


function Articles(){
    return(
        <div>
            <CustomNavbar/>
            <MainArticle/>
            <MoreArticle/>
            <Footer/>
        </div>
    )
}

export default Articles;