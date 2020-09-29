import React from "react";
import Header from "../sections/Header";
import Services from "../sections/Services";
import Footer from "../sections/Footer";
import Videos from "../sections/Videos";
import Blog from "../sections/Blog";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Header />

      <main>
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 pt-70">
                    <h2>About Me</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!--? Team --> */}
        <section className="team-area pt-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-cat text-center mb-30 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".2s"
                >
                  <div className="cat-icon">
                    <img src="assets/img/gallery/team1.png" alt="" />
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="services.html">Body Building</a>
                    </h5>
                    <p>
                      You’ll look at graphs and charts in Task One, how to
                      approach the task{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-cat text-center mb-30 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".4s"
                >
                  <div className="cat-icon">
                    <img src="assets/img/gallery/team2.png" alt="" />
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="services.html">Muscle Gain</a>
                    </h5>
                    <p>
                      You’ll look at graphs and charts in Task One, how to
                      approach the task{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-cat text-center mb-30 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".6s"
                >
                  <div className="cat-icon">
                    <img src="assets/img/gallery/team3.png" alt="" />
                  </div>
                  <div className="cat-cap">
                    <h5>
                      <a href="services.html">Weight Loss</a>
                    </h5>
                    <p>
                      You’ll look at graphs and charts in Task One, how to
                      approach the task{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<!--? Team --> */}

        {/*  <!-- About Area End --> */}
        <section className="about-area2 fix pb-padding pt-50 pb-80">
          <div className="support-wrapper align-items-center">
            <div
              className="right-content2 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".2s"
            >
              <div className="right-img">
                <img src="assets/img/gallery/about.png" alt="" />
              </div>
            </div>
            <div className="left-content2">
              <div
                className="section-tittle2 mb-20 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="front-text">
                  <h2 className="">About Me</h2>
                  <p>
                    You’ll look at graphs and charts in Task One, how to
                    approach the task and the language needed for a successful
                    answer. You’ll examine Task Two questions and learn how to
                    plan, write and check academic essays.
                  </p>
                  <p className="mb-40">
                    Task One, how to approach the task and the language needed
                    for a successful answer. You’ll examine Task Two questions
                    and learn how to plan, write and check academic essays.
                  </p>
                  <Link to="/courses" className="border-btn">
                    My Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  <!-- About Area End --> */}

        {/*     <!-- Blog Area End -->*/}
        <Blog />
        {/*     <!-- Blog Area End -->*/}

        {/* <!-- video_end -->*/}
        <Videos />

        {/* <!-- video_end -->*/}

        {/*   <!-- ? services-area --> */}
        <Services />
        {/*   <!-- ? services-area --> */}
      </main>
      <Footer />
    </>
  );
}
