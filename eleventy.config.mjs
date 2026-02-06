import { DateTime } from "luxon";

export default async function(eleventyConfig) {
	// copy /archive folder to _site
  eleventyConfig.addPassthroughCopy({"archive": "archive"});
	// copy /public folder to _site
  eleventyConfig.addPassthroughCopy({"public": "public"});

  // enable inserting HTML in markdown
  eleventyConfig.setNunjucksEnvironmentOptions({
		throwOnUndefined: true,
		autoescape: false, // warning: don’t do this! <- NEVER! <- No.
	});
	// date formatting for blog posts
	eleventyConfig.addFilter("postDate", (dateObj, format, zone) => {
		return DateTime.fromJSDate(dateObj, { zone: zone || "cst" }).toFormat(format || "DDD, T ZZZZ");
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
