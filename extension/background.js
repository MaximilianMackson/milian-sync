// Log open tabs in current window to console
const logTabs = (tabArray) => {
    tabArray.forEach(tab => {
        // console.log(tab.url);
    });

    console.log(`${tabArray.length} tabs total`);
}

chrome.tabs.query({ currentWindow: true }, (tabs) => logTabs(tabs));

// Log cookies in current execution session to window
const logCookies = (cookieArray) => {
    cookieArray.forEach(cookie => {
        // console.log(cookie.domain);
    });

    console.log(`${cookieArray.length} cookies total`);
}

chrome.cookies.getAll({}, (cookies) => logCookies(cookies));

// Log bookmarks in main subtree to console
const logBookmarks = (bookmarkNodeArray) => {
    bookmarkNodeArray.forEach(bookmarkNode => {
        bookmarkNode.children.forEach(bookmarkSubNode => {
            console.log(bookmarkSubNode.title);
        });

        console.log(`${bookmarkNode.children.length} bookmarks total`);
    });
}

chrome.bookmarks.getSubTree('1', (bookmarks) => logBookmarks(bookmarks));