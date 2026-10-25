export default async function(eleventyConfig) {
	// copy /public folder to _site
  eleventyConfig.addPassthroughCopy({"public": "public"});

  // enable inserting HTML in markdown
  eleventyConfig.setNunjucksEnvironmentOptions({
		throwOnUndefined: true,
		autoescape: false, // warning: don’t do this! <- NEVER! <- No.
	});
};

export const config = {
	dir: {
		input: "content",
		includes: "../_includes",
		data: "../_data"
	},
	markdownTemplateEngine: 'njk',
  htmlTemplateEngine: "njk"
};
