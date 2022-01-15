import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Seo from '../components/seo';
import RichText from '../components/richtext';

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
    <main className="">
      <Seo />
      <GatsbyImage className="w-full h-80 lg:h-96" image={heroImage.gatsbyImageData} alt="" />
      <div
        className="flex flex-wrap items-end justify-center md:items-center bg-gradient-to-b from-background to-background-alt"
        style={{ minHeight: 'calc(100vh - 424px)' }}
      >
        <div className="max-w-md m-4 text-lg text-text">
          <RichText data={bio} />
        </div>
      </div>
    </main>
  );
};

export default LandingPageAdamas;
