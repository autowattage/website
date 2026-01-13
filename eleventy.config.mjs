export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"public": "public"});

  eleventyConfig.setNunjucksEnvironmentOptions({
		throwOnUndefined: true,
	});
};

export const config = {
	dir: {
		input: "content",
		includes: "../_includes"
	},
  htmlTemplateEngine: "njk"
};
