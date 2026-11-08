import { DateTime } from "luxon";
// const TIME_ZONE = "America/Toronto";

export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"public": "public"});
  eleventyConfig.addPassthroughCopy({"rootpublic": "."});
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
