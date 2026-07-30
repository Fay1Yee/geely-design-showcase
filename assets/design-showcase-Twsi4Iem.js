import"./modulepreload-polyfill-pages.js";const d=new URL("/geely-design-showcase/",window.location.origin).href.replace(/\/$/,""),u=["localhost","127.0.0.1"].includes(window.location.hostname)&&window.location.port==="4186",f=u?`${window.location.protocol}//${window.location.hostname}:4187`:d,$=u?`${window.location.protocol}//${window.location.hostname}:4188`:d,S=u?`${window.location.protocol}//${window.location.hostname}:5174`:d,c=[{id:"brand-desktop",track:"brand",type:"desktop",index:"01",label:"桌面端",eyebrow:"BRAND · DESKTOP",title:"品牌官网叙事",description:"以全球品牌主张为起点，串联品牌、设计、责任与全球足迹。",url:`${f}/index.html#brand`,width:1440,height:900},{id:"brand-pad",track:"brand",type:"pad",index:"02",label:"Pad 端",eyebrow:"BRAND · PAD",title:"沉浸式品牌画布",description:"为 834 × 1194 视口重组章节节奏，保留更完整的视觉张力。",url:`${f}/brand-pad.html`,width:834,height:1194},{id:"brand-mobile",track:"brand",type:"mobile",index:"03",label:"手机端",eyebrow:"BRAND · MOBILE",title:"掌上品牌旅程",description:"用单手浏览节奏压缩信息密度，让关键品牌记忆持续发生。",url:`${f}/brand-mobile.html`,width:390,height:844},{id:"brand-timeline",track:"brand",type:"timeline",index:"04",label:"时间轴",eyebrow:"BRAND · HERITAGE",title:"品牌传承档案",description:"以可浏览的档案章节呈现 1986—2026 的品牌成长与关键节点。",url:u?`${S}/brand-timeline-a.html`:`${d}/brand-heritage-timeline-v3.html`,width:1440,height:900},{id:"technology-desktop",track:"technology",type:"desktop",index:"05",label:"桌面端",eyebrow:"TECHNOLOGY · DESKTOP",title:"技术体系总览",description:"从架构、智能座舱、电驱到安全，建立可信且可理解的技术叙事。",url:`${$}/technology.html`,width:1440,height:900},{id:"technology-pad",track:"technology",type:"pad",index:"06",label:"Pad 端",eyebrow:"TECHNOLOGY · PAD",title:"技术探索界面",description:"强化系统关系与证据展示，让复杂技术在触控场景中更易探索。",url:`${$}/technology-pad.html`,width:834,height:1194},{id:"technology-mobile",track:"technology",type:"mobile",index:"07",label:"手机端",eyebrow:"TECHNOLOGY · MOBILE",title:"移动技术叙事",description:"以短章节、横向卡片和抽屉交互承载高密度技术信息。",url:`${$}/technology-mobile.html`,width:390,height:844},{id:"technology-timeline",track:"technology",type:"timeline",index:"08",label:"时间轴",eyebrow:"TECHNOLOGY · MILESTONES",title:"工程进化轨道",description:"沿 1997—2026 的工程轨道，查看平台、智能化与安全能力演进。",url:u?`${S}/technology-timeline-a.html`:`${d}/technology-timeline-v2.html`,width:1440,height:900}],C={arrowLeft:'<path d="M19 12H5m6-6-6 6 6 6"/>',arrowRight:'<path d="M5 12h14m-6-6 6 6-6 6"/>',arrowUpRight:'<path d="M7 17 17 7M8 7h9v9"/>',fullscreen:'<path d="M8 3H3v5m13-5h5v5M8 21H3v-5m13 5h5v-5"/>',desktop:'<rect x="3" y="4" width="18" height="13" rx="1.5"/><path d="M8 21h8m-4-4v4"/>',pad:'<rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M11 18.5h2"/>',mobile:'<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/>',timeline:'<path d="M4 6h5m6 0h5M4 12h9m6 0h1M4 18h2m6 0h8"/><circle cx="12" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="9" cy="18" r="2"/>',pause:'<path d="M8 5v14m8-14v14"/>',play:'<path d="m8 5 11 7-11 7Z"/>',pulse:'<path d="M3 12h4l2.2-5 4 10 2.2-5H21"/>'};function n(e,a=18,i=!1){return`<svg width="${a}" height="${a}" viewBox="0 0 24 24" fill="${i?"currentColor":"none"}" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${C[e]}</svg>`}function A(e,a=13,i=!1){return n(e==="timeline"?"timeline":e,a,i)}function w(e,a=!1){return`<span class="track-mark track-mark--${e}${a?" is-compact":""}"><i aria-hidden="true"></i>${e==="brand"?"BRAND":"TECH"}</span>`}function O(){return`
    <section class="launch-gate" aria-label="启动设计展示">
      <div class="launch-grid" aria-hidden="true"></div>
      <header class="launch-header">
        <img src="${d}/assets/logo-white.svg" alt="GEELY" />
        <span>DESIGN REVIEW · 2026</span>
      </header>
      <div class="launch-orbit launch-orbit--one" aria-hidden="true"></div>
      <div class="launch-orbit launch-orbit--two" aria-hidden="true"></div>
      <div class="launch-copy">
        <p class="launch-kicker"><span>DUAL TRACK</span><i></i><span>ONE ENTRY</span></p>
        <h1>Brand <em>×</em> Technology<span>三端界面与时间轴设计展示</span></h1>
        <p class="launch-intro">一次启动，依次进入桌面端、Pad、手机端与时间轴。<br />8 个真实页面，沿两条设计轨道连续播放。</p>
        <button class="launch-button" id="startShow" type="button">
          <span class="launch-button__pulse" aria-hidden="true"></span>
          <span class="launch-button__icon">${n("play",22,!0)}</span>
          <span><b>一键启动设计展示</b><small>START THE SHOW</small></span>
          ${n("arrowRight")}
        </button>
      </div>
      <div class="launch-tracks" aria-label="展示内容">
        <div>${w("brand")}<p>DESKTOP / PAD / MOBILE / HERITAGE</p></div>
        <div>${w("technology")}<p>DESKTOP / PAD / MOBILE / MILESTONES</p></div>
      </div>
      <footer class="launch-footer">
        <span>GEELY GLOBAL WEB EXPERIENCE</span>
        <span>08 CHAPTERS · 02 TRACKS · 01 SHOW</span>
      </footer>
    </section>
  `}const P=document.querySelector("#root");P.innerHTML=`
  <main class="showcase">
    <div class="showcase-ambient" aria-hidden="true"></div>
    <header class="showcase-header">
      <div class="showcase-brand">
        <img src="${d}/assets/logo-white.svg" alt="GEELY" />
        <span></span>
        <p>BRAND × TECHNOLOGY</p>
      </div>
      <div class="showcase-status">
        <span id="playStatus"><i></i><b>MANUAL</b></span>
        <b id="chapterCount">01 / 08</b>
      </div>
      <div class="showcase-actions">
        <button id="openCurrent" type="button" title="独立打开当前页面">${n("arrowUpRight",16)}<span>独立打开</span></button>
        <button id="enterFullscreen" type="button" title="进入全屏">${n("fullscreen",16)}<span>全屏</span></button>
      </div>
    </header>
    <div class="showcase-layout">
      <section class="stage">
        <header class="stage-heading">
          <div id="stageMeta"></div>
          <p>${n("pulse",14,!0)} LIVE PREVIEW</p>
        </header>
        <div class="stage-frame" id="stageFrame">
          <div class="frame-glow" aria-hidden="true"></div>
        </div>
        <footer class="stage-footer">
          <div class="stage-copy">
            <span id="stageEyebrow"></span>
            <h1 id="stageTitle"></h1>
            <p id="stageDescription"></p>
          </div>
          <div class="stage-controls">
            <button id="previousChapter" type="button" aria-label="上一章节">${n("arrowLeft")}</button>
            <button class="play-control" id="togglePlay" type="button" aria-label="继续自动播放">${n("play",18,!0)}</button>
            <button id="nextChapter" type="button" aria-label="下一章节">${n("arrowRight")}</button>
          </div>
        </footer>
        <div class="chapter-progress" aria-hidden="true"><span id="chapterProgress"></span></div>
      </section>
      <aside class="chapter-rail" id="chapterRail" aria-label="设计展示章节"></aside>
    </div>
    ${O()}
  </main>
`;const t={showcase:document.querySelector(".showcase"),playStatus:document.querySelector("#playStatus"),chapterCount:document.querySelector("#chapterCount"),stageMeta:document.querySelector("#stageMeta"),stageFrame:document.querySelector("#stageFrame"),stageEyebrow:document.querySelector("#stageEyebrow"),stageTitle:document.querySelector("#stageTitle"),stageDescription:document.querySelector("#stageDescription"),previous:document.querySelector("#previousChapter"),toggle:document.querySelector("#togglePlay"),next:document.querySelector("#nextChapter"),progress:document.querySelector("#chapterProgress"),rail:document.querySelector("#chapterRail")};let s=0,l=!1,m=!1,L,p,x;const M=8e3;function R(){const e=["brand","technology"];t.rail.innerHTML=`
    <div class="rail-heading"><span>SHOW FLOW</span><small>08 CHAPTERS</small></div>
    <div class="rail-groups">
      ${e.map(a=>{const i=c.filter(r=>r.track===a);return`
          <section class="rail-group rail-group--${a}">
            <header>${w(a)}<span>04 SCENES</span></header>
            <ol>
              ${i.map(r=>{const o=c.indexOf(r);return`
                  <li class="${`${o===s?"is-active":""} ${o<s?"is-past":""}`}">
                    <button type="button" data-chapter="${o}">
                      <span class="rail-node" aria-hidden="true">${A(r.type,13,o===s)}</span>
                      <span class="rail-copy"><b>${r.label}</b><small>${r.title}</small></span>
                      <span class="rail-index">${r.index}</span>
                    </button>
                  </li>
                `}).join("")}
            </ol>
          </section>
        `}).join("")}
    </div>
    <div class="rail-shortcuts"><span>← → 切换</span><span>SPACE 暂停</span></div>
  `,t.rail.querySelectorAll("[data-chapter]").forEach(a=>{a.addEventListener("click",()=>g(Number(a.dataset.chapter),!1))})}function q(e,a,i,r){const o=()=>{const h=Math.max(220,a.clientWidth-34),y=Math.max(280,a.clientHeight-34),v=Math.max(.18,Math.min(h/e.width,y/e.height,1));i.style.width=`${e.width*v}px`,i.style.height=`${e.height*v}px`,r.style.width=`${e.width}px`,r.style.height=`${e.height}px`,r.style.transform=`scale(${v})`};p==null||p.disconnect(),p=new ResizeObserver(o),p.observe(a),o()}function H(e){window.clearTimeout(x),t.stageFrame.classList.remove("is-loaded"),t.stageFrame.innerHTML=`
    <div class="frame-glow" aria-hidden="true"></div>
    <div class="preview-host preview-host--${e.type}">
      <div class="preview-frame" style="--frame-radius: ${e.type==="mobile"?"42px":e.type==="pad"?"30px":"12px"}">
        <div class="preview-surface">
          <iframe src="${e.url}" title="${e.eyebrow} ${e.title}" allow="autoplay; fullscreen"></iframe>
        </div>
      </div>
      <span class="preview-dimension" aria-hidden="true">${e.width} × ${e.height}</span>
    </div>
    <div class="frame-loader" role="status"><i></i><span>正在载入真实页面</span></div>
  `;const a=t.stageFrame.querySelector(".preview-host"),i=t.stageFrame.querySelector(".preview-frame"),r=t.stageFrame.querySelector(".preview-surface"),o=t.stageFrame.querySelector("iframe");q(e,a,i,r);const h=()=>{var y;o.isConnected&&(t.stageFrame.classList.add("is-loaded"),(y=t.stageFrame.querySelector(".frame-loader"))==null||y.remove())};o.addEventListener("load",h,{once:!0}),x=window.setTimeout(h,1800)}function E(){t.playStatus.classList.toggle("is-live",l),t.playStatus.querySelector("b").textContent=l?"AUTO PLAY":"MANUAL",t.chapterCount.textContent=`${String(s+1).padStart(2,"0")} / ${String(c.length).padStart(2,"0")}`,t.toggle.innerHTML=n(l?"pause":"play",18,!0),t.toggle.setAttribute("aria-label",l?"暂停自动播放":"继续自动播放")}function T(){window.clearTimeout(L),t.progress.classList.remove("is-running"),t.progress.style.setProperty("--chapter-duration",`${M}ms`),t.progress.offsetWidth,!(!l||!m)&&(t.progress.classList.add("is-running"),L=window.setTimeout(()=>{if(s===c.length-1){l=!1,E();return}s+=1,b()},M))}function b(){const e=c[s];t.stageMeta.innerHTML=`${w(e.track,!0)}<span class="stage-slash">/</span><span>${e.label}</span>`,t.stageEyebrow.textContent=e.eyebrow,t.stageTitle.textContent=e.title,t.stageDescription.textContent=e.description,t.previous.disabled=s===0,t.next.setAttribute("aria-label",s===c.length-1?"回到开场":"下一章节"),H(e),R(),E(),T()}function g(e,a=!1){m=!0,l=a,s=Math.max(0,Math.min(c.length-1,e)),t.showcase.classList.add("is-started"),b()}function D(){m=!0,l=!0,s=0,t.showcase.classList.add("is-started"),b()}function k(){m=!0,l=!l,t.showcase.classList.add("is-started"),E(),T()}document.querySelector("#startShow").addEventListener("click",D);document.querySelector("#openCurrent").addEventListener("click",()=>{window.open(c[s].url,"_blank","noopener,noreferrer")});document.querySelector("#enterFullscreen").addEventListener("click",()=>{var e,a;(a=(e=document.documentElement).requestFullscreen)==null||a.call(e)});t.previous.addEventListener("click",()=>g(s-1,!1));t.next.addEventListener("click",()=>{g(s===c.length-1?0:s+1,!1)});t.toggle.addEventListener("click",k);window.addEventListener("keydown",e=>{var a,i;!m||e.target instanceof Element&&e.target.closest("button, a, input, textarea, iframe")||(e.key==="ArrowLeft"&&g(s-1,!1),e.key==="ArrowRight"&&g(s+1,!1),e.code==="Space"&&(e.preventDefault(),k()),e.key.toLowerCase()==="f"&&((i=(a=document.documentElement).requestFullscreen)==null||i.call(a)))});b();
