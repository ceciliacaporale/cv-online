import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../../src/styles/components/socialnetworks.sass";

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/mariaceciliacaporale/" },
    { name: "github", icon: <FaGithub />, link: "https://github.com/ceciliacaporale" },
    { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/cecicaporale" },
  ];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.link} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>

  );
};

export default SocialNetworkContainer;