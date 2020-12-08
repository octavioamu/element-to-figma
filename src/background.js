global.browser = require('webextension-polyfill');
// alert('Hello world!');



chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    let isResponseAsync = false;
  
    if (request.inject) {
      isResponseAsync = true;
      chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
        const activeTab = sender.tab || tabs[0];
        if (activeTab && activeTab.id) {
          chrome.tabs.executeScript(
            activeTab.id,
            {
              file: "inject.js"
            },
            args => {
                // console.log('injected')
                sendResponse({ done: true, args});
            }
          );
          
        }
      });
    }

    if (!request.inject) {
      

    }

    if (request.download) {
      chrome.downloads.download({
        url: request.download
      });
    }
  
    return isResponseAsync;
  });