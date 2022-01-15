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
    <main className="flex flex-col">
      <Seo />
      <div className="flex flex-wrap">
        <div className="flex flex-col items-center justify-center w-screen p-4 md:w-1/2">
          <div className="max-w-md">
            <RichText data={contentfulLandingPage.bio} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow w-screen p-8 md:w-1/2 height-full bg-menu-background opacity-90">
          <Events />
        </div>
      </div>
    </main>
  );
};
export default LandingPageMachina;
