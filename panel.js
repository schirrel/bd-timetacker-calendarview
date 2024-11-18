chrome.devtools.network.onRequestFinished.addListener((request) => {
  request.getContent((body) => {
    if (request.request && request.request.url) {
      if (request.request.url.includes("api/v1/employees/records")) {
        var bodyObj = JSON.parse(body); //etc.
        chrome.runtime.sendMessage({
          type: "bdExtCalendarData",
          response: bodyObj,
        });
      }
    }
  });
});
