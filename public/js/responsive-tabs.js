var activeSmall = 'show';
var classSmall = 'collapse';
var activeBig = 'active';
var classBig = 'tab-pane';

$(window).on('resize', responsiveTabs);

function responsiveTabs() {
  if ((window.innerWidth < 768 || $('.crime-detail').hasClass('layout-report')) 
    && !$('#crime-detail-infos.tab-content').hasClass('small')) {
    var parent = $('#crime-detail-infos.tab-content').first().attr('id');
    var showAll = $('.crime-detail').hasClass('layout-report');

    $('#crime-detail-infos.tab-content').children().each(function(i, elem) {
      $(elem).wrap('<div class="item"></div>');

      elem = $(elem).parent();

      var classContent = 'class="collapsed"';
      if (i === 0 || showAll) {
        classContent = '';
      }

      $(elem).children().attr('class', '').addClass(classSmall);
      if (i === 0 || showAll) {
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

    $('#crime-detail-infos.tab-content').removeClass('big').addClass('small');
  } else if (window.innerWidth >= 768 && !$('#crime-detail-infos.tab-content').hasClass('big')) {
    $('#crime-detail-infos.tab-content .item').children(':last-child').unwrap();
    $('#crime-detail-infos.tab-content .tab-header').remove();

    $('#crime-detail-infos.tab-content').children().each(function(i, elem) {
      $(elem).children().attr('class', '').addClass(classBig);

      if (i === 0) {
        $(elem).children().addClass(activeBig);
      }
    });

    $('#crime-detail-infos.tab-content').removeClass('small').addClass('big');
  }
}
