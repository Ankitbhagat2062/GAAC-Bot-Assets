!function() {
    "use strict";
    let e = !1;
    function t(e) {
        if ("false" === e)
            return !1;
        var t = /(?:\?v=|\/embed\/|\.be\/)([-a-z0-9_]+)/i.exec(e) || /^([-a-z0-9_]+)$/i.exec(e);
        return !!t && t[1]
    }
    function r(e) {
        e.target.h.closest(".mbr-slider").classList.contains("in") && e.target.playVideo()
    }
    function a(e) {
        if (!e)
            return;
        return !!(!(e == document) && e.matches(".mbr-gallery"))
    }
    var l, i, n, o, s, d, c = "function" == typeof jQuery;
    if (c && (l = jQuery),
    !(i = c ? l("html").hasClass("is-builder") : document.querySelector("html").classList.contains("is-builder"))) {
        var u = document.createElement("script");
        u.src = "https://www.youtube.com/iframe_api";
        var m = document.getElementsByTagName("script")[0];
        m.parentNode.insertBefore(u, m);
        var f = [];
        document.querySelectorAll(".carousel-item.video-container > img").forEach((e => e.style.display = "none")),
        window.onYouTubeIframeAPIReady = function() {
            var e = e || {};
            e.YTAPIReady || (e.YTAPIReady = !0,
            document.dispatchEvent(new CustomEvent("YTAPIReady"))),
            document.querySelectorAll(".video-slide").forEach((function(e, a) {
                var l = document.createElement("div");
                l.setAttribute("id", "mbr-video-" + a),
                l.setAttribute("data-video-num", a),
                l.classList.add("mbr-background-video");
                var i = document.createElement("div");
                if (l.classList.add("item-overlay"),
                document.querySelectorAll(".video-container")[a].appendChild(l).appendChild(i),
                e.setAttribute("data-video-num", a),
                -1 !== e.getAttribute("data-video-url").indexOf("vimeo.com")) {
                    var n = {
                        id: e.getAttribute("data-video-url"),
                        width: "100%",
                        height: "100%",
                        loop: !0
                    };
                    (o = new Vimeo.Player("mbr-video-" + a,n)).playVideo = Vimeo.play
                } else
                    var o = new YT.Player("mbr-video-" + a,{
                        height: "100%",
                        width: "100%",
                        videoId: t(e.getAttribute("data-video-url")),
                        events: {
                            onReady: r
                        },
                        playerVars: {
                            rel: 0
                        }
                    });
                f.push(o)
            }
            ))
        }
    }
    function y(t) {
        var r, a, l, i = t ? t.target : document.body;
        e || "undefined" != typeof Masonry && (e = !0,
        (r = i,
        a = ".mbr-gallery",
        l = Array.from(r.querySelectorAll(a)),
        r.matches && r.matches(a) && l.splice(0, 0, r),
        l).forEach((function(e) {
            var t = e.querySelector(".mbr-gallery-row");
            t && imagesLoaded(t).on("progress", (function(e, r) {
                var a = new Masonry(t,{
                    itemSelector: ".mbr-gallery-item:not(.mbr-gallery-item__hided)",
                    percentPosition: !0,
                    horizontalOrder: !0
                });
                a.reloadItems(),
                t.addEventListener("filter", function() {
                    a.reloadItems(),
                    a.layout(),
                    window.dispatchEvent(new CustomEvent("update.parallax"))
                }
                .bind(this, t)),
                imagesLoaded(t).on("progress", (function() {
                    a.layout()
                }
                ))
            }
            ))
        }
        )),
        document.querySelectorAll(".row.mbr-masonry").forEach((e => {
            if (e.querySelectorAll("img").length) {
                imagesLoaded(e).on("progress", (function(t, r) {
                    var a = new Masonry(e,{});
                    a.reloadItems(),
                    imagesLoaded(e).on("progress", (function() {
                        a.layout()
                    }
                    ))
                }
                ))
            } else {
                var t = new Masonry(e,{});
                t.reloadItems(),
                t.layout()
            }
        }
        )),
        setTimeout(( () => {
            e = !1
        }
        ), 1500))
    }
    function v(e, t, r, a) {
        e.style.top = r + "px",
        e.style.height = t - 2 * r - 2 * a + "px"
    }
    function g(e, t, r, a, l) {
        var i = e.querySelector("img");
        i.complete && i.naturalWidth > 50 && i.naturalHeight > 50 ? p(i, e, t, r, a, l) : i.addEventListener("load", (function() {
            p(i, e, t, r, a, l)
        }
        ), {
            once: !0
        })
    }
    function p(e, t, r, a, l, i) {
        var n, o, s = e.naturalWidth, d = e.naturalHeight;
        a / r > s / d ? n = (r - 2 * i) * s / d : n = a - 2 * i;
        o = (r - (n = n >= s ? s : n) * d / s) / 2,
        e.style.width = parseInt(n) + "px",
        e.style.height = n * d / s + "px",
        t.style.top = o + l + "px",
        "flex" == getComputedStyle(t.parentElement, null).display && (t.parentElement.style.display = "block")
    }
    function h(e, t, r, a, l, i) {
        e.querySelector(".modal-dialog").querySelectorAll(".carousel-item").forEach((function(e) {
            (!i && !e.classList.contains("carousel-item-next") && !e.classList.contains("carousel-item-prev") || i && !e.classList.contains("active")) && (e.classList.contains("video-container") ? v(e, r, a, l) : g(e, r, t, a, l))
        }
        ))
    }
    function b() {
        var e = window.innerWidth - 0
          , t = window.innerHeight - 0;
        if (d) {
            var r, a = !1;
            d.querySelector(".modal-dialog").querySelector(".carousel-item.carousel-item-next") ? r = d.querySelector(".modal-dialog").querySelector(".carousel-item.carousel-item-next") : (r = d.querySelector(".modal-dialog").querySelector(".carousel-item.active"),
            a = !0),
            r.classList.contains("video-container") ? v(r, t, 0, 10) : g(r, t, e, 0, 10),
            clearTimeout(s),
            s = setTimeout(h, 200, d, e, t, 0, 10, a)
        }
    }
    c && l(document).on("add.cards", (function(e) {
        var t = l(e.target);
        if (!a(e.target))
            return;
        t.on("click", ".mbr-gallery-filter li", (function(e) {
            e.preventDefault();
            var r = l(this).closest("li");
            r.parent().find("li").removeClass("active"),
            r.addClass("active");
            var a = r.closest("section").find(".mbr-gallery-row")
              , i = l(this)[0].textContent.trim();
            t.find(".mbr-gallery-item").each((function(e, t) {
                var a = l(this)
                  , n = a.attr("data-tags").split(",").map((function(e) {
                    return e.trim()
                }
                ));
                -1 !== l.inArray(i, n) || r.hasClass("mbr-gallery-filter-all") ? (a.removeClass("mbr-gallery-item__hided"),
                a.css("left", "0")) : (a.addClass("mbr-gallery-item__hided"),
                a.css("left", "300px"))
            }
            )),
            a.closest(".mbr-gallery-row")[0].dispatchEvent(new CustomEvent("filter"))
        }
        ));
        let r = e.target.querySelector(".modal");
        r && r.addEventListener("show.bs.modal", (e => e.preventDefault()))
    }
    )),
    i && l(document).on("changeButtonColor.cards", (function(e) {
        var t = l(e.target);
        if (t.find(".mbr-gallery-filter").length > 0 && l(e.target).find(".mbr-gallery-filter").hasClass("gallery-filter-active")) {
            var r = (t.find(".mbr-gallery-filter .mbr-gallery-filter-all").find("a").attr("class") || "").replace(/(^|\s)active(\s|$)/, " ").trim();
            t.find(".mbr-gallery-filter ul li:not(.mbr-gallery-filter-all) a").attr("class", r)
        }
        y(e)
    }
    )),
    c && l(document).on("add.cards changeParameter.cards", (function(e) {
        var t = l(e.target)
          , r = [];
        if (a(e.target)) {
            if (t.find(".mbr-gallery-item").each((function(e) {
                (l(this).attr("data-tags") || "").trim().split(",").map((function(e) {
                    e = e.trim(),
                    -1 === l.inArray(e, r) && r.push(e)
                }
                ))
            }
            )),
            t.find(".mbr-gallery-filter").length > 0 && l(e.target).find(".mbr-gallery-filter").hasClass("gallery-filter-active")) {
                var i = "";
                t.find(".mbr-gallery-filter ul li:not(.mbr-gallery-filter-all)").remove();
                var n = t.find(".mbr-gallery-filter .mbr-gallery-filter-all").clone();
                n.find("a").removeClass("active"),
                r.map((function(e) {
                    n.find("a").length ? n.find("a").text(e) : n.text(e),
                    i += "<li>" + n.html() + "</li>"
                }
                )),
                n.remove(),
                t.find(".mbr-gallery-filter ul").append(i)
            }
            y(e)
        }
    }
    )),
    c && l(document).on("change.cards", (function(e) {
        y(e)
    }
    )),
    c && l(document).on("lazyload", (function(e) {
        y(e),
        l(window).scrollEnd((function() {
            y(e)
        }
        ), 250)
    }
    )),
    i || (n = y,
    "loading" != document.readyState ? n() : document.addEventListener("DOMContentLoaded", n)),
    i || document.addEventListener("change.cards", (function(e) {
        y(e)
    }
    )),
    i || document.addEventListener("add.cards", (function(e) {
        y(e)
    }
    )),
    i || document.addEventListener("changeParameter.cards", (function(e) {
        y(e)
    }
    )),
    document.querySelectorAll(".mbr-gallery-item").forEach((e => e.addEventListener("click", (e => e.stopPropagation()))));
    var E = document.querySelectorAll(".mbr-gallery");
    E.length && E.forEach((e => {
        e.querySelector(".mbr-gallery-filter") && function(e) {
            var t = e
              , r = e.querySelector(".mbr-gallery-filter-all")
              , l = [];
            if (t && a(t))
                if (t.querySelectorAll(".mbr-gallery-item").forEach((function(e) {
                    (e.getAttribute("data-tags") || "").trim().split(",").map((function(e) {
                        var t = e.trim();
                        -1 == l.indexOf(t) && l.push(t)
                    }
                    ))
                }
                )),
                t.querySelectorAll(".mbr-gallery-filter").length > 0 && t.querySelector(".mbr-gallery-filter").classList.contains("gallery-filter-active")) {
                    var i = [];
                    t.querySelectorAll(".mbr-gallery-filter > ul > li").forEach(( (e, t) => {
                        0 != t && e.removeChild(e.firstChild)
                    }
                    )),
                    l.map((function(e) {
                        var t = document.createElement("li")
                          , r = document.createElement("a");
                        r.classList.add("btn"),
                        r.classList.add("btn-md"),
                        r.classList.add("btn-primary-outline"),
                        r.classList.add("display-7"),
                        r.innerText = e,
                        t.appendChild(r),
                        i.push(t)
                    }
                    ));
                    var n = t.querySelector(".mbr-gallery-filter > ul");
                    n.appendChild(r),
                    i.forEach((e => n.appendChild(e))),
                    t.querySelectorAll(".mbr-gallery-filter > ul > li").forEach((e => {
                        e.addEventListener("click", (function(r) {
                            r.preventDefault();
                            var a = e.closest("li");
                            a.parentElement.querySelectorAll("li").forEach((e => e.classList.remove("active"))),
                            a.classList.add("active");
                            var l = a.closest("section").querySelector(".mbr-gallery-row")
                              , i = a.querySelector("a").innerHTML.trim();
                            t.querySelectorAll(".mbr-gallery-item").forEach((function(e) {
                                var t = e.getAttribute("data-tags").split(",").map((e => e.trim()));
                                -1 != t.indexOf(i) || a.classList.contains("mbr-gallery-filter-all") ? (e.style.left = "0",
                                e.classList.remove("mbr-gallery-item__hided")) : (e.classList.add("mbr-gallery-item__hided"),
                                e.style.left = "300px")
                            }
                            )),
                            l.closest(".mbr-gallery-row").dispatchEvent(new CustomEvent("filter"))
                        }
                        ))
                    }
                    ))
                } else
                    t.querySelector(".mbr-gallery-item__hided").classList.remove("mbr-gallery-item__hided"),
                    t.querySelector(".mbr-gallery-row").dispatchEvent(new CustomEvent("filter"))
        }(e),
        e.addEventListener("show.bs.modal", (function(e) {
            clearTimeout(o),
            o = setTimeout((function() {
                var t = e.relatedTarget.parentElement.getAttribute("data-video-num")
                  , r = e.target.querySelector(".carousel-item").querySelector(`.mbr-background-video[data-video-num="${t}"]`);
                if (r && r.closest(".carousel-item").classList.contains("active")) {
                    var a = f[+r.getAttribute("data-video-num")];
                    a.playVideo ? a.playVideo() : a.play()
                }
            }
            ), 500),
            d = e.target,
            b()
        }
        )),
        e.addEventListener("slide.bs.carousel", (function(e) {
            var t = e.target.querySelector(".carousel-item.active > .mbr-background-video");
            if (t) {
                var r = f[+t.getAttribute("data-video-num")];
                r.pauseVideo ? r.pauseVideo() : r.pause()
            }
        }
        )),
        e.addEventListener("hide.bs.modal", (function(e) {
            f.map((function(e) {
                e.pauseVideo ? e.pauseVideo() : e.pause()
            }
            )),
            d = null
        }
        ))
    }
    )),
    window.addEventListener("resize", b),
    window.addEventListener("load", b)
}();
