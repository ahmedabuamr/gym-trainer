import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-area black-bg">
          <div className="container">
            <div className="footer-top footer-padding">
              <div className="row">
                <div className="col-xl-12">
                  <div className="single-footer-caption mb-50 text-center">
                    <div
                      className="footer-logo wow fadeInUp"
                      data-wow-duration="1s"
                      data-wow-delay=".2s"
                    >
                      <Link to="/">
                        <img src="assets/img/logo/logo2_footer.png" alt="" />
                      </Link>
                    </div>

                    <div
                      className="header-area main-header2 wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay=".4s"
                    >
                      <div className="main-header main-header2">
                        <div className="menu-wrapper menu-wrapper2">
                          <div className="main-menu main-menu2 text-center">
                            <nav>
                              <ul id="navigation">
                                <li>
                                  <Link to="/">Home</Link>
                                </li>
                                <li>
                                  <Link to="/about">About</Link>
                                </li>
                                <li>
                                  <Link to="/courses">Courses</Link>
                                </li>
                                <li>
                                  <Link to="/pricing">Pricing</Link>
                                </li>
                                <li>
                                  <Link to="/gallery">Gallery</Link>
                                </li>
                                <li>
                                  <Link to="/blogs">Blog</Link>
                                </li>
                                <li>
                                  <Link to="/contact">Contact</Link>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*<!-- social -->*/}
                    <div
                      className="footer-social mt-30 wow fadeInUp"
                      data-wow-duration="3s"
                      data-wow-delay=".8s"
                    >
                      <a href="https://twitter.com/Ahmed_Amr_21">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://www.facebook.com/selmyasdf">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/ahmed-abu-amr-5252a3159/">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
