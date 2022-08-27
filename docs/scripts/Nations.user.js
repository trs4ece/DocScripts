// ==UserScript==
// @name         Doc: Nations
// @namespace    https://politicsandwar.com/nation/id=19818
// @version      0.1
// @description  Improves the Nations page UI
// @author       BlackAsLight
// @match        https://politicsandwar.com/nations/
// @include      https://politicsandwar.com/index.php?id=15*
// @icon         https://avatars.githubusercontent.com/u/44320105
// @grant        none
// ==/UserScript==
'use strict';
(()=>{function l(t,o=null,...e){if(typeof t!="string")return t(o,...e);let n=document.createElement(t);return o&&Object.entries(o).forEach(([i,a])=>typeof a=="boolean"?n.toggleAttribute(i,a):n.setAttribute(i,a)),e.flat().forEach(async i=>{if(i==null)return;if(i.toString()!=="[object Promise]")return n.append(i);let a=l("div",null);n.append(a),i=await i,a.parentElement&&(a.parentElement.insertBefore(i,a),a.remove())}),n}var g;(function(t){t[t.Money=0]="Money",t[t.Oil=1]="Oil",t[t.Coal=2]="Coal",t[t.Iron=3]="Iron",t[t.Bauxite=4]="Bauxite",t[t.Lead=5]="Lead",t[t.Uranium=6]="Uranium",t[t.Food=7]="Food",t[t.Gasoline=8]="Gasoline",t[t.Steel=9]="Steel",t[t.Aluminum=10]="Aluminum",t[t.Munitions=11]="Munitions",t[t.Credits=12]="Credits"})(g||(g={}));function m(t,o){return o(t),t}if(document.querySelector("#Doc_Nations"))throw Error("This script was already injected...");document.body.append(l("div",{id:"Doc_Nations",style:"display: none;"}));var r="Doc_N1",s="Doc_N2",p=document.querySelector('form[method="GET"]');p.parentElement?.insertBefore(l("div",null,l("label",{for:"Doc_Score"},"Nation Score: "),m(l("input",{id:"Doc_Score",type:"number",value:localStorage.getItem(r)??0}),t=>t.addEventListener("change",o=>{let e=o.target,n=parseFloat(e.value);if(`${n}`=="NaN")return;let i=new Date;e.nextSibling&&(e.nextSibling.textContent=i.toJSON()),localStorage.setItem(s,`${i.getTime()}`),localStorage.setItem(r,`${n}`),d(n)})),l("br",null),new Date(parseInt(localStorage.getItem(s)??"0")).toJSON(),m(l("button",null,"Refresh"),t=>t.addEventListener("click",async o=>{let e=o.target;e.toggleAttribute("disabled",!0);let n=parseFloat(new DOMParser().parseFromString(await(await fetch("https://politicsandwar.com/nation/war/")).text(),"text/html").querySelector("a.btn.btn-warning.btn-lg").href.split("?")[1].split("&").find(a=>a.startsWith("keyword="))?.slice(8)??"0");console.log(`Score: ${n}`);let i=new Date;e.previousSibling&&(e.previousSibling.textContent=i.toJSON()),localStorage.setItem(s,`${i.getTime()}`),localStorage.setItem(r,`${n}`),d(n),e.previousElementSibling.value=`${n}`,e.toggleAttribute("disabled",!1)}))),p.nextElementSibling);d(parseFloat(localStorage.getItem(r)??"0"));function f(t,o){return o*.4<=t&&t<=o*2.5}function c(t,o){return o*.75<=t&&t<=o*1.75}function d(t){[...document.querySelectorAll(".nationtable tr")].slice(1).forEach(o=>{let e=o.lastElementChild,n=parseFloat(e.lastChild?.textContent?.replaceAll(",",""));[...e.querySelectorAll("img")].forEach(i=>{i.src!=="https://politicsandwar.com/img/icons/16/plus_shield.png"&&i.remove()}),f(n,t)&&e.insertBefore(l("img",{src:"https://politicsandwar.com/img/icons/16/emotion_spy.png"}),e.lastChild),c(n,t)?c(t,n)?e.insertBefore(l("img",{src:"https://docscripts.stagintin.com/icons/green_red.png"}),e.lastChild):e.insertBefore(l("img",{src:"https://docscripts.stagintin.com/icons/green.png"}),e.lastChild):c(t,n)&&e.insertBefore(l("img",{src:"https://docscripts.stagintin.com/icons/red.png"}),e.lastChild)})}})();
