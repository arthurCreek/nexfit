
import Navbar from './navbar/Navbar';
import '../styles/styles.scss';

const Layout = (props) => {

    return (
        <div>
            <Navbar />
            <main>{props.children}</main>
        </div>
    )

};

export default Layout;