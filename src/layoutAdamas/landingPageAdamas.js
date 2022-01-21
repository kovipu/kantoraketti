import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Seo from '../components/seo';
import RichText from '../components/richtext';
import Events from '../components/events';

const LandingPageAdamas = () => {
  const { contentfulLandingPage } = useStaticQuery(graphql`
    query {
      contentfulLandingPage(isPublished: { eq: "published" }) {
        bio {
          raw
        }
        heroImage {
          gatsbyImageData
        }
      }
    }
  `);

  const { bio, heroImage } = contentfulLandingPage;

  return (
    <main>
      <Seo />
      <GatsbyImage className="w-full h-80 lg:h-96" loading="eager" image={heroImage.gatsbyImageData} alt="" />
      <div className="flex flex-wrap">
        <div className="flex justify-center items-center flex-grow text-lg min-h-[50vh] w-screen lg:w-2/3">
          <div className="max-w-md mx-4 my-6 lg:my-14 text-text">
            <RichText data={bio} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-screen text-lg height-full bg-background-alt text-text lg:w-1/3">
          <div className="max-w-md mx-4 my-6 lg:my-14">
            <h1 className="m-3 text-3xl font-bold text-text-heading">Tapahtumat</h1>
            <Events />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPageAdamas;
