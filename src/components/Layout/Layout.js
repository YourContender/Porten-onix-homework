import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Nav from "../Nav/Nav";

const Layout = ({children}) => {
    return(
        <>
            <Header/>
            <Nav/>
            
            <main>
                {children}
            </main>

            <Footer/>
        </>
    )
}

export default Layout;