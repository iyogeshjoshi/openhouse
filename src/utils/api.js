const HOST = 'https://www.googleapis.com/customsearch/v1';
// ?key=AIzaSyBPyD7liSzu-uh9ocKKXNWYoRtrfQ_XdVU&cx=018264299595958242005:dvoe66zacxy&q=classes
const KEY = 'AIzaSyBPyD7liSzu-uh9ocKKXNWYoRtrfQ_XdVU'

export const fetchResult = (query, page) =>
  new Promise((resolve, reject) => {
    let queryParams = `key=${KEY}&cx=018264299595958242005:dvoe66zacxy&q=${query}`;

    if (page) {
      queryParams += `&start=${page}`;
    }

    fetch(`${HOST}?${queryParams}`)
      .then(res => res.json())
      .then(resolve)
      .catch(reject);
  })