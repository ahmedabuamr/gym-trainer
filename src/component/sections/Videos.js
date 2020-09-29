import React from "react";

export default function Videos() {
  return (
    <div
      className="video-area section-bg2 d-flex align-items-center"
      style={{ backgroundImage: "url('assets/img/gallery/video-bg.png')" }}
    >
      <div className="container">
        <div className="video-wrap position-relative">
          <div className="video-icon">
            <a
              target="_blank"
              className="popup-video btn-icon"
              href="https://www.youtube.com/watch?v=wtFPIOV2bWM"
            >
              <i className="fas fa-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
