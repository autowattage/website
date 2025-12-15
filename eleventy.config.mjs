export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"public": "."});

  eleventyConfig.setNunjucksEnvironmentOptions({
		throwOnUndefined: true,
		autoescape: false, // warning: don’t do this! <- NEVER!
	});
};

export const config = {
	dir: {
		input: "content",
		includes: "../_includes"
	},
  htmlTemplateEngine: "njk"
};
