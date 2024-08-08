import{r as x,j as e}from"./index-d9b39f5e.js";import{P as k}from"./PageContainer-fd42dc94.js";import{B as W,H as R}from"./Breadcrumb-9f189444.js";import{D as S}from"./DashboardCard-4e1c1671.js";import{C as c}from"./CustomTextField-f1d352d2.js";import{a as T}from"./axios-dd1c8fc2.js";/* empty css                  */import{e as j}from"./eventEmitter-d2c8b369.js";import{X as Y,h as u}from"./index.es-66d76cde.js";import{c as A}from"./config-ed4f877b.js";import{s as D,T as s,B as l}from"./Box-1e7caa39.js";import{B as p}from"./Button-8a3881c4.js";import{u as P,G as r}from"./List-dbd24109.js";import{D as B,a as w,b as E}from"./DialogTitle-7a67cf89.js";import{I as F}from"./IconX-9d530b49.js";import{S as U}from"./Stack-565e4b37.js";import{I as z}from"./IconPencil-5d953256.js";import{c as $}from"./createReactComponent-feeb99fb.js";import"./IconLayoutDashboard-da03b59e.js";import"./Card-4abafe44.js";import"./CardContent-16323af8.js";import"./TextField-0fb86b85.js";import"./FormControl-91b0f058.js";import"./Select-be6fca1e.js";import"./InputLabel-648a476c.js";import"./styled-e4592642.js";import"./useThemeProps-91a04794.js";var L=$("trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]]);D(s)(({theme:o})=>({color:o.palette.primary.main,marginBottom:"10px"}));const N=D(p)(({theme:o})=>({minWidth:"30px",height:"30px",backgroundColor:"red",color:"white",right:"15px",top:"15px","&:hover":{backgroundColor:o.palette.secondary.main,color:"white"}})),V={headRow:{style:{backgroundColor:"#285a9e"}},headCells:{style:{padding:"10px 15px",backgroundColor:"#285a9e",color:"white",fontWeight:"bold"}},cells:{style:{padding:"10px 15px"}}},X=()=>{const o=P(),[y,h]=x.useState(!1),[g,b]=x.useState([]),v=A.UniUrl,C=[{name:"Dispute ID",selector:t=>t.Id,sortable:!0,cell:(t,a,n,i)=>e.jsx(l,{style:{width:"850px"},children:e.jsx(s,{variant:"body1",fontWeight:"500",style:{color:o.palette.primary.main},children:t.Id})})},{name:"Amount ($)",selector:t=>t.Amount,sortable:!0,cell:(t,a,n,i)=>e.jsx(l,{children:e.jsx(s,{variant:"body1",fontWeight:"500",style:{color:o.palette.text.dark},children:t.Amount})})},{name:"Refund ($)",selector:t=>t.Refund,sortable:!0,cell:(t,a,n,i)=>e.jsx(l,{children:e.jsx(s,{variant:"body1",fontWeight:"500",style:{color:o.palette.text.dark},children:t.Refund})})},{name:"Created By",selector:t=>t.Created,sortable:!0,cell:(t,a,n,i)=>e.jsx(l,{children:e.jsx(s,{variant:"body1",fontWeight:"500",style:{color:o.palette.text.dark},children:t.Created})})},{name:"Create Date",selector:t=>t.Date,sortable:!0,formatter:t=>u(t.Date).format("MM/DD/YY"),cell:(t,a,n,i)=>e.jsx(l,{children:e.jsx(s,{variant:"body1",fontWeight:"500",style:{color:o.palette.text.dark},children:u(t.Date).format("MM/DD/YY")})})},{name:"Payment Date",selector:t=>t.Payment,sortable:!0,formatter:t=>u(t.Payment).format("MM/DD/YY"),cell:(t,a,n,i)=>e.jsx(l,{children:e.jsx(s,{variant:"body1",fontWeight:"500",style:{color:o.palette.text.dark},children:u(t.Payment).format("MM/DD/YY")})})},{name:"Payment ID",selector:t=>t.PaymentId,sortable:!0,cell:(t,a,n,i)=>e.jsx(l,{children:e.jsx(s,{variant:"body1",fontWeight:"500",style:{color:o.palette.text.dark},children:t.PaymentId})})},{name:"Resolve Date",selector:t=>t.ResolveDate,sortable:!0,formatter:t=>u(t.ResolveDate).format("MM/DD/YY"),cell:(t,a,n,i)=>e.jsx(l,{children:e.jsx(s,{variant:"body1",fontWeight:"500",style:{color:o.palette.text.dark},children:u(t.ResolveDate).format("MM/DD/YY")})})},{name:"Reason",selector:t=>t.Reason,sortable:!0,cell:(t,a,n,i)=>e.jsx(l,{style:{width:"400px"},children:e.jsx(s,{variant:"body1",fontWeight:"500",style:{color:o.palette.text.dark},children:t.Reason})})},{name:"TAT",selector:t=>t.Tat,sortable:!0,cell:(t,a,n,i)=>e.jsx(l,{children:e.jsx(s,{variant:"body1",fontWeight:"500",style:{color:o.palette.text.dark},children:t.Tat})})},{name:"Status",selector:t=>t.Status,sortable:!0,cell:(t,a,n,i)=>e.jsx(l,{children:e.jsx(s,{variant:"body2",style:{textAlign:"center",color:"#2edd95"},children:t.Status})})},{name:"Action",selector:t=>t.Action,sortable:!0,cell:(t,a,n,i)=>e.jsxs(U,{direction:"row",alignItems:"center",children:[e.jsx(p,{size:"small",startIcon:e.jsx(z,{size:"16"}),onClick:I,style:{minWidth:"0"}}),e.jsx(p,{size:"small",startIcon:e.jsx(L,{size:"16"}),style:{minWidth:"0"}})]})}],m=async()=>{const t=sessionStorage.getItem("selectedVendorId");try{const a=sessionStorage.getItem("token"),n=`${v}/shortage/getManageDisputedData?vendorId=${t}&disputeType=Coop`;if(!t){console.warn("No selectedVendorId found, cannot fetch data.");return}const M=(await T.get(n,{headers:{Authorization:`Bearer ${a}`}})).data.data.map(d=>({Id:d.disputeId,Amount:parseFloat(d.totalDisputedAmount).toFixed(2).toLocaleString("en-US",{maximumFractionDigits:2}),Refund:parseFloat(d.approvedAmount).toFixed(2).toLocaleString("en-US",{maximumFractionDigits:2}),Created:"DJ",Date:u(d.disputeDate).format("MM/DD/YY"),Payment:u(d.paymentDate).format("MM/DD/YY"),PaymentId:d.paymentId,ResolveDate:u(d.resolvedDate).format("MM/DD/YY"),Reason:d.disputeReason,Tat:u(d.resolvedDate).diff(u(d.disputeDate),"days"),Status:d.disputeStatus.charAt(0).toUpperCase()+d.disputeStatus.slice(1).toLowerCase(),Action:""}));b(M)}catch(a){console.error("Error fetching data:",a)}};x.useEffect(()=>(m(),j.on("vendorSelected",()=>{m()}),()=>{j.off("vendorSelected",m)}),[]);const f=()=>{h(!1)},I=()=>{h(!0)};return e.jsx(S,{className:"dispute-table",title:e.jsx(s,{variant:"h4",mb:2,children:"Dispute Table"}),children:e.jsxs(l,{children:[e.jsx(Y,{columns:C,data:g,customStyles:V,pagination:!0}),e.jsxs(B,{open:y,onClose:f,children:[e.jsx(w,{children:e.jsxs(l,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(s,{variant:"h6",children:"Edit Dispute"}),e.jsx(N,{onClick:f,children:e.jsx(F,{})})]})}),e.jsx(E,{children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,xs:12,children:e.jsx(c,{id:"dispute-id",label:"Dispute ID",fullWidth:!0,variant:"outlined"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(c,{id:"amount",label:"Amount",fullWidth:!0,variant:"outlined"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(c,{id:"refund",label:"Refund",fullWidth:!0,variant:"outlined"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(c,{id:"created-by",label:"Created By",fullWidth:!0,variant:"outlined"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(c,{id:"create-date",label:"Create Date",fullWidth:!0,variant:"outlined"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(c,{id:"payment-date",label:"Payment Date",fullWidth:!0,variant:"outlined"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(c,{id:"payment-id",label:"Payment ID",fullWidth:!0,variant:"outlined"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(c,{id:"resolve-date",label:"Resolve Date",fullWidth:!0,variant:"outlined"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(c,{id:"reason",label:"Reason",fullWidth:!0,variant:"outlined"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(c,{id:"tat",label:"TAT",fullWidth:!0,variant:"outlined"})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(c,{id:"status",label:"Status",fullWidth:!0,variant:"outlined"})})]})})]})]})})},De=()=>e.jsx(k,{title:"Manage Dispute",children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,xs:12,children:e.jsx(W,{titles:["Excess Coop Billing","Manage Dispute"]})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(R,{title:"Manage Dispute"})}),e.jsx(r,{item:!0,xs:12,className:"dispute-table",children:e.jsx(X,{})})]})});export{De as default};