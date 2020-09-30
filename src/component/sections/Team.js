import React from "react";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <section className="team-area fix section-padding30">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-tittle text-center mb-55">
              <h2>What I Offer</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-cat text-center mb-30">
              <div className="cat-icon">
                <img src="assets/img/gallery/team1.png" alt="" />
              </div>
              <div className="cat-cap">
                <h5>
                  <Link to="/">Body Building</Link>
                </h5>
                <p>
                  You’ll look at graphs and charts in Task One, how to approach
                  the task{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-cat text-center mb-30">
              <div className="cat-icon">
                <img src="assets/img/gallery/team2.png" alt="" />
              </div>
              <div className="cat-cap">
                <h5>
                  <Link to="/">Muscle Gain</Link>
                </h5>
                <p>
                  You’ll look at graphs and charts in Task One, how to approach
                  the task{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-cat text-center mb-30">
              <div className="cat-icon">
                <img src="assets/img/gallery/team3.png" alt="" />
              </div>
              <div className="cat-cap">
                <h5>
                  <Link to="/">Weight Loss</Link>
                </h5>
                <p>
                  You’ll look at graphs and charts in Task One, how to approach
                  the task
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
