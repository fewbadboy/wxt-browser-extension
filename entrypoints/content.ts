export default defineContentScript({
  matches: ['*://*.google.com/*'],
  main() {
    console.log(import.meta.env.BROWSER);
    console.log('Hello content.');
  },
});
