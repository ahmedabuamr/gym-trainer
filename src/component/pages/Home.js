import React from "react";
import Header from "../sections/Header";
import Services from "../sections/Services";
import Footer from "../sections/Footer";
import Videos from "../sections/Videos";
import Blog from "../sections/Blog";
import Pricing from "../sections/Pricing";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* <!--? slider Area Start--> */}
        <div className="slider-area position-relative">
          <div className="slider-active">
            <div className="single-slider slider-height d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-9 col-lg-9 col-md-10">
                    <div className="hero__caption">
                      <span className="wow fadeInLeft" data-wow-delay="0.1s">
                        Hi This is Zacson
                      </span>
                      <h1 className="wow fadeInLeft" data-wow-delay="0.4s">
                        Gym Trainer
                      </h1>
                      <Link
                        to="/courses"
                        className="border-btn hero-btn wow fadeInLeft"
                        data-wow-delay="0.8s"
                      >
                        My Courses
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--? slider Area Start--> */}

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
                        <h3>Personal traning</h3>
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
                        <Link to="/courses" className="border-btn">
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

        {/*      <!--? Team -->*/}
        <section className="team-area fix">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div
                  className="section-tittle text-center mb-55 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".1s"
                >
                  <h2>What I Offer</h2>
                </div>
              </div>
            </div>
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
                      <Link to="/">Body Building</Link>
                    </h5>
                    <p>
                      You’ll look at graphs and charts in Task One, how to
                      approach the task
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
                      <Link to="/">Muscle Gain</Link>
                    </h5>
                    <p>
                      You’ll look at graphs and charts in Task One, how to
                      approach the task
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
                      <Link to="/">Weight Loss</Link>
                    </h5>
                    <p>
                      You’ll look at graphs and charts in Task One, how to
                      approach the task
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*      <!--? Team -->*/}

        {/*      <!--? gallery -->*/}

        <div className="gallery-area section-padding30 ">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                <div className="box snake mb-30">
                  <div
                    className="gallery-img big-img"
                    style={{
                      backgroundImage: "url('assets/img/gallery/gallery1.png')",
                    }}
                  ></div>
                  <div className="overlay">
                    <div className="overlay-content">
                      <h3>Muscle gaining </h3>
                      <Link to="/gallery">
                        <i className="ti-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                <div className="box snake mb-30">
                  <div
                    className="gallery-img big-img"
                    style={{
                      backgroundImage:
                        "url('assets/img/gallery/gallery2.png') ",
                    }}
                  ></div>
                  <div className="overlay">
                    <div className="overlay-content">
                      <h3>Muscle gaining </h3>
                      <Link to="/gallery">
                        <i className="ti-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                <div className="box snake mb-30">
                  <div
                    className="gallery-img big-img"
                    style={{
                      backgroundImage: "url('assets/img/gallery/gallery3.png')",
                    }}
                  ></div>
                  <div className="overlay">
                    <div className="overlay-content">
                      <h3>Muscle gaining </h3>
                      <Link to="/gallery">
                        <i className="ti-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="box snake mb-30">
                  <div
                    className="gallery-img big-img"
                    style={{
                      backgroundImage:
                        " url('assets/img/gallery/gallery4.png')",
                    }}
                  ></div>
                  <div className="overlay">
                    <div className="overlay-content">
                      <h3>Muscle gaining </h3>
                      <Link to="/gallery">
                        <i className="ti-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="box snake mb-30">
                  <div
                    className="gallery-img big-img"
                    style={{
                      backgroundImage: "url('assets/img/gallery/gallery5.png')",
                    }}
                  ></div>
                  <div className="overlay">
                    <div className="overlay-content">
                      <h3>Muscle gaining </h3>
                      <Link to="/gallery">
                        <i className="ti-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="box snake mb-30">
                  <div
                    className="gallery-img big-img"
                    style={{
                      backgroundImage: "url('assets/img/gallery/gallery6.png')",
                    }}
                  ></div>
                  <div className="overlay">
                    <div className="overlay-content">
                      <h3>Muscle gaining </h3>
                      <Link to="/gallery">
                        <i className="ti-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  <!--gallery--> */}

        {/*  <!--Pricing--> */}
        <Pricing />
        {/*  <!-- Pricing--> */}

        {/*  <!-- About Area End -->*/}
        <section className="about-area2 fix pb-padding pt-50 pb-80">
          <div className="support-wrapper align-items-center">
            <div className="right-content2">
              <div
                className="right-img wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
              >
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
        {/*  <!-- About Area End -->*/}

        {/*   <!--? Blog Area Start -->*/}
        <Blog />
        {/*   <!--? Blog Area Start -->*/}

        {/*<!--? video_start --> */}
        <Videos />
        {/*<!--? video_start --> */}

        {/*<!-- ? services-area --> */}
        <Services />
        {/*<!-- ? services-area --> */}
      </main>
      <Footer />
    </>
  );
}
