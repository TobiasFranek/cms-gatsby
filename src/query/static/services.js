import { useStaticQuery, graphql } from "gatsby";


export default function useServices() {
    const data = useStaticQuery(graphql`
	query ServicesQuery {
			allStrapiServices {
				nodes {
					title
					path
					icon {
						publicURL
					}
				}
			}
		}
    `);

    return data.allStrapiServices.nodes;
}
