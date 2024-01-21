"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[123],{940:function(n,e,t){t.d(e,{Z:function(){return l}});var r,i=t(168),o=t(686).Z.button(r||(r=(0,i.Z)(["\n    display: flex;\n    width: 360px;\n    height: 50px;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 50px;\n\n\n    border-radius: 12px;\n    opacity: ",";\n    background-color: var(--accent-color);\n    color: var(--text-button-color);\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 1.44;\n    letter-spacing: 0.2px;\n    transition: background-color var(--transition);\n\n    &:hover,\n    &:focus {\n        background-color: var(--hover-color);\n    }\n\n"])),(function(n){return n.disabled?.3:1})),a=t(184),l=function(n){var e=n.text,t=n.handler,r=n.disabled,i=void 0!==r&&r;return(0,a.jsx)(o,{type:"button",onClick:t,disabled:i,children:e})}},123:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,i,o,a,l,c,s,u,p=t(439),d=t(791),h=t(689),x=t(270),g=t(312),f=t(518),m=t(168),b=t(686),v=b.Z.div(r||(r=(0,m.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 360px;\n    border-radius: 10px;\n    border: 1px solid var(--accent-color);\n"]))),Z=b.Z.label(i||(i=(0,m.Z)(["\n    width: 50%;\n"]))),j=b.Z.input(o||(o=(0,m.Z)(["\n    position: absolute;\n    z-index: -1;\n    opacity: 0;\n\n    &:checked + div {\n        background: rgba(95, 203, 57, 0.2);\n    }\n    &:hover + div,\n    :focus + div {\n        // background: rgba(95, 203, 57, 0.2);\n        box-shadow:  var(--shadow);\n    }\n\n+ div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    width: 100%;\n    height: 32px;\n    border-top-left-radius: ",";\n    border-bottom-left-radius: ",";\n    border-top-right-radius: ",";\n    border-bottom-right-radius: ",";\n}\n"])),(function(n){return n.option?"10px":"0px"}),(function(n){return n.option?"10px":"0px"}),(function(n){return n.option?"0px":"10px"}),(function(n){return n.option?"0px":"10px"})),w=b.Z.p(a||(a=(0,m.Z)(["\n    text-align: center;\n    color: var(--accent-color);\n    font-size: 12px;\n    font-weight: 800;\n    letter-spacing: 2.5px;\n    text-transform: uppercase;\n"]))),y=t(184),k=function(n){var e=n.handleUnit,t=n.unit,r=function(n){var t=n.target.value;localStorage.setItem("unit",JSON.stringify(t)),e("imperial"===t?"imperial":"metric")};return(0,y.jsxs)(v,{children:[(0,y.jsxs)(Z,{children:[(0,y.jsx)(j,{type:"radio",name:"measure",value:"imperial",option:!0,checked:"imperial"===t,onChange:r}),(0,y.jsx)("div",{children:(0,y.jsx)(w,{children:"Imperial"})})]}),(0,y.jsxs)(Z,{children:[(0,y.jsx)(j,{type:"radio",name:"measure",value:"metric",onChange:r,checked:"metric"===t}),(0,y.jsx)("div",{children:(0,y.jsx)(w,{children:"Metric"})})]})]})},S=t(940),I=b.Z.main(l||(l=(0,m.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-items: center;\n"]))),C=b.Z.div(c||(c=(0,m.Z)(["\n    position: relative;\n    width: 360px;\n    margin-top: 10px;\n    &:last-of-type {\n        margin-bottom: 159px;\n    }\n"]))),N=b.Z.p(s||(s=(0,m.Z)(["\n    position: absolute;\n    top: 22px;\n    left: 15px;\n"]))),J=b.Z.input(u||(u=(0,m.Z)(["\n    width: 100%;\n    height: 64px;\n    padding: 20px 15px;\n    border-radius: 10px;\n    border: 1px solid var(--borders-color);\n    background-color: transparent;\n\n    color: var(--primary-text-color);\n    font-family: Inter;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.71;\n    letter-spacing: 0.25px;\n    text-align: right;\n\n    &::-webkit-inner-spin-button,\n    ::-webkit-outer-spin-button {\n        -webkit-appearance: none;\n        appearance: none;\n        margin: 0;\n        }\n    &:hover,\n    :focus {\n        border-color: var(--hover-color);\n        outline: 0;\n        }\n"]))),O=function(){var n=(0,d.useState)(!0),e=(0,p.Z)(n,2),t=e[0],r=e[1],i=(0,d.useState)(null),o=(0,p.Z)(i,2),a=o[0],l=o[1],c=(0,d.useState)(null),s=(0,p.Z)(c,2),u=s[0],m=s[1],b=(0,d.useState)("imperial"),v=(0,p.Z)(b,2),Z=v[0],j=v[1],w=(0,d.useState)("ft"),O=(0,p.Z)(w,2),z=O[0],_=O[1],M=(0,d.useState)("pd"),E=(0,p.Z)(M,2),U=E[0],W=E[1],q=(0,h.s0)();(0,d.useEffect)((function(){var n=JSON.parse(localStorage.getItem("height"));n&&l(Number.parseInt(n));var e=JSON.parse(localStorage.getItem("weight"));e&&m(Number.parseInt(e)),r(!a||!u)}),[a,u,r]),(0,d.useEffect)((function(){var n=JSON.parse(localStorage.getItem("unit"));n&&j(n),"imperial"===Z?(_("ft"),W("pd")):(_("cm"),W("kg"))}),[Z]);var F=function(n){var e=n.target,t=e.name,r=e.value;"height"===t?(l(r),localStorage.setItem("height",JSON.stringify(r))):(m(r),localStorage.setItem("weight",JSON.stringify(r)))};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(x.q,{children:(0,y.jsx)("title",{children:"Measure"})}),(0,y.jsx)(g.Z,{address:"goal"}),(0,y.jsxs)(I,{children:[(0,y.jsx)(f.Z,{title:"Measure Yourself",text:"What are your height and body weight?"}),(0,y.jsx)(k,{handleUnit:j,unit:Z}),(0,y.jsxs)(C,{children:[(0,y.jsx)(N,{children:"Height(".concat(z,")")}),(0,y.jsx)(J,{type:"number",name:"height",min:"1",max:"300",onChange:F,value:a})]}),(0,y.jsxs)(C,{children:[(0,y.jsx)(N,{children:"Current Weight(".concat(U,")")}),(0,y.jsx)(J,{type:"number",name:"weight",min:"1",max:"300",onChange:F,value:u})]}),(0,y.jsx)(S.Z,{type:"submit",text:"Continue",handler:function(){q("/behavior")},disabled:t})]})]})}}}]);
//# sourceMappingURL=123.07adfcf1.chunk.js.map