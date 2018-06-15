# ASSIST.fun
[ASSIST.org](www.assist.org/web-assist/welcome.html),
but as a responsive web app that helps you optimize your transfer courses.

ISN'T THAT FUN?

## Screenshots
![Old VS New](./screenshots/assist-fun.png?raw=true)

## Developing
This is a `create-react-app` React app; download the repo, run `npm install` in your terminal, then run `npm run dev` to start the dev server!

## Server-side components
- [assistscraper](https://github.com/karinassuni/assistscraper) - Python module for scraping articulation pages
- [assistparser](https://github.com/karinassuni/assistparser) - Python module for parsing articulation pages for their course trees!
- [assisttemplater](https://github.com/karinassuni/assisttemplater) - Python module for generating semantic HTML pages out of the assistparser course trees
- [assistconsolidator](https://github.com/karinassuni/assistconsolidator) - Python module for mass-downloading ALL ASSIST articulations!
