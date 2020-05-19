 
(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');
    //var errorpage = document,getElementById('')

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<div class="single-search">'
                    + '<small><p><i class="fas fa-book-reader"></i> Đăng bởi: ' + item.author + ' | <i class="fas fa-calendar-alt"></i> Ngày đăng: ' + item.date + ' | '
                    + '<i class="fb-like" data-href="' + item.site + '/' + item.url + '" data-width="" data-layout="button_count" data-action="like" data-size="small" data-share="true"></i></p></small>'
                    + '<hr><p class="entry-title"><a href="' + item.url + '" style="font-size: 20px; font-weight: bold;">' + item.title + '</a></p>'
                    + item.content.substring(0, 150) + '...</p></div>';
      }

      searchResults.innerHTML = appendString;
    } 
    else 
    {
      searchResults.innerHTML = '<div class="container post bg-light container-border-radius py-3 px-4 my-lg-4 my-3 post-content" style="border-radius: 20px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);">' +
                                '<div class="col-lg-12 col-md-9 col-sm-12">' +
                                '<center><p>Không tìm thấy kết quả tìm kiếm của bạn !</p></center>' + 
                                '<center><img src="../image/404pagenotfound.jpeg" width="250"></center></div></div>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
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