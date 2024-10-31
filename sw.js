chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "bdExtCalendarData") {
    renderCalendar(request.response.data);
  }
});

const renderCalendar = async (data) => {
  const groupData = groupBy(data);

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  currentTab = tab;

  setTimeout(() => {
    chrome.tabs.sendMessage(currentTab.id, {
      event: "mountdatacalendar",
      data: groupData,
    });
  }, 400);
};
const groupBy = (array) => {
  const dateMap = new Map();
  array.forEach((item) => {
    dateMap[item.date] = dateMap[item.date] || [];
    dateMap[item.date].push(item);
  });

  return dateMap;
};
