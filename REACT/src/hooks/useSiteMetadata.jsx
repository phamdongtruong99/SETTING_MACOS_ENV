// eslint-disable-next-line import/no-unresolved
import { useStaticQuery, graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            author
            description
            siteUrl
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
