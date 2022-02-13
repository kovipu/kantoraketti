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
        <div className="flex flex-col items-center justify-center w-screen p-4 md:py-24 md:w-1/2">
          <div className="max-w-md text-lg md:text-xl">
            <RichText data={contentfulLandingPage.bio} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-grow w-screen p-4 md:py-12 md:w-1/2 height-full bg-menu-background opacity-90">
          <div className="w-full max-w-md md:w-auto text-text-inverted">
            <h1 className="m-3 text-3xl font-bold">Tapahtumat</h1>
            <Events />
          </div>
        </div>
      </div>
    </main>
  );
};
export default LandingPageMachina;
