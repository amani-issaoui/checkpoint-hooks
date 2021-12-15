import React from 'react'
import './featchered.css'
function Featchered() {
    return (
        <div>
            <div className="hero-section">
  <div className="hero-slide">
    <div className="hero-slide-item">
      <img src="./images/supergirl-banner.jpg" alt="supergirl" />
      <div className="overlay" />
      <div className="hero-slide-item-content">
        <div className="item-content-wraper">
          <div className="item-content-title top-down">
            Supergirl
          </div>
          <div className="movie-infos top-down delay-2">
            <div className="movie-info">
              <i className="bx bxs-star" />
              <span>4.5</span>
            </div>
            <div className="movie-info">
              <i className="bx bxs-time" />
              <span>120 mins</span>
            </div>
            <div className="movie-info">
              <span>HD</span>
            </div>
            <div className="movie-info">
              <span>16+</span>
            </div>
          </div>
          <div className="item-content-description top-down delay-4">
          Kara Zor-El, cousin of Kal-El, arrived on Earth, but 24 years late. Her mission was to protect her cousin, but he has in the meantime become a respected superhero by all.
          </div>
          <div className="item-action top-down delay-6">
            <a href="#" className="btn btn-hover">
              <i className="bx bxs-right-arrow" />
              <span>Watch now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Featchered
