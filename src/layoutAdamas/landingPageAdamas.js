import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Seo from '../components/seo';
import RichText from '../components/richtext';

const LandingPageAdamas = () => {
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
      <Img className="w-full h-80 lg:h-96" fluid={heroImage.fluid} alt="" />
      <div
        className="flex flex-wrap items-end justify-center md:items-center bg-gradient-to-b from-background to-background-alt"
        style={{ minHeight: 'calc(100vh - 424px)' }}>
        <div className="max-w-md m-4 text-lg text-text">
          <RichText data={bio} />
        </div>
      </div>
    </main>
  );
};

export default LandingPageAdamas;
