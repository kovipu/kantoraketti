import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/seo';
import RichText from '../components/richtext';
import Header from '../components/header';

const Page = ({ data }) => {
  const { title, description, lang, body } = data.contentfulPage;

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Seo title={title} description={description} lang={lang} />
      <article>
        <div className="max-w-3xl mx-auto p-8 text-text-inverted">
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
