export default function inicializaGaleria() {
  let $sm = 480;
  let $md = 768;

  function resizeThis() {
     const $imgH = $('.middle img').width();
     if ($(window).width() >= $sm) {
        $('.left,.right,.section').css('height', $imgH);
     } else {
        $('.left,.right,.section').css('height', 'auto');
     }
  }

  resizeThis();

  $(window).resize(function(){
     resizeThis();
  });

  $(window).scroll(function() {
     $('.section').each(function(){
        var $elementPos = $(this).offset().top;
        var $scrollPos = $(window).scrollTop();

        var $sectionH = $(this).height();
        var $h = $(window).height();
        var $sectionVert = (($h/2)-($sectionH/4));


        if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
           $(this).addClass('animate');
        } else {
           $(this).removeClass('animate');
        }
     });
  });
}
