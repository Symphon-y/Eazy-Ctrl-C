function inject() {
  alert('damn thing worked');
  console.log('damn thing worked');
  const popup_entry_point = document.createElement('div');
  let reactJS_script = document.createElement('script');
  popup_entry_point.id = 'popupButton';

  popup_entry_point.appendChild(reactJS_script);
  document.querySelector('body').appendChild(popup_entry_point);
}
const getTab = new Promise((resolve, reject) => {
  resolve(
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      var tab = tabs[0];
      console.log(tab.id);
      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          file: './injectScript.js',
        },
        () => {
          console.log('script thing complete');
        }
      );
    })
  );
  reject((err) => {
    console.log('whoops');
  });
});

getTab.then(() => {
  console.log('background script ran successfully');
});
