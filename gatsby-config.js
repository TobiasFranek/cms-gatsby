module.exports = {
	siteMetadata: {
		title: `Alex Mayer`,
		description: `Awesome Page for Alex.`,
		author: `Us`,
	},
	plugins: [
	  `gatsby-plugin-react-helmet`,
	  {
		resolve: `gatsby-source-filesystem`,
		options: {
		  name: `images`,
		  path: `${__dirname}/src/images`,
		},
	  },
	  `gatsby-plugin-sass`,
	  `gatsby-transformer-sharp`,
	  `gatsby-plugin-sharp`,
	  {
		resolve: `gatsby-plugin-manifest`,
		options: {
		  name: `gatsby-starter-default`,
		  short_name: `starter`,
		  start_url: `/`,
		  background_color: `#663399`,
		  theme_color: `#663399`,
		  display: `minimal-ui`,
		  icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
		},
	  },
	  
	  {
		  resolve: 'gatsby-source-strapi',
		  options: {
			apiURL: 'https://gatsby-strapi-cms.herokuapp.com',
			contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
			  'news',
			  'services',
			  'headers',
			  'references'
			],
			queryLimit: 1000,
		  },
		},
	  // this (optional) plugin enables Progressive Web App + Offline functionality
	  // To learn more, visit: https://gatsby.dev/offline
	  // `gatsby-plugin-offline`,
	],
  }
  