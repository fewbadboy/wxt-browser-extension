import { Runtime } from "wxt/browser";

export default defineBackground(() => {
  // basic messaging
  // let ports: Runtime.Port[] = [];

  // browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  //   console.log(message); // { type: 'request', data: { name: 'vue' }}
  // });

  // setInterval(() => {
  //   const message = { type: 'response', data: { value: ~~(Math.random() * 10 ) }};

  //   ports.forEach((port) => port.postMessage(message));
  // }, 5e3);

  // browser.runtime.onConnect.addListener((port) => {
  //   ports.push(port);
  //   port.onDisconnect.addListener(() => {
  //     ports.splice(ports.indexOf(port), 1);
  //   });
  // });
});
