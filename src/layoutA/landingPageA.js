import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Seo from '../components/seo';
import RichText from '../components/richtext';

const LandingPageA = () => {
  const { contentfulLandingPage } = useStaticQuery(graphql`
    query {
      contentfulLandingPage(isPublished: { eq: "published" }) {
        heroImage {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
        bio {
          raw
        }
      }
    }
  `);

  const { bio, heroImage } = contentfulLandingPage;

  return (
    <main className="">
      <Seo />
      <Img className="h-80 lg:h-96 w-full" fluid={heroImage.fluid} alt="" />
      <div
        className="flex flex-wrap justify-center items-end md:items-center bg-gradient-to-b from-background to-background-alt"
        style={{ minHeight: 'calc(100vh - 424px)' }}>
        <div className="text-text m-4 max-w-md text-lg">
          <RichText data={bio} />
        </div>
      </div>
    </main>
  );
};

export default LandingPageA;
