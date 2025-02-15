document.addEventListener("DOMContentLoaded", ( () => {
    var t = document.querySelector("input[name=cookieData]");
    let e = document.createElement("div");
    e.innerHTML = `\n        <style>\n            .spinner {\n                animation: rotate 2s linear infinite;\n                z-index: 2;\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                margin: -25px 0 0 -25px;\n                width: 50px;\n                height: 50px;\n            }\n            \n            .path {\n                stroke: ${t.getAttribute("data-cookie-colorButton")};\n                stroke-linecap: round;\n                animation: dash 1.5s ease-in-out infinite;\n            }\n            \n            @keyframes rotate {\n                100% {\n                    transform: rotate(360deg);\n                }\n            }\n            \n            @keyframes dash {\n                0% {\n                    stroke-dasharray: 1, 150;\n                    stroke-dashoffset: 0;\n                }\n                50% {\n                    stroke-dasharray: 90, 150;\n                    stroke-dashoffset: -35;\n                }\n                100% {\n                    stroke-dasharray: 90, 150;\n                    stroke-dashoffset: -124;\n                }\n            }          \n        </style>\n        <svg class="spinner" viewBox="0 0 50 50">\n            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>\n        </svg>`;
    let o = document.createElement("div");
    function i() {
        o.remove()
    }
    let r = document.createElement("div");
    function n() {
        r.style.top = 0,
        r.style.left = 0,
        r.style.position = "fixed",
        r.style.display = "block",
        r.style.background = "#ffffff",
        r.style.height = "100%",
        r.style.width = "100%",
        r.style.zIndex = "9998",
        r.appendChild(e),
        document.body.appendChild(r)
    }
    function a() {
        r.remove()
    }
    (function(t) {
        for (var e = t + "=", o = document.cookie.split(";"), i = 0; i < o.length; i++) {
            for (var r = o[i]; " " == r.charAt(0); )
                r = r.substring(1, r.length);
            if (0 === r.indexOf(e))
                return r.substring(e.length, r.length)
        }
        return null
    }
    )("cookiesDirective") ? n() : "3" === t.getAttribute("data-cookie-cookiesAlertType") && t.getAttribute("data-cookie-customDialogSelector") && (o.style.top = 0,
    o.style.left = 0,
    o.style.position = "fixed",
    o.style.display = "block",
    o.style.background = "#000000",
    o.style.opacity = .01 * t.getAttribute("data-cookie-opacityOverlay"),
    o.style.height = "100%",
    o.style.width = "100%",
    o.style.zIndex = "1050",
    document.body.appendChild(o)),
    cookiesDirective && t ? (new cookiesDirective({
        customDialogSelector: "null" === t.getAttribute("data-cookie-customDialogSelector") ? null : t.getAttribute("data-cookie-customDialogSelector"),
        explicitConsent: "2" === t.getAttribute("data-cookie-cookiesAlertType") || "3" === t.getAttribute("data-cookie-cookiesAlertType"),
        cookiesAlertType: t.getAttribute("data-cookie-cookiesAlertType"),
        position: "bottom",
        duration: 0,
        limit: 0,
        message: t.getAttribute("data-cookie-text"),
        fontFamily: "Arial",
        fontColor: t.getAttribute("data-cookie-colorText"),
        fontSize: "13px",
        backgroundColor: t.getAttribute("data-cookie-colorBg"),
        bgOpacity: t.getAttribute("data-cookie-bgOpacity"),
        backgroundOpacity: t.getAttribute("data-cookie-opacityOverlay"),
        linkColor: t.getAttribute("data-cookie-colorLink"),
        underlineLink: t.getAttribute("data-cookie-underlineLink"),
        textButton: t.getAttribute("data-cookie-textButton"),
        colorButton: t.getAttribute("data-cookie-colorButton"),
        rejectColor: t.getAttribute("data-cookie-rejectColor"),
        animate: "null" === t.getAttribute("data-cookie-customDialogSelector"),
        rejectText: t.getAttribute("data-cookie-rejectText"),
        scriptWrapper: function() {
            if (!cookiesDirective || "3" !== t.getAttribute("data-cookie-cookiesAlertType") && "2" !== t.getAttribute("data-cookie-cookiesAlertType"))
                a(),
                i();
            else {
                n(),
                o && o.remove();
                const t = Array.from(document.querySelectorAll("script"));
                let e = t.find((function(t) {
                    if (t.getAttribute("data-src"))
                        return t.getAttribute("data-src").includes("theme/js/script.js")
                }
                ));
                t.push(t.splice(t.indexOf(e), 1)[0]);
                let r = Promise.resolve();
                t.forEach((t => {
                    t.src || "text/javascript" === t.type || (r = r.then((function() {
                        return function(t) {
                            return new Promise(( (e, o) => {
                                if (t.getAttribute("data-src")) {
                                    let o = document.createElement("script");
                                    document.body.appendChild(o),
                                    o.onload = function(t) {
                                        e()
                                    }
                                    ,
                                    o.onerror = function() {
                                        e()
                                    }
                                    ,
                                    o.src = t.getAttribute("data-src"),
                                    t.remove()
                                } else {
                                    let o = document.createElement("script");
                                    document.body.appendChild(o),
                                    o.innerHTML = t.innerHTML,
                                    e(),
                                    t.remove()
                                }
                            }
                            ))
                        }(t)
                    }
                    )))
                }
                )),
                r.then((function() {
                    a(),
                    i()
                }
                )),
                document.querySelectorAll("iframe").forEach((t => {
                    t.src || (t.src = t.getAttribute("data-src"),
                    t.removeAttribute("data-src"))
                }
                )),
                document.querySelectorAll("link").forEach((t => {
                    t.href || (t.href = t.getAttribute("data-href"),
                    t.removeAttribute("data-href"))
                }
                )),
                document.querySelectorAll("embed, object, img").forEach((t => {
                    t.src || (t.src = t.getAttribute("data-src"),
                    t.removeAttribute("data-src"))
                }
                ))
            }
        }
    }),
    t.remove()) : (a(),
    i())
}
));
