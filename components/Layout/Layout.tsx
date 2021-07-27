import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


export interface LayoutProps {
    
}
 
const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
    return ( 
        <div className="content">
            <Navbar />
            { children }
            <Footer />
        </div>
     );
}

export default Layout;