$(function () {
    $(".password-toggle").on("click", function () {
        const password = $("#password");
        const icon = $(this).find("i");
        if (password.attr("type") === "password") {
            password.attr("type", "text");
            icon.removeClass("bi-eye");
            icon.addClass("bi-eye-slash");
        } else {
            password.attr("type", "password");
            icon.removeClass("bi-eye-slash");
            icon.addClass("bi-eye");
        }
    });
});