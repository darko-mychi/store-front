import { Link } from "@/utils/glass/router";
import { useTopNav } from "@/utils/hooks";
import Logo from "@/assets/images/logo.svg";

const TopNav = () => {
    const { active } = useTopNav({
        scrollEffects: true,
    });

    return (
        <nav className={`layout__topnav flex flex:center-all ${active && "-active"}`}>
            <div className="layout__topnav__inner flex flex:center-between">
                <Link to={{ name: "home" }} className="logo__container">
                    <img src={Logo} alt="Game Central" className="logo" />
                </Link>
            </div>
        </nav>
    );
};
 
export default TopNav;
