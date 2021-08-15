import * as React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Seo from '../components/seo';
import RichText from '../components/richtext';
import Events from '../components/events';

const IndexPage = (props) => {
  const { title, headerSubtitle, logo, heroImage, bio } = props.data.contentfulLandingPage;

  switch (props.data.contentfulTheme.siteLayout) {
    case 'A':
    case 'B':
      return <LandingPageA {...{ title, headerSubtitle, logo, heroImage, bio }} />;
    case 'C':
      return <LandingPageC {...{ title, headerSubtitle, logo, heroImage, bio }} />;
    default:
      throw new Error('Invalid site layout');
  }
};

const LandingPageA = ({ heroImage, bio }) => (
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

const LandingPageC = ({ title, headerSubtitle, logo, heroImage, bio }) => (
  <main
    className="flex flex-col"
    style={{
      minHeight: `calc(100vh - 24rem - 3.5rem - 6rem)`
    }}>
    <div className="flex flex-grow flex-wrap">
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <RichText data={bio} />
      </div>
      <div className="flex-grow height-full bg-menu-background opacity-90 flex flex-col items-center justify-center p-8">
        <Events />
      </div>
    </div>
  </main>
);

export const query = graphql`
  query IndexQuery {
    contentfulLandingPage(isPublished: { eq: "published" }) {
      title
      heroImage {
        fluid(maxWidth: 2000) {
          ...GatsbyContentfulFluid
        }
      }
      bio {
        raw
      }
    }
    contentfulTheme(isPublished: { eq: "published" }) {
      siteLayout
    }
  }
`;

export default IndexPage;
