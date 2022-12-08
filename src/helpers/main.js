import $ from 'jquery'

export const func = function () {
  $('.form-holder').delegate("input", "focus", function () {
    $('.form-holder').removeClass("active");
    $(this).parent().addClass("active");
  })
}