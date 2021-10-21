(function() {

  function parseStringArray(str) {
    str = str.replace(/\[|\]|~|"|&|'|;|:|quot|\$|_|`|-|{|}|\||\\/g, '');
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
    str = str.replace(/ ,| , |, /g, ',');
    str = str.split(',');
    return str;
  }

  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');
    // var errorpage = document.getElementById('');

    if (results.length) { 
      
      // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  
        
        // Iterate over the results
        var item = store[results[i].ref];

        var arrayhashtag = parseStringArray(item.category);
        arrayhashtag = arrayhashtag.map(item => {
          return `<small class="post-hashtags-item">${item}</small>`;
        });

        appendString += 
        `
          <div class="post-item">
            <a href="#" class="post-author">
              <img src='${ !item.imageUser ? "./assets/images/Avt_user.png" : item.imageUser }' alt="Panadora" class="post-author-image">
              <div class="post-author-info">
                <h4 class="post-author-name">Tác giả: ${item.author}</h4>
                <time class="post-author-time" id="datetime">Ngày đăng: ${item.date}</time>
              </div>
            </a>
            <a href="${item.url}" class="post-media">
              <img src="${item.site}/assets/images/${item.thumbnail}" alt="${item.url}" class="post-image">
            </a>
            <div class="post-hashtags">${arrayhashtag}</div>
            <!-- <div href="#" class="post-category"><button>{{post.category}}</button></div -->
            <div class="post-likeShare">
              <a class="fb-like" data-href="${item.site}/${item.url}" data-width="" data-layout="button_count" data-action="like" data-size="large" data-share="true"></a>
            </div>
            <h3>
              <a class="post-title" href="${item.url}" title="${item.title}">${item.title}</a>
            </h3>
            <div class="post-desc">${item.content.substring(0, 60)} ...</div>
          </div>
        `;
      }

      searchResults.innerHTML = appendString;
    } 
    else 
    {
      searchResults.innerHTML = 
      `<page size="A4" layout="landscape" class="post__content">
        <center>
          <div class="page-notfound">
            <svg width="250px" height="400px" viewBox="0 0 837 1045" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <path d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z" id="Polygon-1" stroke="#007FB2" stroke-width="6" sketch:type="MSShapeGroup"></path>
                <path d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z" id="Polygon-2" stroke="#EF4A5B" stroke-width="6" sketch:type="MSShapeGroup"></path>
                <path d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z" id="Polygon-3" stroke="#795D9C" stroke-width="6" sketch:type="MSShapeGroup"></path>
                <path d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z" id="Polygon-4" stroke="#F2773F" stroke-width="6" sketch:type="MSShapeGroup"></path>
                <path d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z" id="Polygon-5" stroke="#36B455" stroke-width="6" sketch:type="MSShapeGroup"></path>
              </g>
            </svg>
            <div>
                <h1>404<small> Not found</small></h1>
                <p>Không tìm thấy thông tin !</p>
            </div>
          </div>
        </center> 
      </page>
      `;
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    if(query.trim().length > 6)
    {
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
  
        if (pair[0] === variable) {
          return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
        }
      }
    }
    else window.location.replace("/");
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('category');
      this.field('content');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'author': window.store[key].author,
        'category': window.store[key].category,
        'content': window.store[key].content,
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();