export default function getQueryUrl(gql) {
  return gql`
    query VisualThinking {
      categories(first: 10) {
        title
        knowledgeClip {
          url
        }
        content {
          html
        }
      }
    }
  `;
}
