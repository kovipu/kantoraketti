import React from 'react';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage } from 'gatsby-plugin-image';

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="text-text-accent">{text}</b>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="m-3">{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1 className="m-3 text-4xl font-bold text-text-heading">{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="m-3 text-3xl font-bold text-text-heading">{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3 className="m-3 text-2xl font-bold text-text-heading">{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4 className="m-3 text-xl font-bold text-text-heading">{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5 className="m-3 text-lg font-bold text-text-heading">{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6 className="m-3 text-lg font-bold text-text-heading">{children}</h6>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="ml-8 list-disc">{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol className="ml-8 list-decimal">{children}</ol>,
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <a href={data.uri} className="underline text-text-link">
        {children}
      </a>
    ),
    [BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
      const { contentful_id, gatsbyImageData, title } = data.target;

      return (
        <GatsbyImage
          imgStyle={{ maxHeight: '24rem', width: '48rem', maxWidth: '80vw', objectFit: 'contain' }}
          style={{ maxWidth: '80vw' }}
          className="m-3 max-h-96 max-w-screen"
          key={contentful_id}
          image={gatsbyImageData}
          alt={title}
        />
      );
    }
  }
};

const RichText = ({ data }) => {
  return data && renderRichText(data, options);
};

export default RichText;
