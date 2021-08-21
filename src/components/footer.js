import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FaDiscord, FaFacebookSquare, FaInstagram, FaEnvelope } from 'react-icons/fa';
import RichText from './richtext';

const Footer = () => {
  const { contentfulLandingPage, allContentfulFooterLink } = useStaticQuery(graphql`
    query FooterQuery {
      contentfulLandingPage(isPublished: { eq: "published" }) {
        footerLogo {
          file {
            url
          }
        }
        footerText {
          raw
        }
      }
      allContentfulFooterLink {
        nodes {
          linkType
          text
          link
        }
      }
    }
  `);

  return (
    <footer className="bg-footer-background text-footer-text flex flex-col justify-center items-center text-xl p-4">
      <img src={contentfulLandingPage.footerLogo.file.url} alt="logo" className="h-28 w-28" />
      <RichText data={contentfulLandingPage.footerText} />
      <ul className="flex flex-row flex-wrap">
        {allContentfulFooterLink.nodes.map((item) => (
          <li key={item.link}>
            <a
              className="flex items-center p-4 hover:text-background"
              href={item.link}
              target="_blank"
              rel="noreferrer">
              <Icon linkType={item.linkType} />
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

const Icon = ({ linkType }) => {
  const iconStyle = 'w-8 h-8 mr-2';

  switch (linkType) {
    case 'Discord':
      return <FaDiscord className={iconStyle} />;
    case 'Facebook':
      return <FaFacebookSquare className={iconStyle} />;
    case 'Instagram':
      return <FaInstagram className={iconStyle} />;
    case 'Email':
      return <FaEnvelope className={iconStyle} />;
    default:
      return null;
  }
};

export default Footer;
