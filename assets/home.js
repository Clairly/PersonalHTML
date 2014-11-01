(function() {
  $(function() {
    var scroll;
    $(".scrollLink").click(function(ev) {
      var linkID;
      ev.preventDefault();
      linkID = $(this).attr('id');
      return scroll(linkID);
    });
    return scroll = function(link) {
      return $.scrollTo($("#" + link + "Page"), 750);
    };
  });

}).call(this);