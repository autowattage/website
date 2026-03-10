# Sundial city
you're on version 11 of my website, made for hack club's [page](https://page.hackclub.com) YSWS program.

the goal of sundial city is to:
- serve as a web-based personal digital assistant
- archive/track my life over time
- express myself
- become my strongest internet presence in lieu of social media

sundial city is made with 11ty and html (rendered as nunjucks), css, and markdown (rendered with liquid).
artwork, assets, and paper textures are made by scanning constrution paper and applying color filters (HSL adjustment) on krita.

## folder structure
- /content, where HTML and markdown files are stored
- /public, where non-text files are stored
  - /public/css contains CSS files
  - /public/js contains JS files
  - /public/img contains image files (png, svg, gif, webp)
- /archive, where old HTML and markdown files are snapshotted
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
