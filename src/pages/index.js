import * as React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/seo';
import RichText from '../components/richtext';
import Header from '../components/header';

const IndexPage = (props) => {
  const { heroImage, bio } = props.data.contentfulLandingPage;

  return (
    <main className="min-h-screen">
      <Header />
      <Seo />
      <div className="flex flex-wrap-reverse justify-center items-end md:items-center">
        <div className="text-text-inverted m-4 max-w-md text-lg">
          <RichText data={bio} />
        </div>
        <img
          src={heroImage.fixed.src}
          alt=""
          className="h-96 max-w-screen md:max-w-lg md:rounded-lg md:shadow-md md:m-8"
        />
      </div>
    </main>
  );
};

export const query = graphql`
  query IndexQuery {
    contentfulLandingPage(isPublished: { eq: "published" }) {
      title
      heroImage {
        fixed {
          src
        }
      }
      bio {
        raw
      }
    }
  }
`;

export default IndexPage;
