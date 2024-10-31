chrome.devtools.network.onRequestFinished.addListener((request) => {
  request.getContent((body) => {
    if (request.request && request.request.url) {
      if (request.request.url.includes("api/v1/employees/records")) {
        //continue with custom code
        var bodyObj = JSON.parse(body); //etc.
        console.log(bodyObj);
        chrome.runtime.sendMessage({
          type: "bdExtCalendarData",
          response: bodyObj,
        });
      }
    }
  });
});
