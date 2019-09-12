import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            siteTitle
            siteUrl
            siteCover
            authorName
            authorAvatar
            authorDescription
            siteDescription
            twitterUsername
            disqusShortname
            disqusSiteUrl
            multilangPosts
            headerTitle
            headerLinksIcon
            headerLinks {
              label
              url
            }
            websiteHost {
              name
              url
            }
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
