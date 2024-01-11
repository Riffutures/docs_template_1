"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[888],{2783:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=a(5893),s=a(1151);const r={sidebar_position:2},c="Cable Payment",o={id:"Cable-Service/cable",title:"Cable Payment",description:"- cablename: cablename id int",source:"@site/docs/Cable-Service/cable.md",sourceDirName:"Cable-Service",slug:"/Cable-Service/cable",permalink:"/docs_template_1/docs/Cable-Service/cable",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Cable- API Service",permalink:"/docs_template_1/docs/category/cable--api-service"},next:{title:"Validate IUC",permalink:"/docs_template_1/docs/Cable-Service/validateiuc"}},i={},l=[{value:"Send a post request with the payload",id:"send-a-post-request-with-the-payload",level:3},{value:"Response",id:"response",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cable-payment",children:"Cable Payment"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cablename"}),": cablename id ",(0,t.jsx)(n.code,{children:"int"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cableplan"}),": cableplan id ",(0,t.jsx)(n.code,{children:"int"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"smart_card_number"}),": smart card number ",(0,t.jsx)(n.code,{children:"int"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"customer_name"}),": customer name ",(0,t.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests\nimport json\npayload = {\n    "cablename": 2,\n    "cableplan": 2,\n    "smart_card_number": 1212121212,\n    "customer_name": "Ayo"\n}\nuser_token = \'eacf1ab727d134b254361d834c28a2bf6ab0a111\'\nheaders = {\n      "Content-Type": "application/json",\n      "Authorization": f\'Token {user_token}\'\n} \n# jsonify the payload\ndata = json.dumps(payload)\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"send-a-post-request-with-the-payload",children:"Send a post request with the payload"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'url = "https://subpadi.com/api/cablesub/"\nres = requests.post(url, data=data, headers=headers)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{\n    "id": 16,\n    "ident": "202312191236203344732118747bb14214-36a8-48c9-a9ac-beaee283eab8",\n    "cablename": 2,\n    "cableplan": 2,\n    "tran_id": "Cable-SwVYgxPcgdfd1",\n    "package": "Startime Nova",\n    "plan_amount": "90",\n    "paid_amount": 90,\n    "balance_before": "533635.0",\n    "balance_after": "533545.0",\n    "smart_card_number": "1212121212",\n    "Status": "successful",\n    "create_date": "2023-12-19T12:36:21.685597",\n    "customer_name": "Ayo",\n    "api_response": "Startime Nova successfully subscribed to 1212121212 for Ayo"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["View code in other programming languages ",(0,t.jsx)(n.a,{href:"https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99",children:"here"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>c});var t=a(7294);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);