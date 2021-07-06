module.exports = {
	pathPrefix: "/CTF-WriteUps"
	{
		"scripts":{
			"deploy": "gatsby build --prefix-paths && gh-pages -d public"
		}
	}
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/HOW-TO-READ-THIS-BLOG`,
      },
    },
	  {
      resolve: 'gatsby-remark-obsidian',
      options: {
        titleToURL: (title) => `/${title}`, // optional
        markdownFolder: `${__dirname}/content`, // optional
        highlightClassName: 'highlight', // optional
      },
    },
  ],
  siteMetadata: {
    title: `Cloufish's Knowledge Base`,
  },
}
