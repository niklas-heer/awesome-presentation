##### Footer (Easter Egg)
$("footer .love").hover ->
  $FooterName = $("footer .name")
  if $FooterName.hasClass('active')
    $FooterName.removeClass('active')
  else
    $FooterName.addClass('active')

$("footer .name").hover ->
  $FooterName = $("footer .love")
  if $FooterName.hasClass('active')
    $FooterName.removeClass('active')
  else
    $FooterName.addClass('active')
