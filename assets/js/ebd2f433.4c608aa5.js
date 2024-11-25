"use strict";(self.webpackChunkapi_docs_generator=self.webpackChunkapi_docs_generator||[]).push([[756],{3930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"tech/ui","title":"UI Implementation Guide","description":"Check out the following diagram showing how a custom UI can be built in a crypto wallet. Best to download the image","source":"@site/docs/tech/ui.md","sourceDirName":"tech","slug":"/tech/ui","permalink":"/docs/tech/ui","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Networks","permalink":"/docs/tech/networks"},"next":{"title":"Integration Examples","permalink":"/docs/videos"}}');var s=n(4848),o=n(8453);const a={},r="UI Implementation Guide",c={},l=[{value:"Additional considerations",id:"additional-considerations",level:2},{value:"Ramp Status",id:"ramp-status",level:3},{value:"Account Limits",id:"account-limits",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"ui-implementation-guide",children:"UI Implementation Guide"})}),"\n",(0,s.jsx)(t.p,{children:"Check out the following diagram showing how a custom UI can be built in a crypto wallet. Best to download the image\nand zoom it in an app."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"UI Implementation Guide",src:n(2368).A+"",width:"3539",height:"5184"})}),"\n",(0,s.jsx)(t.h2,{id:"additional-considerations",children:"Additional considerations"}),"\n",(0,s.jsx)(t.h3,{id:"ramp-status",children:"Ramp Status"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"GetAccountInfo"})," API returns a ramp status for both on- and off-ramping (buying and selling crypto).\nThe status can have a zero value (",(0,s.jsx)(t.code,{children:"RAMP_STATUS_UNSPECIFIED"}),"), which means that the crypto asset is tradable and well\nfunctioning on our platform."]}),"\n",(0,s.jsxs)(t.p,{children:["In most cases, we'll be able to serve customers within seconds. In rare occasions our system might be experiencing\ndelays, and in exceptional cases, we might even halt trading a specific asset temporarily. In those scenarios, the ramp\nstatus will either be ",(0,s.jsx)(t.code,{children:"RAMP_STATUS_DEGRADED"})," or ",(0,s.jsx)(t.code,{children:"RAMP_STATUS_HALTED"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"It is important to implement detection of these statuses and rendering of the appropriate UI elements to inform the\nend user."}),"\n",(0,s.jsx)(t.h3,{id:"account-limits",children:"Account Limits"}),"\n",(0,s.jsx)(t.p,{children:"It is equally important for the client app to be aware of the account limits, of which there's two kinds:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"An absolute limit, meaning that no single transaction can exceed it."}),"\n",(0,s.jsx)(t.li,{children:"A daily limit, taking into consideration the cumulative 24h volume for that account (user)."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Both are expressed in the user's base currency (e.g. EUR in Europe, GBP in the UK, etc.).\nWhen asking the user for the amount to buy or sell, the client app should display and enforce those limits, based on\nthe information provided by\nthe ",(0,s.jsx)(t.a,{href:"https://github.com/harbour-tech/harbour-ts-sdk/blob/7e551915086673d5b7cee0030592d0528652b08e/proto/ramp/v1/public.proto#L83",children:"GetAccountInfo API"}),",\nwithin the ",(0,s.jsx)(t.a,{href:"https://github.com/harbour-tech/harbour-ts-sdk/blob/7e551915086673d5b7cee0030592d0528652b08e/proto/ramp/v1/public.proto#L167",children:"CryptoAsset message"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Below is an example of the limits being rendered in our own UI, plus an example error message when exceeded during an\non-ramp journey (buy)."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Account Limits",src:n(5047).A+"",width:"669",height:"650"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5047:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/limits-cc99bd17aa96e5beaa75eb6fbb48a7a9.png"},2368:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ui-wireframe-990bfab7c0d6232f0934714586d790d6.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(6540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);