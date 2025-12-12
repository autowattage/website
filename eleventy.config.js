export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"public": "."});
};

export const config = {
	dir: {
		input: "content",
		includes: "../_includes"
	}
};
