requirejs.config({
  baseUrl: "/assets/js",
  paths: {
    queue: "lib/queue",
    jquery: "lib/jquery",
    d3: "lib/d3",
    underscore: "lib/underscore",
    scrollMonitor: "lib/scrollMonitor",
    remodal: "lib/remodal",
    makeVideoPlayableInline: "lib/inline-video",
    zoomer: "components/zoomer",
    social: "components/social",
  },
  shim: { "lib/jquery.jscroll": ["jquery"] },
}),
  require([
    "jquery",
    "underscore",
    "queue",
    "zoomer",
    "scrollMonitor",
    "makeVideoPlayableInline",
    "remodal",
    "social",
  ], function (e, o, a, t, i, r, n, s) {
    function l(o) {
      var o = o || { top: 0, bottom: 0 };
      e(g).each(function (a, t) {
        var r = i.create(t, o);
        r.fullyEnterViewport(function (o) {
          var a = e(r.watchItem).find(".ambient-audio-controller"),
            t = (a.find(".ambient-audio-controller__state"), a.find("audio")),
            i = t[0];
          a.addClass("pulse"),
            setTimeout(function () {
              a.removeClass("pulse");
            }, 1e3),
            0 == i.paused
              ? t.animate({ volume: 0 }, 1e3, "swing", function () {
                  i.pause();
                })
              : (i.play(), t.animate({ volume: 0.5 }, 1e3));
        }),
          r.exitViewport(function (o) {
            var a = e(r.watchItem).find(".ambient-audio-controller"),
              t = (a.find(".ambient-audio-controller__state"), a.find("audio")),
              i = t[0];
            t.animate({ volume: 0 }, 1e3, "swing", function () {
              i.pause();
            });
          });
      });
    }
    function c() {
      var e =
        (a(1),
        [
          "broll-coffee",
          "broll-syria-st-view-from-jabal",
          "person-abbas",
          "broll-abbas-shophelpers",
          "broll-syria-st-hole",
          "person-zaynab-portrait",
          "broll-jabal-view-from-tabbaneh-lc",
          "person-ahmad-CU",
          "person-samir",
          "broll-syria-st-median-west-lc",
          "broll-syria-st-tanks",
          "person-ahmad-MED",
          "portrait-top-left",
          "portrait-top-middle",
          "portrait-top-right",
          "portrait-bottom-left",
          "portrait-bottom-middle",
          "portrait-bottom-right",
          "person-hana-2",
          "broll-syria-st-army-truck-lc",
          "broll-syria-st-chickens",
          "person-nisrine-2",
          "person-nisrine-family",
          "broll-shot-window",
          "person-alaa-mohanna",
          "broll-syria-st-business",
        ]);
      e.forEach(function (e) {
        u(e);
      });
    }
    function u(o, a) {
      var t =
          "http://icrc-syria-st-staging.s3-website-us-west-1.amazonaws.com/assets/videos/" +
          o +
          ".gif",
        i = new Image();
      (i.src = t),
        console.log("loadGif", o),
        (i.onload = function () {
          console.log("Image ready", o);
          var t = e('video.video-cinemagraph[poster*="' + o + '"]');
          if (t.length) {
            var i = t.attr("poster").replace(".jpg", ".gif");
            t.replaceWith('<img src="' + i + '" class="video-cinemagraph"/>');
          }
          var r = e('video.video-cinemagraph-cover[poster*="' + o + '"]');
          if (r.length) {
            var i = r.attr("poster").replace(".jpg", ".gif");
            r.replaceWith(
              '<img src="' + i + '" class="video-cinemagraph-cover"/>'
            );
          }
          a && a(null, o);
        });
    }
    function d(e, o) {
      e.muted
        ? ((e.muted = !1), o.removeClass("on off").addClass("on"))
        : ((e.muted = !0), o.removeClass("on off").addClass("off"));
    }
    function m() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry/.test(
        navigator.userAgent
      );
    }
    function f() {
      return p();
    }
    function p() {
      return m() && !b();
    }
    function b() {
      return (
        (navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS [8|9|10]_\d/i) &&
          navigator.userAgent.indexOf("Safari") > -1 &&
          navigator.userAgent.indexOf("CriOS") == -1) ||
        navigator.userAgent.indexOf("Twitter") > -1
      );
    }
    var h = document.querySelectorAll(".ambient-audio-controller"),
      v = e(h),
      g = document.querySelectorAll(".panel-audio"),
      y = (e(g), document.querySelectorAll(".video-cinemagraph")),
      w = e(y),
      C = e("#share-facebook"),
      q = e("#share-twitter");
    document.addEventListener("DOMContentLoaded", function (e) {
      console.log("isMobile, isLegacyMobile, isModernMobile", m(), f(), b());
    }),
      C.on("click", function () {
        s.facebook.share();
      }),
      q.on("click", function () {
        var o = e(this),
          a = o.data("share-text");
        s.twitter.share(a);
      }),
      e(".video-cinemagraph-cover").each(function (e, o) {
        r(this);
      }),
      e(y).each(function (e, o) {
        if (m()) o.setAttribute("autoplay", ""), r(this);
        else {
          var a = i.create(o);
          a.enterViewport(function (e) {
            a.watchItem.play();
          }),
            a.exitViewport(function (e) {
              a.watchItem.paused || a.watchItem.pause();
            });
        }
      }),
      m() || l(),
      m() ||
        v.on("click", function (o) {
          var a = e(this).find("audio")[0],
            t = e(this).find(".ambient-audio-controller__state");
          d(a, t);
        }),
      m &&
        (v.removeAttr("loop"),
        v.on("click", function (o) {
          var a = e(this).find("audio"),
            t = a[0],
            i = e(this).find(".ambient-audio-controller__state");
          t.paused
            ? (i.removeClass("on off").addClass("on"),
              t.play(),
              a.animate({ volume: 0.5 }, 1e3))
            : (i.removeClass("on off").addClass("off"),
              a.animate({ volume: 0 }, 1e3, "swing", function () {
                t.pause();
              }));
        })),
      m() &&
        w.on("touchstart", function (o) {
          var a = e(this)[0];
          a.paused && a.play();
        }),
      t(),
      m() && c();
  });
