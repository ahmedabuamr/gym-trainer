import React from "react";
import Header from "../sections/Header";
import Team from "../sections/Team";
import Videos from "../sections/Videos";
import Services from "../sections/Services";
import Footer from "../sections/Footer";
import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <div>
      <Header />
      <main>
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 pt-70">
                    <h2>Courses</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Team />

        {/*<!-- Traning categories End--> */}

        <section className="traning-categories black-bg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="assets/img/gallery/cat1.png" alt="" />

                    <div className="topic-content-box">
                      <div className="topic-content">
                        <p>
                          You’ll look at graphs and charts in Task One, how to
                          approach the task and <br /> the language needed for a
                          successful answer
                        </p>
                        <Link to="/courses" className="border-btn">
                          View Courses
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="single-topic text-center mb-30">
                  <div className="topic-img">
                    <img src="assets/img/gallery/cat2.png" alt="" />
                    <div className="topic-content-box">
                      <div className="topic-content">
                        <h3>Group traning</h3>
                        <p>
                          You’ll look at graphs and charts in Task One, how to
                          approach the task and <br /> the language needed for a
                          successful answer.
                        </p>
                        <Link to="/courses" className="btn">
                          View Courses
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<!-- Traning categories End--> */}

        {/*<!-- Videos--> */}
        <Videos />
        {/*<!-- Videos--> */}

        {/*<!-- ? services-area --> */}
        <Services />
        {/*<!-- ? services-area --> */}
      </main>
      <Footer />
    </div>
  );
}
