import { DateTime } from "luxon";
const TIME_ZONE = "UTC-6";

export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"public": "public"});

  eleventyConfig.setNunjucksEnvironmentOptions({
		throwOnUndefined: true,
		autoescape: false, // warning: don’t do this! <- NEVER!
	});

	eleventyConfig.addDateParsing(function(dateValue) {
		let localDate;
		if(dateValue instanceof Date) { // and YAML
			localDate = DateTime.fromJSDate(dateValue, { zone: "utc" }).setZone(TIME_ZONE, { keepLocalTime: true });
		} else if(typeof dateValue === "string") {
			localDate = DateTime.fromISO(dateValue, { zone: TIME_ZONE });
		}
		if (localDate?.isValid === false) {
			throw new Error(`Invalid \`date\` value (${dateValue}) is invalid for ${this.page.inputPath}: ${localDate.invalidReason}`);
		}
		return localDate;
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
