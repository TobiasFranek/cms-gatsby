import { useStaticQuery, graphql } from "gatsby";


export default function useNews() {
    const data = useStaticQuery(graphql`
		query NewsQuery {
			allStrapiNews {
				nodes {
				  title
				  path
				  description
				}
			}
		}
    `);

    return data.allStrapiNews.nodes;
}
