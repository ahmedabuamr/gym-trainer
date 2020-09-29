import React from "react";
import Pricing from "../sections/Pricing";
import Header from "../sections/Header";
import Services from "../sections/Services";
import Footer from "../sections/Footer";

export default function Pricings() {
  return (
    <>
      <Header />

      <div className="slider-area2">
        <div className="slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap hero-cap2 pt-70">
                  <h2>Pricing</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- ? Pricing --> */}
      <Pricing />
      {/*<!-- ? Pricing --> */}

      {/*<!-- ? services-area --> */}
      <Services />
      {/*<!-- ? services-area --> */}

      {/*<!-- ? Footer --> */}
      <Footer />
      {/*<!-- ? Footer --> */}
    </>
  );
}
