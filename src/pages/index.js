import * as React from 'react';
import { graphql } from 'gatsby';

import LandingPageAdamas from '../layoutAdamas/landingPageAdamas';
import LandingPageMachina from '../layoutMachina/landingPageMachina';

const IndexPage = ({ data }) => {
  switch (data.contentfulTheme.siteLayout) {
    case 'adamas':
      return <LandingPageAdamas />;
    case 'machina':
      return <LandingPageMachina />;
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
