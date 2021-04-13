import Footer from "./components/Footer";
import SideCart from "./components/SideCart";
import TopNav from "./components/TopNav"

const Main: React.FC<any> = ({
    children,
    className
}) => {
    return (
        <div className="auth__layout">
            <div className="auth__layout__content">
                <TopNav />
                <div className="layout__content">
                    <SideCart />
                    <div className={className}>
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Main;