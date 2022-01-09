import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/seo';
import RichText from '../components/richtext';

const Page = ({ data }) => {
  const { title, description, lang, body } = data.contentfulPage;

  return (
    <main
      style={{
        minHeight: `calc(100vh - 10rem - 3.5rem - 6rem)`
      }}>
      <Seo title={title} description={description} lang={lang} />
      <article className="mt-3 lg:mt-0">
        <div className="max-w-3xl p-4 mx-auto md:p-8 text-text">
          <RichText data={body} />
        </div>
      </article>
    </main>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    contentfulPage(urlSlug: { eq: $slug }) {
      title
      description
      lang
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            title
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default Page;
