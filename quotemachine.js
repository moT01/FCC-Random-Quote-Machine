$(document).ready(function() {
  var quote, author;
  
  function getQuote () {
    $.ajax({
      url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      cache: false,
      success: function(json) {
        
        //the json has html embedded in it so this is to remove that markup
        var endquote = json[0].content.lastIndexOf("<");
        var quote = json[0].content.slice(3,endquote);
        
        $(".quote").html("\"" + quote + "\"");
        $(".author").html("-" + json[0].title);
      }
    });
  }
  
  getQuote();
  //$("#newquote").on("click", getQuote());
  $("#newquote").click((e) => getQuote());  
  
  $("#tweet").on("click", function() {
      window.open("https://twitter.com/intent/tweet/?text=" + $(".quote").text() + " " + $(".author").text());             
  }); 
});