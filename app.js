const T=[["index.html","首页"],["json.html","JSON"],["text.html","文本"],["encode.html","编码"],["time.html","时间戳"],["color.html","颜色"],["gen.html","生成器"]];
const $=s=>document.querySelector(s);
const cur=(location.pathname.split("/").pop()||"index").replace(".html","")+".html";
document.body.className=cur=="index.html"?"home":"tool";
document.head.insertAdjacentHTML("beforeend",'<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27%3E%3Ctext y=%27.9em%27 font-size=%2790%27%3E🧰%3C/text%3E%3C/svg%3E">');
document.body.insertAdjacentHTML("afterbegin",`<div class="bg"><i></i><i></i><i></i><i></i></div><header><nav><b>小工具箱</b>${T.map(([h,n])=>`<a href="${h}"${h==cur?' class="on"':""}>${n}</a>`).join("")}</nav></header>`);
document.body.insertAdjacentHTML("beforeend","<footer>所有处理都在你的浏览器本地完成，不会上传任何内容。</footer>");
document.addEventListener("pointermove",e=>{const t=e.target.closest&&e.target.closest(".tile,button");if(!t)return;const r=t.getBoundingClientRect();t.style.setProperty("--mx",e.clientX-r.left+"px");t.style.setProperty("--my",e.clientY-r.top+"px")});
function say(t,e){const x=$("#msg");if(x){x.textContent=t;x.className="msg"+(e?" err":"")}}
async function cp(t,el){try{await navigator.clipboard.writeText(t);if(el.select)el.select();else{const o=el.textContent;el.textContent="已复制";setTimeout(()=>el.textContent=o,1200)}}catch(e){}}
