import browser from 'webextension-polyfill';
import Psl from 'psl';

function extractHostname(url){
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];
    console.log("Hostname: "+hostname);
    return hostname;
}

//gets current tab's url
function getPage(callback){ 
        browser.tabs.query({currentWindow: true, active: true})
        .then((tabs) => {
          console.log("Full url: "+tabs[0].url);
          callback(Psl.get(extractHostname(tabs[0].url)));
        });
}

export default getPage;