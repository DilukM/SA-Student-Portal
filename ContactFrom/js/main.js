(function ($) {
  "use strict";

  /*==================================================================
    [ Validate ]*/
  var name = $('.validate-input input[name="name"]');
  var email = $('.validate-input input[name="email"]');
  var CINECID = $('.validate-input input[name="CINECID"]');
  var message = $('.validate-input textarea[name="message"]');

  $(".validate-form").on("submit", function () {
    var check = true;

    if ($(name).val().trim() == "") {
      showValidate(name);
      check = false;
    }

    if ($(CINECID).val().trim() == "") {
      showValidate(CINECID);
      check = false;
    }

    if (
      $(email)
        .val()
        .trim()
        .match(
          /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
        ) == null
    ) {
      showValidate(email);
      check = false;
    }

    if ($(message).val().trim() == "") {
      showValidate(message);
      check = false;
    }

    return check;
  });

  $(".validate-form .input1").each(function () {
    $(this).focus(function () {
      hideValidate(this);
    });
  });

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass("alert-validate");
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass("alert-validate");
  }
})(jQuery);
