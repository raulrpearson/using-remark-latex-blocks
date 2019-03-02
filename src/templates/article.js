import React from 'react';
import { graphql } from 'gatsby';

export default ({
  data: {
    markdownRemark: { html }
  }
}) => <article dangerouslySetInnerHTML={{ __html: html }} />;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
