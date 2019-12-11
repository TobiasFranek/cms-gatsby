import { useStaticQuery, graphql } from "gatsby";


export default function useHero() {
    const data = useStaticQuery(graphql`
		query HeroQuery{
			strapiHeaders {
				button_link
				button
				title
				backgroundimage {
					childImageSharp {
						sizes(maxWidth: 1920, quality: 70) {
							...GatsbyImageSharpSizes
						}
					}
				}
			}
		}
    `);

    return data.strapiHeaders;
}
