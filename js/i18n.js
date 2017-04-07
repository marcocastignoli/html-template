$.i18n.debug = false

$(document).ready(function ($) {
    var i18n = $.i18n({
        locale: 'en'
    })

    i18n.locale = "it"

    $.get("i18n/" + i18n.locale + ".json", function (lang) {
        i18n.load(lang, i18n.locale)
        $(document.body).i18n()
    })

})