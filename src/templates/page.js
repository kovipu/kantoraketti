import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/seo';
import RichText from '../components/richtext';

const Page = ({ data }) => {
  const { title, description, lang, body, iframeUrl } = data.contentfulPage;

  return (
    <main className="min-h-[30vh] mb-24">
      <Seo title={title} description={description} lang={lang} />
      <article className="my-3 lg:mt-0">
        <div className="max-w-3xl p-4 mx-auto md:p-8 text-text">
          <RichText data={body} />
        </div>
        <Iframe url={iframeUrl} />
      </article>
    </main>
  );
};

const Iframe = ({ url }) => {
  if (!url) {
    return null;
  }

  return (
    <div className="relative overflow-hidden mx-auto max-w-3xl h-128">
      <iframe
        src={url}
        className="absolute border-0 w-full h-full top-0 left-0"
        height="600"
        frameborder="0"
        scrolling="no"
      />
    </div>
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
      iframeUrl
    }
  }
`;

export default Page;
