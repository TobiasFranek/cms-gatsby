import { useStaticQuery, graphql } from "gatsby";


export default function useReferences() {
    const data = useStaticQuery(graphql`
		query ReferencesQuery {
			allStrapiReferences {
				nodes {
					company
					quote
					name
					image {
						childImageSharp {
							sizes(maxWidth: 600, quality: 90) {
								...GatsbyImageSharpSizes_tracedSVG
							}
						}
					}
				}
			}
		}
    `);

    return data.allStrapiReferences.nodes;
}
