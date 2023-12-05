import ArtikelUtama from "../../components/Artikel/ArtikelUtama";
import Footer from "../../components/Footer/footer";
import CustomNavbar from "../../components/Navbar/Navbar";



function MainArticles(){
    return(
        <div>
            <CustomNavbar/>
            <ArtikelUtama/>
            <Footer/>
           
        </div>
    )
}

export default MainArticles;