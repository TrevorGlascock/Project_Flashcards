(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{34:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(20),s=c.n(a),i=c(4),o=c(2),d=c.n(o),j=c(5),l=c(7),u=c(0);var b=function(){return Object(u.jsx)("header",{className:"jumbotron tg-bg-dark",children:Object(u.jsxs)("div",{className:"container title",children:[Object(u.jsx)("h1",{className:"display-4",children:"Glasscard Flashcards"}),Object(u.jsx)("p",{className:"lead",children:"A React Flashcard App Developed by Trevor Glascock."})]})})};var h=function(){return Object(u.jsx)("div",{className:"NotFound",children:Object(u.jsx)("h2",{children:"Not Found"})})},p=c(3);var O=function(){return Object(u.jsx)(p.b,{className:"",to:"/decks/new",children:Object(u.jsxs)("button",{className:"btn btn-info my-2 mb-4",children:[Object(u.jsx)("span",{className:"oi oi-plus pr-2",title:"plus","aria-hidden":"true"}),"Create Deck"]})})};var f=function(){return Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)("div",{className:"spinner-border text-primary text-center",role:"status",children:Object(u.jsx)("span",{className:"sr-only",children:"Now Loading..."})})})},x=c(22),m=["cards"],v="http://localhost:5000",k=new Headers;function y(e){e.cards;return Object(x.a)(e,m)}function N(e,t,c){return g.apply(this,arguments)}function g(){return(g=Object(j.a)(d.a.mark((function e(t,c,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,c);case 3:if(!((r=e.sent).status<200||r.status>399)){e.next=6;break}throw new Error("".concat(r.status," - ").concat(r.statusText));case 6:if(204!==r.status){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,r.json();case 10:return e.abrupt("return",e.sent);case 13:if(e.prev=13,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=18;break}throw console.error(e.t0.stack),e.t0;case 18:return e.abrupt("return",Promise.resolve(n));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function w(e){return D.apply(this,arguments)}function D(){return(D=Object(j.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(v,"/decks?_embed=cards"),e.next=3,N(c,{signal:t},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(j.a)(d.a.mark((function e(t,c){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(v,"/decks"),r={method:"POST",headers:k,body:JSON.stringify(y(t)),signal:c},e.next=4,N(n,r,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){return E.apply(this,arguments)}function E(){return(E=Object(j.a)(d.a.mark((function e(t,c){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(v,"/decks/").concat(t,"?_embed=cards"),e.next=3,N(n,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=Object(j.a)(d.a.mark((function e(t,c){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(v,"/decks/").concat(t.id,"?_embed=cards"),r={method:"PUT",headers:k,body:JSON.stringify(y(t)),signal:c},e.next=4,N(n,r,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){return S.apply(this,arguments)}function S(){return(S=Object(j.a)(d.a.mark((function e(t,c){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(v,"/decks/").concat(t),r={method:"DELETE",signal:c},e.next=4,N(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(j.a)(d.a.mark((function e(t,c,n){var r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(v,"/cards"),c.deckId=Number(t),a={method:"POST",headers:k,body:JSON.stringify(c),signal:n},e.next=5,N(r,a,c);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(){return(H=Object(j.a)(d.a.mark((function e(t,c){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(v,"/cards/").concat(t.id),r={method:"PUT",headers:k,body:JSON.stringify(t)},e.next=4,N(n,r,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t){return L.apply(this,arguments)}function L(){return(L=Object(j.a)(d.a.mark((function e(t,c){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(v,"/cards/").concat(t),r={method:"DELETE",signal:c},e.next=4,N(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}k.append("Content-Type","application/json");var M=function(e){var t=e.objToDelete,c=e.objType,n=e.setDecks,r=Object(i.f)();function a(e){w(e.signal).then(n).catch((function(e){if("AbortError"!==e.name)throw e}))}return Object(u.jsxs)("button",{className:"btn btn-danger",onClick:function(){return function(){if(window.confirm("Delete this ".concat(c,"?\n\nYou will not be able to recover it."))){var e=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"deck"===c?F(t.id).then((function(){return a(n)})).then((function(){return r.push("")})):J(t.id).then((function(){return a(n)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=new AbortController;return e(),function(){return n.abort()}}r.push("")}()},children:[Object(u.jsx)("span",{className:"oi oi-trash pr-1",title:"trash","aria-hidden":"true"}),"Delete"]})};var U=function(e){var t=e.path;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(p.b,{className:"mr-3",to:"".concat(t,"/study"),children:Object(u.jsxs)("button",{className:"btn btn-primary",children:[Object(u.jsx)("span",{className:"oi oi-book pr-1",title:"book","aria-hidden":"true"}),"Study"]})})})};var P=function(e){var t=e.path;return Object(u.jsx)(p.b,{className:"mr-3",to:t,children:Object(u.jsxs)("button",{className:"btn btn-secondary",children:[Object(u.jsx)("span",{className:"oi oi-eye pr-1",title:"eye","aria-hidden":"true"}),"View"]})})};var R=function(e){var t=e.deck,c=e.setDecks;return Object(u.jsxs)("div",{className:"list-group-item",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-10",children:Object(u.jsx)("h3",{className:"h3",children:t.name})}),Object(u.jsx)("div",{className:"col",children:Object(u.jsxs)("p",{className:"text-muted",children:[t.cards.length," cards"]})})]}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("p",{className:"",children:t.description})})}),Object(u.jsxs)("div",{className:"row justify-content-between px-3",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(P,{path:"/decks/".concat(t.id)}),Object(u.jsx)(U,{path:"/decks/".concat(t.id)})]}),Object(u.jsx)("div",{children:Object(u.jsx)(M,{objToDelete:t,objType:"deck",setDecks:c})})]})]})};var V=function(e){var t=e.decks,c=e.setDecks,r=Object(n.useState)([]),a=Object(l.a)(r,2),s=a[0],i=a[1];return Object(n.useEffect)((function(){i(t.map((function(e,t){return Object(u.jsx)(R,{deck:e,setDecks:c},t)})))}),[t,c]),(null===s||void 0===s?void 0:s.length)?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsx)("div",{className:"list-group",children:s})]}):Object(u.jsx)(f,{})};var B=function(e){var t=e.decks,c=e.setDecks;return Object(u.jsx)(V,{decks:t,setDecks:c})};var _=function(){var e=Object(i.h)().url.split("/").slice(0,3).join("/");return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(p.b,{className:"mr-3",to:"".concat(e,"/cards/new"),children:Object(u.jsxs)("button",{className:"btn btn-info",children:[Object(u.jsx)("span",{className:"oi oi-plus pr-2",title:"plus","aria-hidden":"true"}),"Add Cards"]})})})};var q=function(e){var t=e.path;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(p.b,{className:"mr-3",to:"".concat(t,"/edit"),children:Object(u.jsxs)("button",{className:"btn btn-secondary",children:[Object(u.jsx)("span",{className:"oi oi-pencil pr-1",title:"pencil","aria-hidden":"true"}),"Edit"]})})})};var G=function(e){var t=e.navTitles,c=Object(i.h)().url,n=c?c.split("/"):[],r=t?t.map((function(e,c){if(c===t.length-1)return Object(u.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:e},c);var r=n.slice(0,3).join("/");return Object(u.jsx)("li",{className:"breadcrumb-item",children:Object(u.jsx)(p.b,{to:r,children:e})},c)})):t;return Object(u.jsx)("nav",{"aria-label":"breadcrumb",children:Object(u.jsxs)("ol",{className:"breadcrumb",children:[Object(u.jsx)("li",{className:"breadcrumb-item",children:Object(u.jsxs)(p.b,{to:"",children:[Object(u.jsx)("span",{className:"oi oi-home pr-2",title:"Home","aria-hidden":"true"}),"Home"]})}),r]})})};var Y=function(e){var t=e.card,c=e.setDecks,n=Object(i.h)().url;return Object(u.jsxs)("div",{className:"list-group-item",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col",children:[Object(u.jsx)("h4",{className:"h4",children:"Front"}),Object(u.jsx)("p",{className:"",children:t.front})]}),Object(u.jsxs)("div",{className:"col",children:[Object(u.jsx)("h4",{className:"h4",children:"Back"}),Object(u.jsx)("p",{className:"",children:t.back})]})]}),Object(u.jsxs)("div",{className:"row justify-content-end",children:[Object(u.jsx)(q,{path:"".concat(n,"/cards/").concat(t.id)}),Object(u.jsx)(M,{objToDelete:t,objType:"card",setDecks:c})]})]})};var z=function(e){var t=e.cards,c=e.setDecks,r=Object(n.useState)([]),a=Object(l.a)(r,2),s=a[0],i=a[1];return Object(n.useEffect)((function(){i(null===t||void 0===t?void 0:t.map((function(e,t){return Object(u.jsx)(Y,{card:e,setDecks:c},t)})))}),[t,c]),Object(u.jsx)("div",{className:"list-group",children:s})};var K=function(e){var t=e.deck,c=e.setDecks,r=Object(i.h)().url,a=Object(n.useState)([]),s=Object(l.a)(a,2),o=s[0],d=s[1];return Object(n.useEffect)((function(){d(null===t||void 0===t?void 0:t.cards)}),[t]),(null===t||void 0===t?void 0:t.name)&&o?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(G,{navTitles:[t.name]}),Object(u.jsx)("h2",{className:"h2",children:t.name}),Object(u.jsx)("p",{className:"tg-text-light",children:t.description}),Object(u.jsxs)("div",{className:"row justify-content-between mb-5 px-3",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(q,{path:r}),Object(u.jsx)(U,{path:r}),Object(u.jsx)(_,{})]}),Object(u.jsx)("div",{children:Object(u.jsx)(M,{objToDelete:t,objType:"deck",setDecks:c})})]}),Object(u.jsx)("h2",{className:"h2",children:"Cards"}),Object(u.jsx)(z,{cards:o,setDecks:c})]}):Object(u.jsx)(f,{})};var Q=function(e){var t=e.cards,c=Object(i.h)().url;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Not enough cards."}),Object(u.jsxs)("p",{children:["You need at least 3 cards to study. there are ",t.length," cards in this deck."]}),Object(u.jsx)(_,{path:c})]})},W=c(11);var X=function(e){var t=e.cards,c=Object(i.f)(),r={index:0,flipped:!1,freshView:!0},a=Object(n.useState)(r),s=Object(l.a)(a,2),o=s[0],d=s[1];return Object(u.jsx)("div",{className:"card tg-bg-light",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("h2",{className:"card-title",children:["Card ",o.index+1," of ",t.length]}),Object(u.jsx)("p",{className:"card-text",children:o.flipped?t[o.index].back:t[o.index].front}),Object(u.jsx)("button",{className:"btn btn-secondary mr-3",onClick:function(){d(Object(W.a)(Object(W.a)({},o),{},{flipped:!o.flipped,freshView:!1}))},children:"Flip"}),o.freshView?null:Object(u.jsx)("button",{className:"btn btn-primary mr-3",onClick:function(){o.index<t.length-1?d({index:o.index+1,flipped:!1,freshView:!0}):window.confirm('Restart cards?\n\n Click "cancel" to return to the home page')?d(r):c.push("")},children:"Next"})]})})};var Z=function(){var e=Object(i.g)().deckId,t=Object(n.useState)({}),c=Object(l.a)(t,2),r=c[0],a=c[1],s=r.cards;return Object(n.useEffect)((function(){var t=new AbortController;function c(){return(c=Object(j.a)(d.a.mark((function c(){return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:C(e,t.signal).then(a).catch((function(e){if("AbortError"!==e.name)throw e}));case 1:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return s||function(){c.apply(this,arguments)}(),function(){return t.abort()}}),[e,s]),s?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(G,{navTitles:[null===r||void 0===r?void 0:r.name,"Study"]}),Object(u.jsxs)("h1",{className:"h1",children:["Study: ",null===r||void 0===r?void 0:r.name]}),s.length<3?Object(u.jsx)(Q,{cards:s}):Object(u.jsx)(X,{cards:s})]}):Object(u.jsx)(f,{})},$=c(14);var ee=function(e){var t=e.inputType,c=e.name,n=e.value,r=e.placeholder,a=e.formChangeHandler,s=c[0].toUpperCase().concat(c.slice(1));return Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{className:"tg-text-light",htmlFor:c,children:s}),"textarea"===t?Object(u.jsx)("textarea",{className:"form-control tg-bg-light",id:c,name:c,rows:"4",placeholder:r,value:n,onChange:a,required:!0}):Object(u.jsx)("input",{className:"form-control tg-bg-light",id:c,name:c,type:t,placeholder:r,value:n,onChange:a,required:!0})]})};var te=function(e){var t=e.objToModify,c=e.objType,r=e.modifyType,a=e.deckName,s=e.decks,o=e.setDecks,d=Object(i.f)(),j=Object(i.h)(),b=j.url,h=j.params.deckId,p=b.split("/").slice(0,3).join("/"),O=a?"".concat(a,": "):null,f="Add"===r?"Done":"Cancel",x="Add"===r?"Save":"Submit",m="Deck"===c?"Deck Name":"Front side of card",v="Deck"===c?"Brief description of the deck":"Back side of card",k="Add"===r?"Deck"===c?{name:"",description:""}:{front:"",back:""}:"Deck"===c?{name:t.name,description:t.description}:{front:t.front,back:t.back},y=Object(n.useState)(k),N=Object(l.a)(y,2),g=N[0],D=N[1],C=function(e){var t=e.target,c=t.name,n=t.value;D(Object(W.a)(Object(W.a)({},g),{},Object($.a)({},c,n)))};function E(e){w(e).then(o).catch((function(e){if("AbortError"!==e.name)throw e})).then((function(){if(D(k),"Card"===c&&"Add"===r)return null;h?d.push(p):d.push(p.split("/").slice(0,2).join("/").concat("/".concat(s[s.length-1].id+1)))}))}return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h1",{className:"h1",children:[O,r," ",c]}),Object(u.jsxs)("form",{onSubmit:"Add"===r?function(e){e.preventDefault();var t=new AbortController;"Deck"===c?function(e){var t=e.signal;(function(e,t){return T.apply(this,arguments)})({name:g.name,description:g.description},t).then((function(){return E(t)}))}(t):function(e){var t=e.signal,c={front:g.front,back:g.back};(function(e,t,c){return I.apply(this,arguments)})(h,c,t).then((function(){return E(t)}))}(t)}:function(e){e.preventDefault();var n=new AbortController;"Deck"===c?function(e){var c=e.signal;(function(e,t){return A.apply(this,arguments)})(Object(W.a)(Object(W.a)({},t),{},{name:g.name,description:g.description}),c).then((function(){return E(c)}))}(n):function(e){var c=e.signal;(function(e,t){return H.apply(this,arguments)})(Object(W.a)(Object(W.a)({},t),{},{front:g.front,back:g.back}),c).then((function(){return E(c)}))}(n)},children:[Object(u.jsx)(ee,{inputType:"Deck"===c?"text":"textarea",name:"Deck"===c?"name":"front",placeholder:m,value:"Deck"===c?g.name:g.front,formChangeHandler:C}),Object(u.jsx)(ee,{inputType:"textarea",name:"Deck"===c?"description":"back",placeholder:v,value:"Deck"===c?g.description:g.back,formChangeHandler:C}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"btn btn-secondary mr-2",type:"button",onClick:function(){D(k),"Deck"===c&&"Add"===r?d.push(""):d.push(p)},children:f}),Object(u.jsx)("button",{className:"btn btn-primary mr-2",type:"submit",children:x})]})]})]})};var ce=function(e){var t=e.deck,c=e.setDecks;return(null===t||void 0===t?void 0:t.id)?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(G,{navTitles:[t.name,"Edit Deck"]}),Object(u.jsx)(te,{objToModify:t,objType:"Deck",modifyType:"Edit",setDecks:c})]}):Object(u.jsx)(f,{})};var ne=function(e){var t=e.deck,c=e.setDecks;return(null===t||void 0===t?void 0:t.id)?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(G,{navTitles:[t.name,"Add Card"]}),Object(u.jsx)(te,{objToModify:{},objType:"Card",modifyType:"Add",deckName:t.name,setDecks:c})]}):Object(u.jsx)(f,{})};var re=function(e){var t,c=e.deck,n=e.setDecks,r=Object(i.g)().cardId,a=null===c||void 0===c||null===(t=c.cards)||void 0===t?void 0:t.find((function(e){return e.id===Number(r)}));return a?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(G,{navTitles:[c.name,"Edit Card ".concat(a.id)]}),Object(u.jsx)(te,{objToModify:a,objType:"Card",modifyType:"Edit",setDecks:n})]}):Object(u.jsx)(f,{})};var ae=function(e){var t=e.deck,c=e.setDecks,n=Object(i.h)().path;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"".concat(n,"/:cardId/edit"),children:Object(u.jsx)(re,{deck:t,setDecks:c})}),Object(u.jsx)(i.a,{path:"".concat(n,"/new"),children:Object(u.jsx)(ne,{deck:t,setDecks:c})}),Object(u.jsx)(i.a,{children:Object(u.jsx)("h1",{children:"Not a valid URL!"})})]})})};var se=function(e){var t=e.decks,c=e.setDecks,r=Object(i.h)(),a=r.path,s=r.params.deckId,o=Object(n.useState)([]),b=Object(l.a)(o,2),h=b[0],p=b[1];return Object(n.useEffect)((function(){var e=new AbortController;function t(){return(t=Object(j.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:C(s,e.signal).then(p).catch((function(e){if("AbortError"!==e.name)throw e}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){return e.abort()}}),[s,t]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"".concat(a,"/study"),children:Object(u.jsx)(Z,{})}),Object(u.jsx)(i.a,{path:"".concat(a,"/edit"),children:Object(u.jsx)(ce,{deck:h,setDecks:c})}),Object(u.jsx)(i.a,{path:"".concat(a,"/cards"),children:Object(u.jsx)(ae,{deck:h,setDecks:c})}),Object(u.jsx)(i.a,{exact:!0,path:a,children:Object(u.jsx)(K,{deck:h,setDecks:c})}),Object(u.jsx)(i.a,{children:Object(u.jsx)("h1",{children:"Not a valid URL!"})})]})})};var ie=function(e){var t=e.decks,c=e.setDecks;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(G,{navTitles:["Create Deck"]}),Object(u.jsx)(te,{objToModify:{},objType:"Deck",modifyType:"Add",decks:t,setDecks:c})]})};var oe=function(e){var t=e.decks,c=e.setDecks,n=Object(i.h)().url;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"".concat(n,"/new"),children:Object(u.jsx)(ie,{decks:t,setDecks:c})}),Object(u.jsx)(i.a,{path:"".concat(n,"/:deckId"),children:Object(u.jsx)(se,{decks:t,setDecks:c})}),Object(u.jsx)(i.a,{children:Object(u.jsx)("h1",{children:"Not a valid URL!"})})]})})};var de=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){var e=new AbortController;function t(){return(t=Object(j.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:w(e.signal).then(r).catch((function(e){if("AbortError"!==e.name)throw e}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){return e.abort()}}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{exact:!0,path:"/",children:Object(u.jsx)(B,{decks:c,setDecks:r})}),Object(u.jsx)(i.a,{path:"/decks/",children:Object(u.jsx)(oe,{decks:c,setDecks:r})}),Object(u.jsx)(h,{})]})})]})};var je=function(){return Object(u.jsx)("div",{className:"app-routes",children:Object(u.jsx)(i.c,{children:Object(u.jsx)(i.a,{path:"/",children:Object(u.jsx)(de,{})})})})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(p.a,{children:Object(u.jsx)(je,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.67ca6abf.chunk.js.map