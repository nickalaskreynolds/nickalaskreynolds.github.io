(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{187:function(t,n,e){"use strict";var o=e(445),r=e(222),l=e(223),c=e(136),d=e(224),f=e(57),h=e(447),m=e(444),w=(e(72),{name:"HeadDrawerLeft",components:{},data:function(){return{bg:"transparent",clipped:!0,drawer:null,fixed:!0,coords:[{icon:"IconsGithub",href:"https://github.com/nickalaskreynolds"},{icon:"IconsIg",href:"https://instagram.com/nickstarform"},{icon:"IconsTwitter",href:"https://twitter.com/AstroTranRe"},{icon:"IconsOrcid",href:"https://orcid.org/0000-0002-9239-6422"}],items:[{icon:"chevron-",title:"",to:"",button:!0},{icon:"mdi-home",title:"Hello",to:"/"},{icon:"mdi-pencil",title:"About Me",to:"/about"},{icon:"mdi-laptop",title:"Projects",to:"/projects"},{icon:"mdi-briefcase",title:"CV/Resume",to:"/cv"},{icon:"mdi-chart-bubble",title:"Contact",to:"/contact"}],miniVariant:!0,right:!0,rightDrawer:!1,title:"Nickalas Reynolds Tran"}},mounted:function(){var t=this;window.onscroll=function(){t.changeColor()}},methods:{changeColor:function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?this.bg="black":this.bg="transparent"}}}),v=(e(415),e(46)),component=Object(v.a)(w,(function(){var t=this,n=t._self._c;return n("div",[n(m.a,{attrs:{"v-if":!t.$vuetify.breakpoint.mdAndUp,color:t.$vuetify.breakpoint.mdAndUp?"transparent":"",elevation:t.$vuetify.breakpoint.mdAndUp?"0":"9",absolute:"",left:""}},[n(r.a,{staticClass:"hidden-md-and-up",attrs:{"v-if":!t.$vuetify.breakpoint.mdAndUp,color:"--v-highlight-base"},on:{click:function(n){n.stopPropagation(),t.drawer=!t.drawer}}},[t._v("mdi-menu")])],1),t._v(" "),n(h.a,{staticClass:"navbar cardColor",attrs:{"expand-on-hover":"",dark:"",left:"",app:"",permanent:t.$vuetify.breakpoint.mdAndUp,width:"20%",elevation:"9"},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[n(l.a,{attrs:{nav:"",dense:""}},[n(f.a,[n(f.c,{staticClass:"text-h6 splash"},[t._v("Nick Reynolds Tran")])],1),t._v(" "),n(o.a),t._v(" "),n("div",{staticClass:"d-flex"},[n(d.a,[n("IconsSun")],1),t._v(" "),n(f.a,[t._v("PhD Astrophysics ")])],1),t._v(" "),n("div",{staticClass:"d-flex"},[n(d.a,[n(f.b,[n(r.a,[t._v("mdi-map-marker")])],1)],1),t._v(" "),n(f.a,[n("a",{staticClass:"highlight",attrs:{href:"https://www.google.com/maps/place/Oklahoma+City",target:"_blank"}},[t._v("OKC, USA")])])],1)],1),t._v(" "),n(o.a),t._v(" "),n(l.a,{attrs:{nav:"",dense:""}},t._l(t.coords,(function(e,i){return n(c.a,{key:i,attrs:{exact:"",dense:""}},[n(f.a,[e.href.startsWith("https")?n("a",{attrs:{href:e.href,target:"_blank"}},[n(e.icon,{tag:"component",attrs:{width:"24"}})],1):n("nuxt-link",{attrs:{to:"contact"}},[n(r.a,{attrs:{width:"24"}},[t._v("mdi-email")])],1)],1)],1)})),1),t._v(" "),n(o.a),t._v(" "),n(l.a,{attrs:{nav:"",dense:""}},t._l(t.items,(function(e,i){return n(c.a,{key:i,staticClass:"d-flex",attrs:{to:e.to,exact:"",dense:"",target:e.to.startsWith("https")?"_blank":"",href:e.to.startsWith("https")?e.to:""}},[n(d.a,[n(r.a,[t._v(t._s(e.icon))])],1),t._v(" "),n(f.a,[n(f.c,[t._v(t._s(e.title))])],1)],1)})),1),t._v(" "),n(o.a),t._v(" "),n("div",{staticClass:"footer flex"},[n("span",{staticClass:"flex-center"},[t._v("\n        <> w/ ♡ in "),n("IconsVuejs",{staticStyle:{"min-width":"20px"},attrs:{width:"1em"}})],1),t._v(" "),n("span",{staticClass:"flex-center"},[t._v("©"+t._s((new Date).getFullYear()))])])],1)],1)}),[],!1,null,"053ff78b",null);n.a=component.exports;installComponents(component,{IconsSun:e(432).default,IconsVuejs:e(433).default})},229:function(t,n,e){"use strict";var o=e(2),r=e(82),l=e(20),c=(e(9),e(56),e(24),e(66),e(4),e(7),e(32),e(41),e(13),e(10),e(18),e(19),["name","content"]);function d(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function f(t,n){var title=t.title,e=t.description,f=t.url,image=t.image,h=t.keywords,meta=[];title&&meta.push({name:"og:title",content:title},{name:"twitter:title",content:title}),e&&meta.push({name:"description",content:e},{name:"og:description",content:e},{name:"twitter:description",content:e}),f&&meta.push({name:"og:url",content:f}),image&&meta.push({name:"og:image",content:image},{name:"twitter:image",content:image});var m=["python","astronomy","radio astronomy","protostars","developer","portfolio","docker"];return h?meta.push({name:"keywords",content:"".concat("object"===Object(l.a)(h)?h.join(","):h,", ").concat(m.join(", "))}):meta.push({name:"keywords",content:m.join(", ")}),"object"===Object(l.a)(n)&&n.forEach((function(t){var n=t.name,content=t.content,e=Object(r.a)(t,c);meta.push(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(n){Object(o.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({name:n,content:content},e))})),0===meta.length?[]:meta.map((function(t){return t.name&&!t.property&&(t.property=t.name),!t.name&&!t.property||t.hid||(t.hid=t.name||t.property),t}))}n.a=function(t,n){n("prepareMeta",f)}},282:function(t,n,e){var content=e(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("df3aa008",content,!0,{sourceMap:!1})},291:function(t,n,e){var content=e(416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("2098af62",content,!0,{sourceMap:!1})},292:function(t,n,e){var content=e(418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("5d4242ac",content,!0,{sourceMap:!1})},305:function(t,n,e){"use strict";var o=e(443),r={name:"DefaultLayout",components:{HeadDrawerLeft:e(187).a}},l=(e(417),e(46)),component=Object(l.a)(r,(function(){var t=this._self._c;return t(o.a,{attrs:{dark:""}},[t("div",{staticClass:"flex flex-container flex-center bg-img html"},[t("HeadDrawerLeft"),this._v(" "),t("div",{staticClass:"flex pad"},[t("Nuxt")],1)],1)])}),[],!1,null,null,null);n.a=component.exports},310:function(t,n,e){t.exports=e.p+"img/intro-bg.4ebf119.jpg"},311:function(t,n,e){e(312),t.exports=e(313)},357:function(t,n,e){"use strict";e(282)},358:function(t,n,e){var o=e(29)((function(i){return i[1]}));o.push([t.i,".h1[data-v-288f9487]{font-size:20px}",""]),o.locals={},t.exports=o},361:function(t,n,e){var content=e(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("1992bd8b",content,!0,{sourceMap:!1})},362:function(t,n,e){var o=e(29)((function(i){return i[1]}));o.push([t.i,'/*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}.static{position:static;}.fixed{position:fixed;}.absolute{position:absolute;}.relative{position:relative;}.mt-16{margin-top:4rem;}.mt-8{margin-top:2rem;}.mb-6{margin-bottom:1.5rem;}.mb-2{margin-bottom:0.5rem;}.block{display:block;}.flex{display:flex;}.grid{display:grid;}.hidden{display:none;}.w-full{width:100%;}.w-fit{width:-moz-fit-content;width:fit-content;}.transform{transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.flex-wrap{flex-wrap:wrap;}.justify-center{justify-content:center;}.rounded{border-radius:0.25rem;}.border{border-width:1px;}.p-4{padding:1rem;}.py-3{padding-top:0.75rem;padding-bottom:0.75rem;}.px-8{padding-left:2rem;padding-right:2rem;}.py-4{padding-top:1rem;padding-bottom:1rem;}.text-center{text-align:center;}.text-right{text-align:right;}.font-semibold{font-weight:600;}.text-primary{--tw-text-opacity:1;color:rgb(76 29 149 / var(--tw-text-opacity));}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81 / var(--tw-text-opacity));}.underline{text-decoration-line:underline;}.shadow{--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.outline-none{outline:2px solid transparent;outline-offset:2px;}.ring{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);}.ease-out{transition-timing-function:cubic-bezier(0, 0, 0.2, 1);}.focus\\:border-primary:focus{--tw-border-opacity:1;border-color:rgb(76 29 149 / var(--tw-border-opacity));}.dark .dark\\:bg-gray-800{--tw-bg-opacity:1;background-color:rgb(31 41 55 / var(--tw-bg-opacity));}.dark .dark\\:text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235 / var(--tw-text-opacity));}.dark .dark\\:focus\\:border-gray-500:focus{--tw-border-opacity:1;border-color:rgb(107 114 128 / var(--tw-border-opacity));}@media (min-width: 768px){.md\\:mt-24{margin-top:6rem;}}',""]),o.locals={},t.exports=o},363:function(t,n,e){var content=e(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("34b4be7d",content,!0,{sourceMap:!1})},364:function(t,n,e){var o=e(29)((function(i){return i[1]}));o.push([t.i,"",""]),o.locals={},t.exports=o},365:function(t,n,e){var content=e(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(30).default)("1dad10db",content,!0,{sourceMap:!1})},366:function(t,n,e){var o=e(29)((function(i){return i[1]}));o.push([t.i,"",""]),o.locals={},t.exports=o},415:function(t,n,e){"use strict";e(291)},416:function(t,n,e){var o=e(29)((function(i){return i[1]}));o.push([t.i,".navpad[data-v-053ff78b]{margin-left:0;padding-left:50%}.navpad_reset>.navpad[data-v-053ff78b]{padding-left:0}.splash[data-v-053ff78b]{color:#9a4ef9}.highlight[data-v-053ff78b]{color:#8acb88}.footer[data-v-053ff78b]{position:fixed;bottom:0}.navbar[data-v-053ff78b]{display:block;background-color:rgba(60,60,60,.8)}@media only screen and (max-width:480px){.navbar[data-v-053ff78b]{display:block!important}}",""]),o.locals={},t.exports=o},417:function(t,n,e){"use strict";e(292)},418:function(t,n,e){var o=e(29),r=e(309),l=e(310),c=o((function(i){return i[1]})),d=r(l);c.push([t.i,'.html{font-family:"Montserrat";font-size:5;font-size-adjust:.5;min-width:68.75/3rem}.pad{width:90%;margin:auto}.cardColor{background-color:rgba(60,60,60,.8)}.layout{padding:50px}h1{font-size:xx-large}h1,h2{line-height:1em;letter-spacing:-.03em;margin:0}h2{font-size:medium}h1 h2 h3 body span a{color:#fff}.bg-img{background-attachment:fixed;background-image:url('+d+");position:relative;background-position:50%;background-repeat:no-repeat;background-size:cover;min-width:10%}.flex-center{display:flex;align-items:center;justify-content:center}.flex-right{display:flex;justify-content:right}.flex-left{display:flex;justify-content:left}*,:after,:before{padding:0;margin:0;box-sizing:inherit}",""]),c.locals={},t.exports=c},432:function(t,n,e){"use strict";e.r(n);var o=e(46),component=Object(o.a)({},(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}})])}),[],!1,null,null,null);n.default=component.exports},433:function(t,n,e){"use strict";e.r(n);var o=e(46),component=Object(o.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"iconify iconify--mdi",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"32",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M2 3h3.5L12 15l6.5-12H22L12 21L2 3m4.5 0h3L12 7.58L14.5 3h3L12 13.08L6.5 3z",fill:"currentColor"}})])}),[],!1,null,null,null);n.default=component.exports},91:function(t,n,e){"use strict";var o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(e(357),e(46)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"flex flex-center pad"},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"288f9487",null);n.a=component.exports}},[[311,32,2,33]]]);