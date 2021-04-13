import { Link } from "@/utils/glass/router";
import { useTopNav } from "@/utils/hooks";
import Logo from "@/assets/images/logo.svg";
import { useStore } from "@/utils/glass/store";
import Icon from "@/components/Icon";
import Button from "@/components/Button";

const TopNav = () => {
    const { active, hidden } = useTopNav({
        scrollEffects: true,
        hideOnScroll: true,
    });

    const [hasAuth] = useStore("hasAuth");

    return (
        <nav className={`layout__topnav flex:center-all ${active && "-active"} ${hidden && "-hidden"}`}>
            <div className="layout__topnav__inner flex flex:center-between">
                <Link to={{ name: "home" }} className="logo__container">
                    <img src={Logo} alt="Game Central" className="logo" />
                </Link>

                {hasAuth ? <TopNavAuth /> : <TopNavGuest />}
            </div>
        </nav>
    );
};

const TopNavAuth = () => {
    return (
        <div className="layout__topnav__auth flex flex:center-all">
            <Link
                to={{ name: 'checkout' }}
                className="cursor:pointer"
            >
                <Icon>shopping_cart</Icon>
            </Link>
            {/* <vs-dropdown>
                <div className="username flex flex:center-all">
                    <span className="user__avatar flex flex:center-all">{{ getDisplayName() }}</span>
                    <span>{{ user.name }}</span>
                    <Icon>keyboard_arrow_down</Icon>
                </div>

                <vs-dropdown-menu>
                    <vs-dropdown-item :to="{name: 'profile'}">
                        Profile
                    </vs-dropdown-item>
                    <vs-dropdown-item :to="{name: 'checkout'}">
                        Checkout
                    </vs-dropdown-item>
                    <vs-dropdown-item>
                        Terms and conditions
                    </vs-dropdown-item>
                    <vs-dropdown-item @click.prevent="logout">
                        Logout
                    </vs-dropdown-item>
                </vs-dropdown-menu>
            </vs-dropdown> */}
        </div>
    );
};

const TopNavGuest = () => {
    return (
        <div className="layout__topnav__guest flex flex:center-between">
            <Button
                color="transparent"
                className="login__btn"
            >
                Login
            </Button>
            <Button
                className="register__btn"
                color="black"
            >
                Join
            </Button>

            {/* <Login />
            <Register />
            <ForgotPassword />
            <ResetPassword /> */}
        </div>
    );
};
 
export default TopNav;
