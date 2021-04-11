import Logo from "@/assets/images/home/logo.svg";
import { Link } from "@/utils/glass/router";

const Footer = () => {
  return (
    <>
      <footer className="footer py:_3 mt:_3 d-sm-down:none">
        <div className="container mb:_5">
          <div className="row">
            <div className="col-3">
              <h2>Sitemap</h2>
              <div className="footer__sitemap">
                <Link to={{ name: "home" }}>Home</Link>
                <Link to={{ name: "about" }}>About</Link>
                <Link to={{ name: "home" }}>Services</Link>
                <Link to={{ name: "products" }}>Products</Link>
                <Link to={{ name: "contact" }}>Contact Us</Link>
              </div>
            </div>
            <div className="col-3">
              <h2>Our Info</h2>
              <div className="footer__contact__info">
                <a href="tel:+233209625338" className="mb:_1">
                  0209625338
                </a>
                <a href="tel:+233553078212" className="mb:_2">
                  0553078212
                </a>
                <p>East Legon Accra, near A n C mall washing bay</p>
                <p>
                  <b>P.O.BOX</b> AT 1894, <br/> ADENTA-ACCRA GA/R Ghana
                </p>
              </div>
            </div>
            <div className="col-3">
              <h2>Follow Us On</h2>
            </div>
            <div className="col-3 text-right position:relative">
              <img src={Logo} alt="" className="footer__logo mt:auto" />
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer py:_3 mt:_3 d-md-up:none">
        <div className="container mb:_5">
          <div className="row">
            <div className="col-12 mb:_4">
              <img src={Logo} alt="" className="footer__logo" />
            </div>
            <div className="col-9 footer__sitemap">
              <Link to={{ name: "home" }}>Home</Link>
              <Link to={{ name: "about" }}>About</Link>
              <Link to={{ name: "home" }}>Services</Link>
              <Link to={{ name: "products" }}>Products</Link>
              <Link to={{ name: "contact" }}>Contact Us</Link>
            </div>
            <div className="col-3">
              <h2>Our Info</h2>
            </div>
            <div className="col-12 mt:_7 footer__contact__info">
              <a href="tel:+233209625338" className="mb:_1">
                0209625338
              </a>
              <a href="tel:+233553078212" className="mb:_2">
                0553078212
              </a>
              <p>East Legon Accra, near A n C mall washing bay</p>
              <p>
                <b>P.O.BOX</b> AT 1894, ADENTA-ACCRA GA/R Ghana
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
 
export default Footer;
