import React from "react";
import { FaGithub, FaLinkedin, FaUser } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import "./Footer.css";

const ProfileButton = ({ icon: Icon, label, link, color }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="profile-btn" style={{ "--hover-color": color }}>
        <Icon className="profile-icon" />
        <span className="profile-label">{label}</span>
      </button>
    </a>
  );
};

export default function Footer() {
  return (
    <div className="profile-container">
      <h4 className="Txt">My Profiles:</h4>
      <ProfileButton
        icon={FaLinkedin}
        label="LinkedIn"
        link="https://www.linkedin.com/in/nischayrt/"
        color="#0077B5"
      />
      <ProfileButton
        icon={FaGithub}
        label="GitHub"
        link="https://github.com/NischayRT"
        color="#000000ff"
      />
      <ProfileButton
        icon={SiLeetcode}
        label="LeetCode"
        link="https://leetcode.com/u/user0322sl/"
        color="#beee00ff"
      />
      <ProfileButton
        icon={SiCodechef}
        label="CodeChef"
        link="https://www.codechef.com/users/nischayreddy"
        color="#581228ff"
      />
      <ProfileButton
        icon={FaUser}
        label="Portfolio"
        link="https://nischay-reddy-portfolio.netlify.app/"
        color="#ff0000af"
      />
    </div>
  );
}
