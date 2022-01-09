import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Seo from '../components/seo';
import RichText from '../components/richtext';
import Events from '../components/events';

const LandingPageMachina = () => {
  const { contentfulLandingPage } = useStaticQuery(graphql`
    query {
      contentfulLandingPage(isPublished: { eq: "published" }) {
        bio {
          raw
        }
      }
    }
  `);

  return (
    <main
      className="flex flex-col"
      style={{
        minHeight: `calc(100vh - 24rem - 3.5rem - 6rem)`
      }}>
      <Seo />
      <div className="flex flex-wrap flex-grow">
        <div className="flex flex-col items-center justify-center flex-grow p-4">
          <RichText data={contentfulLandingPage.bio} />
        </div>
        <div className="flex flex-col items-center justify-center flex-grow p-8 height-full bg-menu-background opacity-90">
          <Events />
        </div>
      </div>
    </main>
  );
};
export default LandingPageMachina;
