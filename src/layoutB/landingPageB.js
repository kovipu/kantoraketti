import React from 'react';
import Img from 'gatsby-image';

import Seo from '../components/seo';
import RichText from '../components/richtext';

const LandingPageB = ({ heroImage, bio }) => (
  <main className="min-h-screen">
    <Seo />
    <div className="flex flex-wrap-reverse justify-center items-end md:items-center">
      <div className="text-text m-4 max-w-md text-lg">
        <RichText data={bio} />
      </div>
      <Img
        className="h-96 w-96 max-w-screen md:max-w-lg md:rounded-lg md:shadow-md md:m-8"
        fluid={heroImage.fluid}
        alt=""
      />
    </div>
  </main>
);

export default LandingPageB;
