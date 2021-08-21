import React from 'react';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Img from 'gatsby-image';

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="text-text-accent">{text}</b>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="m-3">{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-4xl m-3 font-bold text-text-heading">{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-3xl m-3 font-bold text-text-heading">{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-2xl m-3 font-bold text-text-heading">{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4 className="text-xl m-3 font-bold text-text-heading">{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5 className="text-lg m-3 font-bold text-text-heading">{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6 className="text-lg m-3 font-bold text-text-heading">{children}</h6>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc ml-8">{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal ml-8">{children}</ol>,
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <a href={data.uri} className="text-text-link underline">
        {children}
      </a>
    ),
    [BLOCKS.EMBEDDED_ASSET]: ({ data }) => (
      <Img
        imgStyle={{ maxHeight: '24rem', width: '48rem', maxWidth: '80vw', objectFit: 'contain' }}
        style={{ maxWidth: '80vw' }}
        className="max-h-96 max-w-screen m-3"
        key={data.target.contentful_id}
        fixed={data.target.fixed}
        alt={data.target.titlse}
      />
    )
  }
};

const RichText = ({ data }) => {
  return data && renderRichText(data, options);
};

export default RichText;
