import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Seo from '../components/seo';
import RichText from '../components/richtext';
import Events from '../components/events';

const LandingPageC = () => {
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
      <div className="flex flex-grow flex-wrap">
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          <RichText data={contentfulLandingPage.bio} />
        </div>
        <div className="flex-grow height-full bg-menu-background opacity-90 flex flex-col items-center justify-center p-8">
          <Events />
        </div>
      </div>
    </main>
  );
};
export default LandingPageC;
