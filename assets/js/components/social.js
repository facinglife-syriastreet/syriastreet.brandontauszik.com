define("social", ["jquery"], function (t) {
  var e = {};
  return (
    (e.facebook = {
      share: function (t) {
        var t = t || window.location.href,
          e = window.open(
            "https://www.facebook.com/sharer/sharer.php?u=" + t,
            "popupwindow",
            "scrollbars=yes,width=800,height=400"
          );
        e.focus();
      },
      feed: function () {
        FB.ui(
          {
            method: "feed",
            name: "",
            link: "",
            picture: "",
            caption: "",
            description: "",
          },
          function (t) {
            t && t.post_id;
          }
        );
      },
    }),
    (e.twitter = {
      share: function (t) {
        var e = window.open(
          "https://twitter.com/intent/tweet?text=" + t,
          "popupwindow",
          "scrollbars=yes,width=800,height=400"
        );
        e.focus();
      },
    }),
    e
  );
});
