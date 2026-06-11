
import React from 'react';
import selfie from '../assets/selfie.jpeg';

function Header() {
  return (
    <header className="header">

      <section className="profile">
        <img
          src={selfie}
          alt="Girishwari Reddy"
          className="profile-img"
        />

        <section>
          <h1>Girishwari Reddy</h1>

          <p className="subtitle">
            Engineering Student | Web Development Learner
          </p>

          <hr />

          <p className="sec-sub">
            Passionate about building web experiences.
          </p>
        </section>
      </section>

      <nav className="navbar">
        <a href="#about">About</a>
        <a href="#education">Qualification</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">My Certificates</a>
        <a href="#contact">Contact</a>
      </nav>

    </header>
  );
}

export default Header;
