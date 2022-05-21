$(() => {
  const pagetop = $('.btn-to-top');
  pagetop.click(() => {
    $('body, html').animate({
        scrollTop: 0
    }, 500);
    return false;
  });
});