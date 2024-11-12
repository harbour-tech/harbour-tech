"use strict";(self.webpackChunkapi_docs_generator=self.webpackChunkapi_docs_generator||[]).push([[331],{2207:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"aggregator","title":"Ramp Aggregator","description":"API description","source":"@site/docs/aggregator.md","sourceDirName":".","slug":"/aggregator","permalink":"/docs/aggregator","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Web Integration","permalink":"/docs/web"},"next":{"title":"SDK","permalink":"/docs/sdk"}}');var r=n(4848),o=n(8453);const i={sidebar_position:3},d="Ramp Aggregator",a={},c=[{value:"API description",id:"api-description",level:2},{value:"Detailed description of fields of requests and responses",id:"detailed-description-of-fields-of-requests-and-responses",level:3},{value:"List of supported fiat currencies",id:"list-of-supported-fiat-currencies",level:3},{value:"List of supported countries and payment methods",id:"list-of-supported-countries-and-payment-methods",level:3},{value:"Usage of SDK",id:"usage-of-sdk",level:2},{value:"End to end example of SDK usage",id:"end-to-end-example-of-sdk-usage",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"ramp-aggregator",children:"Ramp Aggregator"})}),"\n",(0,r.jsx)(s.h2,{id:"api-description",children:"API description"}),"\n",(0,r.jsx)(s.h3,{id:"detailed-description-of-fields-of-requests-and-responses",children:"Detailed description of fields of requests and responses"}),"\n",(0,r.jsxs)(s.p,{children:["Detailed description of requests and responses fields can be found in\nthe ",(0,r.jsx)(s.a,{href:"https://github.com/harbour-tech/harbour-ts-sdk/blob/main/proto/ramp/v1/public.proto",children:"proto definitions"})]}),"\n",(0,r.jsx)(s.h3,{id:"list-of-supported-fiat-currencies",children:"List of supported fiat currencies"}),"\n",(0,r.jsxs)(s.p,{children:["List of supported fiat currencies can be found in ",(0,r.jsx)(s.strong,{children:"CurrencyId"})," enum\nof ",(0,r.jsx)(s.a,{href:"https://github.com/harbour-tech/harbour-ts-sdk/blob/main/proto/ramp/v1/public.proto",children:"proto definitions"})]}),"\n",(0,r.jsx)(s.h3,{id:"list-of-supported-countries-and-payment-methods",children:"List of supported countries and payment methods"}),"\n",(0,r.jsxs)(s.p,{children:["List of supported countries can be found ",(0,r.jsx)(s.a,{href:"/docs/countries-payments",children:"here"})]}),"\n",(0,r.jsx)(s.h2,{id:"usage-of-sdk",children:"Usage of SDK"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Reach out Harbour support to get assigned referral code and to register webhook for transactions notification (if\nrequired)"}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Copy ",(0,r.jsx)(s.code,{children:"src/index.ts"})," and ",(0,r.jsx)(s.code,{children:"src/gen/**"})," into your project"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Configure RampClient to one of the endpoints"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Development environment: ",(0,r.jsx)(s.code,{children:"https://dev-api.harborapps-nonprod.link"})]}),"\n",(0,r.jsxs)(s.li,{children:["Production environment: ",(0,r.jsx)(s.code,{children:"https://api.harborapp.link"})]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Typscript",children:'import Ramp from \'.\'\nimport {GetAssetsRequest, CurrencyId} from "./gen/ramp/v1/public_pb";\nconst ramp = new RampCLient("https://dev-api.harborapps-nonprod.link");\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Get list of available assets"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Typscript",children:"const assetsResponse = ramp.getAssets(new GetAssetsRequest({fiatAssetId: CurrencyId.EUR}));\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Please check ",(0,r.jsx)(s.strong,{children:"GetAssetsResponse"}),"\nof ",(0,r.jsx)(s.a,{href:"https://github.com/harbour-tech/harbour-ts-sdk/blob/main/proto/ramp/v1/public.proto",children:"proto definitions"})," for\ndetailed documentation\nover response data"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Estimate on-ramp"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Typscript",children:'const onRampFeeResponse = await ramp.estimateOnRampFee(new EstimateOnRampFeeRequest({\n  fiatAssetId: CurrencyId.EUR,\n  cryptoAssetId: assetsResponse.cryptoAssets[0].assetId,\n  protocol: assetsResponse.cryptoAssets[0].protocol,\n  amount:  {\n    case:"fiatAssetAmount",\n    value: "100",\n  },\n}));\n'})}),"\n",(0,r.jsxs)(s.p,{children:["Please check ",(0,r.jsx)(s.strong,{children:"EstimateOnRampFeeResponse"}),"\nof ",(0,r.jsx)(s.a,{href:"https://github.com/harbour-tech/harbour-ts-sdk/blob/main/proto/ramp/v1/public.proto",children:"proto definitions"})," for\ndetailed\ndocumentation over response data"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Estimate off-ramp"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-Typscript",children:'const offRampFeeResponse = await ramp.estimateOffRampFee(new EstimateOffRampFeeRequest({\n  fiatAssetId: CurrencyId.EUR,\n  cryptoAssetId: assetsResponse.cryptoAssets[0].assetId,\n  protocol: assetsResponse.cryptoAssets[0].protocol,\n  amount:  {\n    case:"cryptoAssetAmount",\n    value: "100",\n  },\n}));\n'})}),"\n",(0,r.jsxs)(s.p,{children:["Please check ",(0,r.jsx)(s.strong,{children:"EstimateOffRampFeeResponse"}),"\nof ",(0,r.jsx)(s.a,{href:"https://github.com/harbour-tech/harbour-ts-sdk/blob/main/proto/ramp/v1/public.proto",children:"proto definitions"})," for\ndetailed\ndocumentation over response data"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Open a popup window passing parameters"}),"\n",(0,r.jsxs)(s.p,{children:["Once user selected Harbour as ramp provider user should be directed to Harbour ramp web app at\n",(0,r.jsx)(s.code,{children:"https://.../?origin={metamask}&op={buy|sell}&amount=100&asset={ASSET_ID_USDC|ASSET_ID_ETH|...}&protocol={PROTOCOL_ETHEREUM|PROTOCOL_POLYGON|...}&currency={CURRENCY_ID_EUR}"})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Example values"}),(0,r.jsx)(s.th,{children:"Notes"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"op"}),(0,r.jsx)(s.td,{children:"buy, sell"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"amount"}),(0,r.jsx)(s.td,{children:"100"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"fiat"})," for ",(0,r.jsx)(s.code,{children:"buy"})," operation and in ",(0,r.jsx)(s.code,{children:"crypto"})," for ",(0,r.jsx)(s.code,{children:"sell"})," operation ",(0,r.jsx)("br",{}),(0,r.jsx)(s.code,{children:"."})," should be used as the decimal separator for ",(0,r.jsx)(s.code,{children:"amount"})," ",(0,r.jsx)("br",{})," ",(0,r.jsx)(s.code,{children:"amount"})," would be truncated if it exceeds the decimal precision of the fiat or crypto asset."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"asset"}),(0,r.jsx)(s.td,{children:"ASSET_ID_USDC, ASSET_ID_ETH, ..."}),(0,r.jsxs)(s.td,{children:["look into ",(0,r.jsx)(s.code,{children:"AssetId"})," definition in proto"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"protocol"}),(0,r.jsx)(s.td,{children:"PROTOCOL_ETHEREUM, PROTOCOL_POLYGON, ..."}),(0,r.jsxs)(s.td,{children:["look into ",(0,r.jsx)(s.code,{children:"Protocol"})," definition in proto"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"wallet_address"}),(0,r.jsx)(s.td,{children:'"0x134ad..."'}),(0,r.jsx)(s.td,{children:"wallet address"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"currency"}),(0,r.jsx)(s.td,{children:"CURRENCY_ID_EUR, ..."}),(0,r.jsxs)(s.td,{children:["look into ",(0,r.jsx)(s.code,{children:"CurrencyId"})," definition in proto"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"referral_code"}),(0,r.jsx)(s.td,{children:"'refferal_xyz'"}),(0,r.jsx)(s.td,{children:"assigned to the partner by Harbour"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"referral_transaction_id"}),(0,r.jsx)(s.td,{children:"'tx123'"}),(0,r.jsx)(s.td,{children:"any string containing only letters (any case), numbers, '_' and '-'"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"As soon as ramp transaction changes it's status partner webhook will be invoked"}),"\n",(0,r.jsxs)(s.p,{children:["Complete ",(0,r.jsx)(s.code,{children:"RampTransaction"})," definition can be found in\nthe ",(0,r.jsx)(s.a,{href:"https://github.com/harbour-tech/harbour-ts-sdk/blob/main/proto/ramp/v1/public.proto",children:"proto definitions"}),".\nWebhook's payload is JSON encoded by default. Example payload:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "transactionId" : "00000000-0000-0000-0000-000000000000",\n  "referralTransactionId": "tx123",\n  "type": "RAMP_TYPE_ON_RAMP",\n  "status": "RAMP_STATUS_COMPLETED",\n  "currencyId": "CURRENCY_ID_EUR",\n  "cryptoAssetId": "ASSET_ID_USDC",\n  "cryptoAssetProtocol": "PROTOCOL_ETHEREUM",\n  "fiatAmount": "100.1",\n  "cryptoAmount": "105.456",\n  "exchangeRate": "1.07",\n  "fees": {\n    "processingFee": "0.5",\n    "networkFee": "3.1",\n    "referralFee": "0.5"\n  },\n  "walletAddress": "0x904Efd640CcA70Efaf5c29421CF507E4\u203aB7bFc71B",\n  "initiatedAt": "2024-08-22T00:00:00Z",\n  "completedAt": "2024-08-22T00:00:00Z"\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"end-to-end-example-of-sdk-usage",children:"End to end example of SDK usage"}),"\n",(0,r.jsxs)(s.p,{children:["End to end example of SDK usage can be\nfound ",(0,r.jsx)(s.a,{href:"https://github.com/harbour-tech/harbour-ts-sdk/blob/main/src/examples/example-aggregator.ts",children:"here"})," and can be\nexecuted with following command"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"npm i\nnpx tsx src/examples/example-aggregator.ts\n"})})]})}function p(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>d});var t=n(6540);const r={},o=t.createContext(r);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);