import{k as y,l as j,m as S,o as t,c as s,b as r,w as m,t as u,T as _,a as n,F as p,h as x,u as f,d as g,q as h,j as b}from"./CcF5h4LO.js";import{u as k,_ as I}from"./BtkG-z41.js";import{_ as v}from"./DiQy52Sm.js";import{u as $,_ as C}from"./D9kcKd63.js";import{u as E}from"./M9PK4gGO.js";import"./D_v4DApm.js";import"./BQkc-AXV.js";const N=window.setInterval,U={class:"flex flex-col items-center justify-center tracking-wider md:tracking-widest gap-4 min-h-screen"},V={__name:"Carousal",setup(d){const e=y([{title:"Hello! I'm",content:"Islam Samy"},{title:"I'm",content:"A Software Engineer"}]),o=j(0),l=()=>{o.value=(o.value+1)%e.length};return S(()=>{N(l,4e3)}),(i,c)=>(t(),s("div",U,[r(_,{name:"slide-fade",mode:"out-in"},{default:m(()=>[(t(),s("span",{key:o.value+"-title",class:"uppercase text-gray-400 md:text-xl"},u(e[o.value].title),1))]),_:1}),r(_,{name:"slide-fade",mode:"out-in"},{default:m(()=>[(t(),s("h2",{key:o.value+"-content",class:"uppercase text-xl md:text-5xl text-white font-bold"},u(e[o.value].content),1))]),_:1})]))}},H=n("div",{class:"flex flex-col items-center justify-center min-h-32 md:min-h-48 gap-4"},[n("span",{class:"tracking-widest uppercase text-gray-400 text-lg md:text-xl"},"What I do"),n("h2",{class:"text-2xl md:text-5xl text-white font-bold"},"Services")],-1),P={class:"grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center items-center justify-center"},z={class:"flex items-center justify-center min-h-32 md:min-h-48 gap-4"},B={__name:"Services",setup(d){const{homeServices:e}=k();return(o,l)=>{const i=I,c=v;return t(),s(p,null,[H,n("div",P,[(t(!0),s(p,null,x(f(e),a=>(t(),h(i,{key:a.title,service:a},null,8,["service"]))),128))]),n("div",z,[r(c,{to:"/services",class:"text-white font-bold text-xl hover:text-emerald-500 transition-all"},{default:m(()=>[g("And more ...")]),_:1})])],64)}}},L=n("div",{class:"flex flex-col items-center justify-center min-h-32 md:min-h-48 gap-4"},[n("span",{class:"tracking-widest uppercase text-gray-400 text-lg md:text-xl"},"Portfolio"),n("h2",{class:"text-2xl md:text-5xl text-white font-bold text-center mx-4"}," Checkout a few of my projects ")],-1),A={class:"flex flex-col items-center justify-center gap-4"},G={class:"flex items-center justify-center min-h-32 md:min-h-48 gap-4"},D={__name:"Portfolio",setup(d){const{homeProjects:e}=$();return(o,l)=>{const i=C,c=v;return t(),s(p,null,[L,n("div",A,[(t(!0),s(p,null,x(f(e),(a,w)=>(t(),h(i,{key:a.title,project:a,index:w},null,8,["project","index"]))),128))]),n("div",G,[r(c,{to:"/portfolio",class:"text-white font-bold text-xl hover:text-emerald-500 transition-all"},{default:m(()=>[g("Explore more ...")]),_:1})])],64)}}},T={class:"flex flex-col gap-16"},O={__name:"index",setup(d){const e=b();return console.log(e.public.appUrl),E({meta:[{name:"description",content:"Islam Samy is a software engineer specialized in web development using Laravel, Golang, Nuxt.js, and Vue.js. Based in Dubai, UAE."},{name:"keywords",content:"Islam Samy, software engineer, web development, Laravel, Golang, Nuxt.js, Vue.js, Dubai, UAE"},{property:"og:title",content:"Islam Samy - Software Engineer"},{property:"og:description",content:"Specialized in web development using Laravel, Golang, Nuxt.js, and Vue.js."},{property:"og:type",content:"website"},{property:"og:url",content:e.public.appUrl},{property:"og:image",content:e.public.appUrl+"/images/profile.jpg"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:"Islam Samy - Software Engineer"},{name:"twitter:description",content:"Specialized in web development using Laravel, Golang, Nuxt.js, and Vue.js."},{name:"twitter:image",content:e.public.appUrl+"/images/profile.jpg"},{name:"twitter:site",content:"@zolom214"},{name:"twitter:creator",content:"@zolom214"}],link:[{rel:"canonical",href:e.public.appUrl}]}),(o,l)=>{const i=V,c=B,a=D;return t(),s("div",T,[r(i),r(c),r(a)])}}};export{O as default};
