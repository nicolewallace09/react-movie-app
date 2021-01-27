(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{27:function(e,t,a){},29:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),i=a.n(n),s=a(20),r=a.n(s),o=(a(27),a(13)),l=a(2),j=(a(28),a(29),a(6)),d=a.n(j),b=a(10),h=a(9),m=a(11),v=a.n(m),p=a(39),f=function(e){return Object(c.jsx)(c.Fragment,{children:e.movies&&e.movies.map((function(e){return Object(c.jsxs)("div",{className:"movie-container",children:[Object(c.jsx)("div",{className:"image-container d-flex justify-content-center",children:Object(c.jsx)("a",{href:"https://www.themoviedb.org/movie/".concat(e.id),alt:"link-to-site",children:Object(c.jsx)("img",{src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(e.poster_path),alt:"movie"})})}),Object(c.jsxs)("div",{className:"movie-info",children:[Object(c.jsx)("center",{children:Object(c.jsx)("p",{className:"movie-title font-weight-bold",children:e.title})}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"movie-date font-weight-bold",children:"Release Date:"})," ",Object(c.jsx)(v.a,{format:"MMMM D, YYYY",children:e.release_date})]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"movie-rating font-weight-bold",children:"Rating:"})," ",e.vote_average," ",Object(c.jsx)("span",{className:"movie-rating font-weight-bold",children:Object(c.jsx)(p.a,{})})]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"movie-overview font-weight-bold",children:"Overview:"})," ",e.overview]}),Object(c.jsx)("a",{href:"https://api.themoviedb.org/3/movie/".concat(e.id,"/reviews?api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US&page=1"),alt:"link-to-reviews",children:"View Reviews"})]})]},e.id)}))})},u=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("nav",{className:"navbar",children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsx)("p",{className:"navbar-brand",children:"Movie Search App"}),Object(c.jsx)("form",{className:"d-flex input-group-lg",children:Object(c.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Find a movie","aria-label":"Search",value:e.value,onChange:function(t){return e.setSearchValue(t.target.value)}})})]})})})},O=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],i=t[1],s=function(){var e=Object(b.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/now_playing?api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US&page=1",e.next=3,fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US&page=1");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,i(a.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(c.jsx)(c.Fragment,{children:a&&a.map((function(e){return Object(c.jsxs)("div",{className:"movie-container",children:[Object(c.jsx)("div",{className:"image-container d-flex justify-content-center",children:Object(c.jsx)("a",{href:"https://www.themoviedb.org/movie/".concat(e.id),alt:"link-to-site",children:Object(c.jsx)("img",{src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(e.poster_path),alt:"movie"})})}),Object(c.jsxs)("div",{className:"movie-info",children:[Object(c.jsx)("center",{children:Object(c.jsx)("p",{className:"movie-title font-weight-bold",children:e.title})}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"movie-date font-weight-bold",children:"Release Date:"})," ",Object(c.jsx)(v.a,{format:"MMMM D, YYYY",children:e.release_date})]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"movie-rating font-weight-bold",children:"Rating:"})," ",e.vote_average," ",Object(c.jsx)("span",{className:"movie-rating font-weight-bold",children:Object(c.jsx)(p.a,{})})]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"movie-overview font-weight-bold",children:"Overview:"})," ",e.overview]}),Object(c.jsx)("a",{href:"https://api.themoviedb.org/3/movie/".concat(e.id,"/reviews?api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US&page=1"),alt:"link-to-reviews",children:"View Reviews"})]})]},e.id)}))})},g=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],i=t[1],s=function(){var e=Object(b.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/popular?api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US&page=1",e.next=3,fetch("https://api.themoviedb.org/3/movie/popular?api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US&page=1");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,i(a.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(c.jsx)(c.Fragment,{children:a&&a.map((function(e){return Object(c.jsxs)("div",{className:"movie-container",children:[Object(c.jsx)("div",{className:"image-container d-flex justify-content-center",children:Object(c.jsx)("a",{href:"https://www.themoviedb.org/movie/".concat(e.id),alt:"link-to-site",children:Object(c.jsx)("img",{src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(e.poster_path),alt:"movie"})})}),Object(c.jsxs)("div",{className:"movie-info",children:[Object(c.jsx)("center",{children:Object(c.jsx)("p",{className:"movie-title font-weight-bold",children:e.title})}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"movie-date font-weight-bold",children:"Release Date:"})," ",Object(c.jsx)(v.a,{format:"MMMM D, YYYY",children:e.release_date})]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"movie-rating font-weight-bold",children:"Rating:"})," ",e.vote_average," ",Object(c.jsx)("span",{className:"movie-rating font-weight-bold",children:Object(c.jsx)(p.a,{})})]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"movie-overview font-weight-bold",children:"Overview:"})," ",e.overview]}),Object(c.jsx)("a",{href:"https://api.themoviedb.org/3/movie/".concat(e.id,"/reviews?api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US&page=1"),alt:"link-to-reviews",children:"View Reviews"})]})]},e.id)}))})},x=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],i=t[1],s=function(){var e=Object(b.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/top_rated?api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US&page=1",e.next=3,fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US&page=1");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,i(a.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){s()}),[]),Object(c.jsx)(c.Fragment,{children:a&&a.map((function(e){return Object(c.jsxs)("div",{className:"movie-container",children:[Object(c.jsx)("div",{className:"image-container d-flex justify-content-center",children:Object(c.jsx)("a",{href:"https://www.themoviedb.org/movie/".concat(e.id),alt:"link-to-site",children:Object(c.jsx)("img",{src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(e.poster_path),alt:"movie"})})}),Object(c.jsxs)("div",{className:"movie-info",children:[Object(c.jsx)("center",{children:Object(c.jsx)("p",{className:"movie-title font-weight-bold",children:e.title})}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"movie-date font-weight-bold",children:"Release Date:"})," ",Object(c.jsx)(v.a,{format:"MMMM D, YYYY",children:e.release_date})]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"movie-rating font-weight-bold",children:"Rating:"})," ",e.vote_average," ",Object(c.jsx)("span",{className:"movie-rating font-weight-bold",children:Object(c.jsx)(p.a,{})})]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"movie-overview font-weight-bold",children:"Overview:"})," ",e.overview]}),Object(c.jsx)("a",{href:"https://api.themoviedb.org/3/movie/".concat(e.id,"/reviews?api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US&page=1"),alt:"link-to-reviews",children:"View Reviews"}),Object(c.jsx)(o.b,{to:{pathname:"/movie/}",state:{fromDashboard:!0}},children:"Link"})]})]},e.id)}))})},w=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],i=t[1],s=Object(n.useState)(""),r=Object(h.a)(s,2),o=r[0],l=r[1],j=function(){var e=Object(b.a)(d.a.mark((function e(t){var a,c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.themoviedb.org/3/search/movie?api_key=7b642aed2489a8f6bfc80d04a2421e1c&language=en-US&query=".concat(t,"&page=1&include_adult=false"),e.next=3,fetch(a);case 3:return c=e.sent,e.next=6,c.json();case 6:(n=e.sent).results&&i(n.results);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){j(o)}),[o]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"app-container",children:Object(c.jsx)(u,{searchValue:o,setSearchValue:l})}),Object(c.jsxs)("div",{className:"container-fluid movie-app",children:[Object(c.jsx)("div",{className:"results",children:Object(c.jsx)("h1",{children:a.length?"Viewing ".concat(a.length,' results for "').concat(o,'"'):null})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(f,{movies:a})}),Object(c.jsx)("div",{className:"title-one",children:Object(c.jsx)("h1",{className:"now-playing",children:"Now Playing"})}),Object(c.jsx)("div",{className:"row d-flex mt-4 mb-4",children:Object(c.jsx)(O,{})}),Object(c.jsx)("div",{className:"title-two",children:Object(c.jsx)("h1",{className:"now-playing",children:"Popular"})}),Object(c.jsx)("div",{className:"row d-flex mt-4 mb-4",children:Object(c.jsx)(g,{})}),Object(c.jsx)("div",{className:"title-three",children:Object(c.jsx)("h1",{className:"now-playing",children:"Top Rated"})}),Object(c.jsx)("div",{className:"row d-flex mt-4 mb-4",children:Object(c.jsx)(x,{})})]})]})},N=function(){return Object(c.jsx)(o.a,{children:Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(l.c,{children:Object(c.jsx)(l.a,{exact:!0,path:"/",component:w})})})})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,40)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root")),_()}},[[38,1,2]]]);
//# sourceMappingURL=main.ec4e567e.chunk.js.map