import * as React from 'react';
import { graphql } from 'gatsby';

import LandingPageA from '../layoutA/landingPageA';
import LandingPageB from '../layoutB/landingPageB';
import LandingPageC from '../layoutC/landingPageC';

const IndexPage = ({ data }) => {
  switch (data.contentfulTheme.siteLayout) {
    case 'A':
      return <LandingPageA />;
    case 'B':
      return <LandingPageB />;
    case 'C':
      return <LandingPageC />;
    default:
      throw new Error('Invalid site layout');
  }
};

export const query = graphql`
  query IndexQuery {
    contentfulTheme(isPublished: { eq: "published" }) {
      siteLayout
    }
  }
`;

export default IndexPage;
