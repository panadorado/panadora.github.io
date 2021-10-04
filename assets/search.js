(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');
    // var errorpage = document.getElementById('');

    if (results.length) { 
      
      // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  
        
        // Iterate over the results
        var item = store[results[i].ref];
        appendString += 
        `<div class="col-md-4">
          <div class="single-blog">
            <br>
            <small class="row">
              <span class="col-sm"><i class="fas fa-book-reader"> Đăng bởi: ${item.author}</i></span>
              <span class="col-sm"><i class="fas fa-calendar-alt"> Ngày đăng: ${item.date}</i></span>
            </small><br>
            <a href="${item.url}">
              <img id="img-thumbnail" class="img-thumbnail img-hover" src="${item.site}/image/${item.thumbnail}" style="height: 180px;" title="${item.url}">
            </a><br>
            <a class="entry-title" href="${item.url}" title="${item.url}">${item.title}</a><br>
            <p> ${item.content.substring(0, 60)} ...</p>
            <div class="row">
              <div class="col-sm-8"><a class="fb-like" data-href="${item.site}/${item.url}" data-width="" data-layout="button_count" data-action="like" data-size="large" data-share="true"></a></div>
              <div class="col-sm"><a class="read-more-btn text-center" href="${item.url}" >Đọc thêm</a></div>
            </div><br>
          </div>
        </div>`;
      }

      searchResults.innerHTML = appendString;
    } 
    else 
    {
      searchResults.innerHTML = 
      `<div class="container post bg-light container-border-radius py-3 px-4 my-lg-4 my-3 post-content searchResult">
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
            <div class="message-box">
                <h1>404<small> Not found</small></h1>
                <p>Không tìm thấy thông tin !</p>
            </div>
          </div>
        </center> 
      </div>
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