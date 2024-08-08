import{i as P,r as n,j as e,m as G,L as q}from"./index-d9b39f5e.js";import{P as ge}from"./PageContainer-fd42dc94.js";import{B as ve,H as fe}from"./Breadcrumb-9f189444.js";import{D as L}from"./DashboardCard-4e1c1671.js";import{a as A}from"./axios-dd1c8fc2.js";import{e as E}from"./eventEmitter-d2c8b369.js";import{c as Q}from"./config-ed4f877b.js";import{B as F}from"./Button-8a3881c4.js";import{S as w}from"./Stack-565e4b37.js";import{s as f,T as i,B as I}from"./Box-1e7caa39.js";import{I as je}from"./IconChevronRight-2a2a0717.js";import{D as z,I as be}from"./IconCurrencyDollar-7b0def24.js";import{G as a,u as Z,M as Se}from"./List-dbd24109.js";import{D as ye,a as Ie,b as Ce}from"./DialogTitle-7a67cf89.js";import{I as ke}from"./IconX-9d530b49.js";import{I as De}from"./IconSettings2-f627689f.js";import{_ as we}from"./react-apexcharts.min-d2d01635.js";import{M as Ee}from"./MenuItem-36939c25.js";import{M as Ne}from"./Select-be6fca1e.js";import{A as Fe,I as Te,a as $e}from"./IconClock-2ce6e107.js";import{T as J}from"./TextField-0fb86b85.js";import"./createReactComponent-feeb99fb.js";import"./IconLayoutDashboard-da03b59e.js";import"./Card-4abafe44.js";import"./CardContent-16323af8.js";import"./styled-e4592642.js";import"./useThemeProps-91a04794.js";import"./dividerClasses-7b989fe2.js";import"./FormControl-91b0f058.js";import"./InputLabel-648a476c.js";const Be=()=>{const r=f(F)(({theme:o})=>({backgroundColor:o.palette.primary.extraLight,border:"1px solid",borderColor:o.palette.primary.light,color:o.palette.primary.main,fontSize:"12px",padding:"3px 8px",fontWeight:"600","&:hover":{backgroundColor:o.palette.primary.main,color:"white"}})),p=f(F)(({theme:o})=>({minWidth:"30px",height:"30px",backgroundColor:"red",color:"white",right:"15px",top:"15px","&:hover":{backgroundColor:o.palette.secondary.main,color:"white"}})),m=f(w)(({theme:o,index:d})=>({backgroundColor:d%2===0?o.palette.primary.extraLight:o.palette.secondary.extraLight,padding:o.spacing(2)})),j=f(i)(({theme:o,index:d})=>({color:d%3===0?"#2edd95":d%3===1?"#f19c53":"#245aa0"}));P();const[c,S]=n.useState(!1),[s,x]=n.useState({}),g=Q.UniUrl;n.useEffect(()=>{const o=async()=>{const b=sessionStorage.getItem("token"),v=sessionStorage.getItem("selectedVendorId");if(!b||!v){console.error("Token or vendorId not found in sessionStorage");return}try{const $=(await A.get(`${g}/shortage/getYoyFindingAll?vendorId=${v}&pageName=IR_FINDING`,{headers:{Authorization:`Bearer ${b}`}})).data;$.status==="SUCCESS"?x($.data):console.error("Error fetching data:",$.errorMessage)}catch(T){console.error("Error fetching data:",T)}};o();const d=b=>{o()};return E.on("vendorSelected",d),()=>{E.off("vendorSelected",d)}},[]);const h=()=>{S(!0)},k=()=>{S(!1)},y=()=>{const d=Object.keys(s).map(Number).sort((v,T)=>T-v);let b=[];for(let v=0;v<d.length&&((b.length===0||d[v]===b[b.length-1]-1)&&b.push(d[v]),b.length!==3);v++);return b};return e.jsxs(L,{title:e.jsx(i,{variant:"h4",children:"Yearly Trends"}),action:e.jsxs(r,{onClick:h,children:["View Details ",e.jsx(je,{size:"16"})]}),children:[e.jsx(j,{variant:"h6",sx:{color:"#2edd95"},children:y()[0]}),e.jsxs(i,{variant:"h3",children:["$",new Intl.NumberFormat(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}).format(Math.abs(parseFloat(s[y()[0]]||0)))]}),e.jsx(I,{my:1,children:e.jsx(z,{})}),e.jsx(a,{container:!0,spacing:3,children:y().slice(1).map((o,d)=>e.jsxs(a,{item:!0,sm:6,children:[e.jsx(j,{variant:"h6",index:d+1,children:o}),e.jsx(i,{variant:"h6",children:e.jsxs("b",{children:["$",new Intl.NumberFormat(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}).format(parseFloat(s[o]||0))]})})]},o))}),e.jsxs(ye,{open:c,onClose:k,maxWidth:"sm",fullWidth:!0,children:[e.jsxs(w,{direction:"row",justifyContent:"space-between",children:[e.jsx(Ie,{variant:"h3",children:"YOY Split"}),e.jsx(p,{children:e.jsx(ke,{onClick:k,size:"16"})})]}),e.jsx(Ce,{children:e.jsx(a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:e.jsx(a,{item:!0,xs:12,alignItems:"center",justifyContent:"center",children:Object.keys(s).map(Number).sort((o,d)=>d-o).map((o,d)=>e.jsxs(m,{direction:"row",index:d,spacing:4,justifyContent:"space-between",children:[e.jsx(j,{variant:"h6",index:d,children:o}),e.jsxs(i,{variant:"h6",children:["$",new Intl.NumberFormat(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}).format(Math.abs(parseFloat(s[o]||0)))]})]},o))})})})]})]})},Ae=()=>{const r=f(i)(({theme:h})=>({color:h.palette.secondary.main,lineHeight:"24px"}));f(F)(({theme:h})=>({backgroundColor:h.palette.primary.contrast,border:"1px solid",borderColor:h.palette.primary.contrast,color:h.palette.primary.contrastText,fontSize:"10px",padding:"3px 6px",fontWeight:"600","&:hover":{backgroundColor:h.palette.primary.main,color:h.palette.primary.contrastText,borderColor:h.palette.primary.main}}));const p=P(),[m,j]=n.useState(null),[c,S]=n.useState(null),[s,x]=n.useState(!0),g=()=>{const h=sessionStorage.getItem("selectedVendorId");j(h)};return n.useEffect(()=>(g(),E.on("vendorSelected",g),()=>{E.off("vendorSelected",g)}),[]),n.useEffect(()=>{const h=sessionStorage.getItem("token");m&&(x(!0),A.get("http://16.170.22.123:8082/overbilling/getSummaryByType",{params:{type:"IR_CLAIM",vendorId:m},headers:{Authorization:`Bearer ${h}`}}).then(k=>{const y=k.data;y.status==="SUCCESS"&&y.data.length>0?S({...y.data[0]}):S(null)}).catch(k=>console.error("Error fetching IR_CLAIM data:",k)).finally(()=>x(!1)))},[m]),e.jsx(L,{title:e.jsx(i,{variant:"h4",sx:{color:p.palette.primary.light},children:"Claim Submitted($)"}),children:e.jsx(I,{sx:{position:"relative"},children:e.jsxs(i,{variant:"h3",sx:{color:p.palette.primary.light},children:[s?e.jsx(i,{variant:"h3",sx:{color:p.palette.text.main},children:"Loading data..."}):e.jsx(r,{variant:"h3",sx:{color:p.palette.text.main},children:c?`$${new Intl.NumberFormat().format(c.overbillIdentified)}`:"No data available"}),e.jsx(De,{size:"60",style:{position:"absolute",right:"5px",bottom:"-110px",color:"#0285a9e"}})]})})})},Le=()=>{const[r,p]=n.useState(null),[m,j]=n.useState(!0),[c,S]=n.useState(!1),s=async o=>{const d=sessionStorage.getItem("token");if(d&&o)try{const v=await(await fetch(`http://16.170.22.123:8082/missedInvoice/getMissedInvoiceRecoveryAmount?vendorId=${o}`,{headers:{Authorization:`Bearer ${d}`}})).json();v.status==="SUCCESS"&&v.data?p(v.data.recoveryAmount):p(null),j(!1)}catch(b){console.error("Error fetching recovery amount:",b),S(!0),j(!1)}};n.useEffect(()=>{const o=sessionStorage.getItem("selectedVendorId");return s(o),E.on("vendorSelected",d=>{j(!0),s(d)}),()=>{E.off("vendorSelected")}},[]);const x=f(i)(({theme:o})=>({color:o.palette.secondary.main})),g=Z(),h=g.palette.success.main;g.palette.success.extraDark;const k={chart:{type:"area",fontFamily:"'Plus Jakarta Sans', sans-serif;",foreColor:"#adb0bb",stacked:!0,toolbar:{show:!1},height:60,sparkline:{enabled:!0},group:"sparklines"},stroke:{curve:"smooth",width:5},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityTo:.1,stops:[30,80,100]}},marker:{show:!1},tooltip:{theme:g.palette.mode==="dark"?"dark":"light",enabled:!1}},y=[{name:"",color:h,data:[25,66,20,40,12,58,20]}];return e.jsx(L,{title:e.jsx(x,{variant:"h5",sx:{color:"#2edd95"},children:"Recouped Amount"}),footer:e.jsx(we,{options:k,series:y,type:"area",height:"100px",width:"200px",className:"recoupend-amount",color:"#2edd95"}),children:m?e.jsx(x,{variant:"h6",sx:{color:g.palette.text.primary},children:"Loading..."}):c?e.jsx(x,{variant:"h6",sx:{color:g.palette.error.main},children:"Error loading data"}):r!==null?e.jsxs(x,{variant:"h3",children:["$",new Intl.NumberFormat().format(r)]}):e.jsx(x,{variant:"h6",sx:{color:g.palette.text.secondary},children:"No data available"})})},ze=f(F)(({theme:r})=>({color:r.palette.primary.contrastText,backgroundColor:r.palette.primary.main,border:"1px solid",borderColor:r.palette.primary.main,fontSize:"13px",padding:"5px 12px",fontWeight:"600",textAlign:"end","&:hover":{backgroundColor:r.palette.primary.extraLight,color:r.palette.primary.main}})),X=f(Ee)(({theme:r})=>({color:r.palette.text.dark,fontSize:"16px","&:hover":{backgroundColor:r.palette.primary.extraLight,color:r.palette.primary.main}})),Re=()=>{const[r,p]=n.useState(null);n.useState([]);const m=c=>{p(c.currentTarget)},j=()=>{p(null)};return e.jsxs(I,{children:[e.jsx(ze,{onClick:m,size:"large","aria-label":"select language","aria-controls":"language-menu","aria-haspopup":"true",children:"Export"}),e.jsxs(Ne,{anchorEl:r,open:!!r,onClose:j,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[e.jsx(X,{children:"Current"}),e.jsx(X,{children:"Archive"})]})]})},K=r=>{const{data:p}=r,[m,j]=n.useState([]),c=Z(),S=f(Fe)(({theme:s})=>({backgroundColor:s.palette.primary.light,borderRadius:"7px","& svg":{color:s.palette.primary.contrastText,width:"22px",height:"22px"}}));return n.useEffect(()=>{(async()=>{const x=await Promise.all(p.map(async g=>{switch(g.icon){case"IconClock":return $e;case"IconBriefcase":return Te;case"IconCurrencyDollar":return be;default:return null}}));j(x)})()},[p]),e.jsx(I,{children:e.jsx(w,{direction:"column",children:p.map((s,x)=>e.jsx(G.Fragment,{children:e.jsx(I,{children:e.jsxs(w,{direction:"row",spacing:1,alignItems:"center",marginBottom:x!==p.length-1?2:0,children:[e.jsx(S,{style:{backgroundColor:s.avatarBackgroundColor||c.palette.success.main,width:s.avatarWidth||"32px",height:s.avatarHeight||"32px"},children:m[x]&&G.createElement(m[x])}),e.jsx(I,{children:e.jsxs(i,{style:{color:c.palette.secondary.main,fontSize:s.listTitleSize||c.body2},fontWeight:600,children:[s.body,":"]})}),e.jsx(i,{style:{color:s.numberColor||c.palette.success.extraDark,fontSize:s.listTitleSize||c.body2},children:s.number})]})})},x))})})},pt=()=>{const r=P(),p=Q.UniUrl,[m,j]=n.useState(null),[c,S]=n.useState(null),[s,x]=n.useState(null),[g,h]=n.useState(!0),[k,y]=n.useState(""),[o,d]=n.useState(""),[b,v]=n.useState(""),[T,$]=n.useState(""),[W,H]=n.useState(""),[ee,U]=n.useState(""),[te,_]=n.useState(!1),[re,ae]=n.useState(null),[oe,ne]=n.useState(null),se=f(I)(({theme:t})=>({position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"400px",backgroundColor:t.palette.background.paper,border:"2px solid #ffff",boxShadow:t.shadows[5],padding:t.spacing(4)})),ie=()=>_(!0),R=()=>_(!1),le=()=>{R()},M=()=>{const t=sessionStorage.getItem("selectedVendorId");j(t)};n.useEffect(()=>(M(),E.on("vendorSelected",M),()=>{E.off("vendorSelected",M)}),[]),n.useEffect(()=>{const t=sessionStorage.getItem("token");m&&(h(!0),A.get("http://16.170.22.123:8082/overbilling/getSummaryByType",{params:{type:"IR_FINDING",vendorId:m},headers:{Authorization:`Bearer ${t}`}}).then(u=>{const l=u.data;if(l.status==="SUCCESS"&&l.data.length>0){const N=V(l.data[0].poScanned),D=Y(l.data[0].invoiceScanned);S({...l.data[0],poLinedScanned:N,invoiceScanned:D})}else S(null)}).catch(u=>console.error("Error fetching IR_FINDING data:",u)).finally(()=>h(!1)))},[m]),n.useEffect(()=>{const t=sessionStorage.getItem("token");m&&(h(!0),A.get("http://16.170.22.123:8082/overbilling/getSummaryByType",{params:{type:"IR_CLAIM",vendorId:m},headers:{Authorization:`Bearer ${t}`}}).then(u=>{const l=u.data;if(l.status==="SUCCESS"&&l.data.length>0){const N=V(l.data[0].poScanned),D=Y(l.data[0].invoiceScanned),pe=B(l.data[0].periodCoveredFrom),xe=B(l.data[0].periodCoveredTo);x({...l.data[0],poLinedScanned:N,invoiceScanned:D,periodCoveredFrom:pe,periodCoveredTo:xe})}else x(null)}).catch(u=>console.error("Error fetching IR_CLAIM data:",u)).finally(()=>h(!1)))},[m]),n.useEffect(()=>{const t=sessionStorage.getItem("token");m&&(h(!0),A.get(`${p}/overbilling/getImpactOverview?vendorId=${m}&pageName=IR_FINDING`,{headers:{Authorization:`Bearer ${t}`}}).then(u=>{const l=u.data.data[0];l?(y(l.hoursSaved),d(l.resourceSaved),v(l.amountSaved)):(y("-"),d("-"),v("-"))}).catch(u=>console.error("Error fetching impact overview data:",u)).finally(()=>h(!1)))},[m]),n.useEffect(()=>{const t=sessionStorage.getItem("token");m&&(h(!0),A.get(`${p}/overbilling/getImpactOverview?vendorId=${m}&pageName=IR_CLAIM`,{headers:{Authorization:`Bearer ${t}`}}).then(u=>{const l=u.data.data[0];l?($(l.hoursSaved),H(l.resourceSaved),U(l.amountSaved)):($("-"),H("-"),U("-"))}).catch(u=>console.error("Error fetching impact overview data:",u)).finally(()=>h(!1)))},[m]);const B=t=>{if(!t)return"No date available";const u={year:"numeric",month:"short",day:"numeric"};return new Date(t).toLocaleDateString(void 0,u)},V=t=>{if(!t)return 0;const u=t.trim().split(`\r
`);let l=0;return u.forEach(N=>{const D=parseInt(N.trim(),10);isNaN(D)||(l+=D)}),l},Y=t=>{if(!t)return 0;const u=t.trim().split(`\r
`);let l=0;return u.forEach(N=>{const D=parseInt(N.trim(),10);isNaN(D)||(l+=D)}),l},ce=[{body:"Hours Saved",number:`${k} Hrs`,icon:"IconClock",avatarBackgroundColor:r.palette.success.extrDark,numberColor:"#000000",avatarWidth:"35px",avatarHeight:"35px",listTitleSize:"18px"},{body:"Amount Saved To Audit",number:`${new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}).format(b)}`,icon:"IconCurrencyDollar",avatarBackgroundColor:"#245aa0",numberColor:"#000000",avatarWidth:"35px",avatarHeight:"35px",listTitleSize:"18px"},{body:"FTE Saved/week",number:`${o} ${o===1?"FTE":"FTE's"}`,icon:"IconRecords",avatarBackgroundColor:r.palette.accent.main,numberColor:"#000000",avatarWidth:"35px",avatarHeight:"35px",listTitleSize:"18px"}],de=[{body:"Hours Saved",number:`${T} Hrs`,icon:"IconClock",avatarBackgroundColor:r.palette.success.extrDark,numberColor:"#000000",avatarWidth:"35px",avatarHeight:"35px",listTitleSize:"18px"},{body:"Amount Saved To Submit",number:`${new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}).format(ee)}`,icon:"IconCurrencyDollar",avatarBackgroundColor:"#245aa0",numberColor:"#000000",avatarWidth:"35px",avatarHeight:"35px",listTitleSize:"18px"},{body:"FTE Saved",number:`${W} ${W===1?"FTE":"FTE's"}`,icon:"IconRecords",avatarBackgroundColor:r.palette.accent.main,numberColor:"#000000",avatarWidth:"35px",avatarHeight:"35px",listTitleSize:"18px"}],C=f(i)(({theme:t})=>({color:t.palette.primary.main})),O=f(F)(({theme:t})=>({color:t.palette.primary.contrastText,fontSize:"13px",padding:"5px 12px",fontWeight:"600",border:"1px solid","&:hover":{opacity:"0.8"}})),me=f(O)(({theme:t})=>({backgroundColor:t.palette.success.extraDark,borderColor:t.palette.success.extraDark,"&:hover":{backgroundColor:t.palette.success.light,color:t.palette.success.extraDark,borderColor:t.palette.success.extraDark}})),he=f(O)(({theme:t})=>({backgroundColor:t.palette.accent.main,borderColor:t.palette.accent.main,"&:hover":{backgroundColor:t.palette.accent.light,color:t.palette.accent.main}})),ue=f(O)(({theme:t})=>({backgroundColor:t.palette.secondary.main,borderColor:t.palette.secondary.main,"&:hover":{backgroundColor:t.palette.secondary.light,color:t.palette.secondary.main}}));return e.jsxs(ge,{title:"Missed Invoicing",children:[e.jsxs(a,{container:!0,spacing:3,mb:4,children:[e.jsx(a,{item:!0,xs:12,children:e.jsx(ve,{titles:["Missed Invoicing"]})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(fe,{title:"Missed Invoicing"})}),e.jsx(a,{item:!0,xs:12,children:e.jsxs(a,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(a,{item:!0,children:e.jsx(ue,{onClick:ie,children:"New Request"})}),e.jsx(a,{item:!0,children:e.jsx(q,{to:"/upload-log",style:{textDecoration:"none"},children:e.jsx(he,{children:"Upload Log"})})}),e.jsx(a,{item:!0,children:e.jsx(q,{to:"/job-status",style:{textDecoration:"none"},children:e.jsx(me,{children:"Job Status"})})})]})})]}),e.jsx(Se,{open:te,onClose:R,"aria-labelledby":"modal-title","aria-describedby":"modal-description",children:e.jsxs(se,{children:[e.jsx(i,{id:"modal-title",variant:"h6",component:"h2",children:"New Request"}),e.jsxs(w,{spacing:2,mt:2,children:[e.jsx(J,{label:"PO Start Date",type:"date",InputLabelProps:{shrink:!0},value:re,onChange:t=>ae(t.target.value)}),e.jsx(J,{label:"PO End Date",type:"date",InputLabelProps:{shrink:!0},value:oe,onChange:t=>ne(t.target.value)}),e.jsxs(w,{direction:"row",spacing:2,justifyContent:"flex-end",children:[e.jsx(F,{variant:"contained",color:"primary",onClick:le,children:"Run"}),e.jsx(F,{variant:"outlined",color:"secondary",onClick:R,children:"Close"})]})]})]})}),e.jsxs(a,{container:!0,spacing:3,mb:4,children:[e.jsx(a,{item:!0,xs:2.7,children:e.jsx(I,{style:{position:"relative",height:"100%"},children:e.jsx(L,{children:e.jsx(a,{container:!0,spacing:3,children:e.jsxs(a,{item:!0,children:[e.jsx(i,{variant:"h5",sx:{color:"#1c3c70"},marginBottom:3,children:"Shipped But Not Invoiced"}),e.jsx(i,{variant:"h6",mb:1,sx:{color:"#f19c53"},children:"Finding Amount($)"}),e.jsx(C,{variant:"h3",sx:{color:r.palette.accent.main},children:g?e.jsx(i,{variant:"h6",sx:{color:r.palette.accent.main},children:"Loading data..."}):e.jsx(C,{variant:"h3",sx:{color:"#000000"},children:c?`$${new Intl.NumberFormat().format(c.overbillIdentified)}`:"No data available"})})]})})})})}),e.jsx(a,{item:!0,xs:3.5,children:e.jsx(Be,{})}),e.jsx(a,{item:!0,xs:2.8,children:e.jsx(Ae,{})}),e.jsx(a,{item:!0,xs:3,children:e.jsx(Le,{})})]}),e.jsxs(a,{container:!0,spacing:3,mb:3,children:[e.jsx(a,{item:!0,xs:8,children:e.jsx(i,{variant:"h3",children:"Efficiency Assesment"})}),e.jsx(a,{item:!0,xs:4,textAlign:"end",children:e.jsx(Re,{})}),e.jsx(a,{})]}),e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:6,children:e.jsxs(L,{children:[e.jsxs(a,{container:!0,spacing:2,children:[e.jsxs(a,{item:!0,xs:12,mb:1,children:[e.jsx(i,{variant:"h3",mb:1,sx:{color:"#1c3c70"},children:"Scope for Additional Invoice($)"}),e.jsx(C,{variant:"h3",sx:{color:r.palette.text.main},children:g?e.jsx(i,{variant:"h6",sx:{color:r.palette.text.main},children:"Loading data..."}):e.jsx(C,{variant:"h3",sx:{color:r.palette.text.main},children:c?`$${new Intl.NumberFormat().format(c.overbillIdentified)}`:"No data available"})})]}),e.jsxs(a,{item:!0,xs:5,mb:1,children:[e.jsx(i,{variant:"h6",mb:1,sx:{color:"#f19c53"},children:"PO Lines Scanned"}),e.jsx(C,{variant:"h3",sx:{color:r.palette.text.main},children:c?`${new Intl.NumberFormat().format(c.poLinedScanned)}`:"No data available"})]}),e.jsxs(a,{item:!0,xs:7,mb:1,children:[e.jsx(i,{variant:"h6",mb:1,sx:{color:"#18244d"},children:"Total Invoice Lines Scope Identified"}),e.jsx(C,{variant:"h3",sx:{color:r.palette.text.main},children:c?`${new Intl.NumberFormat().format(c.invoiceScanned)}`:"No data available"})]}),e.jsx(a,{item:!0,xs:12,children:e.jsx(z,{})}),e.jsx(a,{item:!0,xs:12,mb:2,children:e.jsxs(w,{direction:"row",spacing:3,justifyContent:"space-between",children:[e.jsx(i,{variant:"h6",mb:1,sx:{color:"#2edd95"},children:"PO Period Audited"}),e.jsx(C,{variant:"h6",sx:{color:r.palette.text.main},children:c?`${B(c.periodCoveredFrom)} to ${B(c.periodCoveredTo)}`:"No data available"})]})})]}),e.jsx(I,{mb:2,children:e.jsx(z,{})}),e.jsxs(I,{children:[e.jsxs(i,{variant:"h4",marginBottom:3,children:[" ","Efforts to Audit"]}),e.jsx(K,{data:ce})]})]})}),e.jsx(a,{item:!0,xs:6,children:e.jsxs(L,{children:[e.jsxs(a,{container:!0,spacing:2,children:[e.jsxs(a,{item:!0,xs:12,mb:1,children:[e.jsx(i,{variant:"h3",mb:1,sx:{color:"#1c3c70"},children:"Claim Submitted($)"}),e.jsx(i,{variant:"h3",sx:{color:r.palette.text.main},children:g?e.jsx(i,{variant:"h6",sx:{color:r.palette.text.main},children:"Loading data..."}):e.jsx(C,{variant:"h3",sx:{color:r.palette.text.main},children:s?`$${new Intl.NumberFormat().format(s.overbillIdentified)}`:"No data available"})})]}),e.jsxs(a,{item:!0,xs:6,mb:1,children:[e.jsx(i,{variant:"h6",mb:1,sx:{color:"#f19c53"},children:"PO Lines Submitted"}),e.jsx(C,{variant:"h3",sx:{color:r.palette.text.main},children:s?`${new Intl.NumberFormat().format(s.poLinedScanned)}`:"No data available"})]}),e.jsxs(a,{item:!0,xs:6,mb:1,children:[e.jsx(i,{variant:"h6",mb:1,sx:{color:"#18244d"},children:"Invoice Lines Submitted"}),e.jsx(C,{variant:"h3",sx:{color:r.palette.text.main},children:s?`${new Intl.NumberFormat().format(s.invoiceScanned)}`:"No data available"})]}),e.jsx(a,{item:!0,xs:12,children:e.jsx(z,{})}),e.jsx(a,{item:!0,xs:12,mb:2,children:e.jsxs(w,{direction:"row",spacing:3,justifyContent:"space-between",children:[e.jsx(i,{variant:"h6",mb:1,sx:{color:"#2edd95"},children:"PO Period Submitted"}),e.jsx(C,{variant:"h6",sx:{color:r.palette.text.main},children:s?`${B(s.periodCoveredFrom)} to ${B(s.periodCoveredTo)}`:"No data available"})]})})]}),e.jsx(I,{mb:2,children:e.jsx(z,{})}),e.jsxs(I,{children:[e.jsxs(i,{variant:"h4",marginBottom:3,children:[" ","Efforts to Submit Invoicing"]}),e.jsx(K,{data:de})]})]})})]})]})};export{pt as default};