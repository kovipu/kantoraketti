import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-2xl m-3 font-bold">{children}</h1>,
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="m-3">{children}</p>
  }
};

const RichText = ({ data }) => {
  return data && renderRichText(data, options);
};

export default RichText;
