var activeSmall = 'show';
var classSmall = 'collapse';
var activeBig = 'active';
var classBig = 'tab-pane';

$(window).on('resize', responsiveTabs);

function responsiveTabs() {
  if (window.innerWidth < 768 && !$('.tab-content').hasClass('small')) {
    var parent = $('.tab-content').first().attr('id');

    $('.tab-content').children().each(function(i, elem) {
      $(elem).wrap('<div class="item"></div>');

      elem = $(elem).parent();

      var classContent = 'class="collapsed"';
      if (i === 0) {
        classContent = '';
      }

      $(elem).children().attr('class', '').addClass(classSmall);
      if (i === 0) {
        $(elem).children().addClass(activeSmall);
      }

      var target = $(elem).children().first().attr('id');

      var header = $('.nav-tabs .nav-link[href="#' + target + '"]').html();

      $(elem).prepend(
        '<div class="tab-header" role="tab">' +
        ' <a ' + classContent +
        '   data-toggle="collapse"' +
        '   data-parent="' + parent + '"' +
        '   href="#' + target + '"' +
        ' >' +
          header +
        ' </a>' +
        '</div>'
      );
    });

    $('.tab-content').removeClass('big').addClass('small');
  } else if (window.innerWidth >= 768 && !$('.tab-content').hasClass('big')) {
    $('.tab-content .item').children(':last-child').unwrap();
    $('.tab-content .tab-header').remove();

    $('.tab-content').children().each(function(i, elem) {
      $(elem).children().attr('class', '').addClass(classBig);

      if (i === 0) {
        $(elem).children().addClass(activeBig);
      }
    });

    $('.tab-content').removeClass('small').addClass('big');
  }
}
