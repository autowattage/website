# Sundial city
you're on version 12 of my website! sundial city uses 11ty and is hosted on vercel.

## folder structure
- /content, where HTML and markdown files are stored
- /public, where non-text files are stored
  - /public/css contains CSS files
  - /public/js contains JS files
  - /public/img contains image files (png, svg, gif, webp)
- /_archive, where old HTML and markdown files are snapshotted
- /_includes, where template HTML and markdown files are stored
- /_data, where JSON and data files are stored
- /_site, the static site output when running `npx @11ty/eleventy`

## local live preview
1. git clone the repo (`git clone https://github.com/autowattage/website.git`)
2. install 11ty (`npm install @11ty/eleventy`)
3. run `npx @11ty/eleventy --serve`
4. visit `localhost:8080` in your web browser
5. profit

( to just build the output, run `npx @11ty/eleventy`)
