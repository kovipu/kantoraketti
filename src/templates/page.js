import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/seo';
import RichText from '../components/richtext';
import Header from '../components/header';

const Page = ({ data }) => {
  const { title, description, lang, body } = data.contentfulPage;

  return (
    <main className="min-h-screen">
      <Header />
      <Seo title={title} description={description} lang={lang} />
      <article className="mt-20">
        <div className="max-w-3xl mx-auto p-4 md:p-8 text-text">
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
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

export default Page;
