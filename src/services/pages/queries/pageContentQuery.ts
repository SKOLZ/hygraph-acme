import { gql } from "graphql-request";

export const pageContentQuery = gql`
  {
    page(where: { url: "/" }) {
      sections {
        id
        block {
          ... on Hero {
            id
            title
            description {
              raw
            }
            buttonActions {
              id
              buttonText
              size
            }
          }
          ... on Callout {
            id
            title
            description {
              raw
            }
            actionButton {
              buttonText
              size
            }
          }
          ... on FeatureSection {
            id
            label
            title
            description {
              raw
            }
            media {
              ... on StaticImage {
                image {
                  url
                }
              }
              ... on YoutubeEmbed {
                youtubeUrl
              }
            }
            direction
          }
        }
      }
      seo {
        title
        description
        canonicalUrl
        seoImage {
          url
        }
      }
    }
  }
`;
