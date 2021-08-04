import * as React from 'react';
import { graphql } from 'gatsby';
import RichText from '../components/RichText';

const IndexPage = (props) => {
  const { title, heroImage, bio } = props.data.contentfulLandingPage;

  return (
    <main>
      <title>{title}</title>
      <div className="flex flex-wrap-reverse justify-center items-end min-h-screen bg-background md:items-center">
        <div className="text-text-inverted m-8 max-w-md text-lg">
          <RichText data={bio} />
        </div>
        <img src={heroImage.fixed.src} className="h-96 max-w-screen md:max-w-lg md:rounded-lg md:shadow-md md:m-8" />
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
