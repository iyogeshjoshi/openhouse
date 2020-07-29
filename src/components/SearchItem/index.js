import React from 'react'
import './style.css'

// cacheId: "kn9VnUu2JmQJ"
// displayLink: "live.openhouse.study"
// formattedUrl: "https://live.openhouse.study/"
// htmlFormattedUrl: "https://live.openhouse.study/"
// htmlSnippet: "live online <b>classes</b> ... <b>Class</b> 6 - 12 ... Leave us your details here; we will reach out <br>↵to you today and keep you updated on the most exciting <b>classes</b> at Openhouse."
// htmlTitle: "Welcome to Openhouse"
// kind: "customsearch#result"
// link: "https://live.openhouse.study/"
// pagemap: {cse_thumbnail: Array(1), metatags: Array(1), cse_image: Array(1)}
// snippet: "live online classes ... Class 6 - 12 ... Leave us your details here; we will reach out ↵to you today and keep you updated on the most exciting classes at Openhouse."
// title: "Welcome to Openhouse"

const SearchItem = ({ item }) => {
  return <div className='search-item'>
    <div className="thumbnail">
      <img src={item.pagemap.cse_image[0].src} alt={item.title} />
    </div>
    <div className="content">
      <a href={item.formattedUrl} className='item-link'>{item.displayLink}</a>
      <div className="title">{item.title}</div>
      <div className="snippet">{item.snippet}</div>
    </div>
  </div>
}

export default SearchItem;