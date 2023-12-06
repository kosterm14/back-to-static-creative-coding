export default function getQueryUrl(gql, slug) {
    return gql`
      query VisualThinking {
        methods(where: { slug: "${slug}" }) {
          title
          slug
          id
          material
          duration
          template {
            url
          }
          description {
            html
          }
          steps {
            title
            description {
              html
            }
            # visual {
            #   url
            # }
          }
          categories {
            title
          }
        }
      }
    `;
  }