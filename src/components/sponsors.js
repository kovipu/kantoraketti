import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Sponsors = () => {
  const sponsorData = useStaticQuery(graphql`
    query SponsorQuery {
      contentfulLandingPage(isPublished: { eq: "published" }) {
        sponsors {
          name
          link
          logo {
            file {
              url
            }
          }
        }
      }
    }
  `);

  const { sponsors } = sponsorData.contentfulLandingPage;

  console.log(sponsors);

  return (
    <div className="bg-sponsors-background text-footer-text flex justify-center py-8 px-4">
      <div className="max-w-5xl w-full">
        <h2 className="mx-3 text-3xl text-footer-text">Yhteistyössä</h2>
        <div className="flex w-full flex-wrap">
          {sponsors.map(({ name, link, logo }) => (
            <a 
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-200 ease-in-out hover:scale-110"
            >
              <img
                src={logo.file.url}
                alt={name}
                className="max-h-28 w-auto mx-6 my-4 max-w-[200px]"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;