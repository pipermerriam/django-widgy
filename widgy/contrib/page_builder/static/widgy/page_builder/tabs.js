jQuery(function($) {
  $('.tabify .tabs a').bind('click', function() {
    var href = $(this).attr('href');
    var tabContent = $(href);
    $('.tabify .tabs a').removeClass('active'); // clear the active tabs
    $('.tabify .tabs a[href=' + href + ']').addClass('active'); // activate the clicked tab
    $('.tabify .tabContent').removeClass('active'); // clear the active content
    tabContent.addClass('active'); // show the clicked content
    // Change the hash without scrolling
    tabContent.attr('id', '');
    window.location.hash = href;
    tabContent.attr('id', href.substr(1)); // remove the sharp
    return false;
  });

  //|
  //| If there's a #tab in the URL, CLICK ON THAT TAB!!!
  //|
  if(window.location.hash) {
    $('.tabs a[href="' + window.location.hash + '"]').click();
  }
});
