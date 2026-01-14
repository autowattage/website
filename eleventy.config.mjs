export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"public": "public"});

  eleventyConfig.setNunjucksEnvironmentOptions({
		throwOnUndefined: true,
		autoescape: false, // warning: don’t do this! <- NEVER!
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
