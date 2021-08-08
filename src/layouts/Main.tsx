import { useState } from "react";
import Footer from "./components/Footer";
import SideCart from "./components/SideCart";
import TopNav from "./components/TopNav"

const Main: React.FC<any> = ({
    children,
    className,
    page
}) => {
    const [cartOpen, setCartOpen] = useState(false);

    const controls = {cartOpen, setCartOpen};

    return (
        <div className={`${page}--layout auth__layout ${cartOpen && "-cart-open"}`}>
            <div className="auth__layout__content">
                <TopNav />
                <div className="layout__content">
                    {page !== "checkout" && <SideCart {...controls} />}
                    <div className={`${className ? className : ""} ${page && page + "page"} page`}>
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Main;