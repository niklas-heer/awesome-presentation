// Generated by CoffeeScript 1.10.0
(function() {
  $("footer .love").hover(function() {
    var $FooterName;
    $FooterName = $("footer .name");
    if ($FooterName.hasClass('active')) {
      return $FooterName.removeClass('active');
    } else {
      return $FooterName.addClass('active');
    }
  });

  $("footer .name").hover(function() {
    var $FooterName;
    $FooterName = $("footer .love");
    if ($FooterName.hasClass('active')) {
      return $FooterName.removeClass('active');
    } else {
      return $FooterName.addClass('active');
    }
  });

}).call(this);

//# sourceMappingURL=main.js.map
