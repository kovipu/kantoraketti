import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/seo';
import RichText from '../components/richtext';

const Page = ({ data }) => {
  const { title, description, lang, body } = data.contentfulPage;

  return (
    <main>
      <Seo title={title} description={description} lang={lang} />
      <article className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto p-8 text-text-inverted">
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
            fixed {
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;

export default Page;
