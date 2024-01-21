"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[461],{940:function(n,e,t){t.d(e,{Z:function(){return c}});var r,o=t(168),a=t(686).Z.button(r||(r=(0,o.Z)(["\n    display: flex;\n    width: 360px;\n    height: 50px;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 50px;\n\n\n    border-radius: 12px;\n    opacity: ",";\n    background-color: var(--accent-color);\n    color: var(--text-button-color);\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: 1.44;\n    letter-spacing: 0.2px;\n    transition: background-color var(--transition);\n\n    &:hover,\n    &:focus {\n        background-color: var(--hover-color);\n    }\n\n"])),(function(n){return n.disabled?.3:1})),i=t(184),c=function(n){var e=n.text,t=n.handler,r=n.disabled,o=void 0!==r&&r;return(0,i.jsx)(a,{type:"button",onClick:t,disabled:o,children:e})}},461:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,o,a,i,c,l=t(439),s=t(791),d=t(689),h=t(270),u=t(312),x=t(518),p=t(168),g=t(686),f=g.Z.input(r||(r=(0,p.Z)(["\n    position: absolute;\n\tz-index: -1;\n\topacity: 0;\n\tmargin: 10px 0 0 7px;\n    &:checked + div {\n        box-shadow:  var(--shadow);\n        border-color: var(--hover-color);\n    }\n    &:hover + div,\n    :focus + div {\n        box-shadow:  var(--shadow);\n    }\n\n    + div {\n        display: flex;\n    align-items: center;\n    justify-content: start;     \n    width: 172px;\n    height: 172px;\n\n    border-radius: 20.848px;\n    border: 1.042px solid var(--borders-color);\n    background-image: url( ","), var(--grad);\n    background-repeat: no-repeat;\n    background-position: right;\n    background-size: contain;\n    cursor: pointer;\n    }\n"])),(function(n){return n.src})),v=g.Z.p(o||(o=(0,p.Z)(["\n    color: var(--primary-text-color);\n    font-size: 16.679px;\n    font-weight: 500;\n    line-height: 1.37; \n    letter-spacing: 0.208px;\n    width: 83px;\n    margin-left: 10.42px;\n"]))),m=t(184),b=function(n){var e=n.text,t=n.src,r=n.handleChecked,o=(0,s.useState)(""),a=(0,l.Z)(o,2),i=a[0],c=a[1],d=(0,s.useState)(!1),h=(0,l.Z)(d,2),u=h[0],x=h[1];(0,s.useEffect)((function(){var n=JSON.parse(localStorage.getItem("goal"));n&&c(n)}),[c]),(0,s.useEffect)((function(){e===i&&(x(!0),r(!0))}),[x,r,e,i]);return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("label",{children:[(0,m.jsx)(f,{type:"radio",name:"goal",value:e,src:t,onChange:function(n){var e=n.target.value;localStorage.setItem("goal",JSON.stringify(e)),c(e)},checked:u}),(0,m.jsx)("div",{children:(0,m.jsx)(v,{children:e})})]})})},y=t(940),w=g.Z.main(a||(a=(0,p.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-items: center;\n"]))),j=g.Z.p(i||(i=(0,p.Z)(["\n    margin-bottom: 15px;\n    color: var(--primary-text-color);\n    text-align: center;\n    font-weight: 700;\n    line-height: 1.71;\n    letter-spacing: 0.2px;\n"]))),Z=g.Z.div(c||(c=(0,p.Z)(["\n    width: 360px;\n    height: 360px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 16px;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 129px;\n"]))),k=t(596),C=[{text:"Lose Weight",src:k.Py},{text:"Gain Muscle",src:k.mo},{text:"Develop healthy habits",src:k.EJ},{text:"Develop healthy habits2",src:k.Pc}],S=function(){var n=(0,s.useState)(!1),e=(0,l.Z)(n,2),t=e[0],r=e[1],o=(0,d.s0)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h.q,{children:(0,m.jsx)("title",{children:"Goal"})}),(0,m.jsx)(u.Z,{address:"home"}),(0,m.jsxs)(w,{children:[(0,m.jsx)(x.Z,{title:"The Goal",text:"Focus on the health benefits you need. Balanced nutrition will let you achieve them"}),(0,m.jsx)(j,{children:"What are your goals?"}),(0,m.jsx)(Z,{children:C.map((function(n){var e=n.text,t=n.src;return(0,m.jsx)(b,{text:e,src:t,handleChecked:r},e)}))}),(0,m.jsx)(y.Z,{text:"Continue",handler:function(){o("/measure")},disabled:!t})]})]})}}}]);
//# sourceMappingURL=461.9b58a751.chunk.js.map