import"./modulepreload-polyfill-Dezn_h7o.js";var e=new URL(`/geely-design-showcase/`,window.location.origin).href.replace(/\/$/,``),t=[`localhost`,`127.0.0.1`].includes(window.location.hostname)&&window.location.port===`4186`,n=t?`${window.location.protocol}//${window.location.hostname}:4187`:e,r=t?`${window.location.protocol}//${window.location.hostname}:4188`:e,i=[{id:`brand-desktop`,track:`brand`,type:`desktop`,index:`01`,label:`桌面端`,eyebrow:`BRAND · DESKTOP`,title:`品牌官网叙事`,description:`以全球品牌主张为起点，串联品牌、设计、责任与全球足迹。`,url:`${n}/index.html#brand`,width:1440,height:900},{id:`brand-mobile`,track:`brand`,type:`mobile`,index:`02`,label:`手机端`,eyebrow:`BRAND · MOBILE`,title:`掌上品牌旅程`,description:`用单手浏览节奏压缩信息密度，让关键品牌记忆持续发生。`,url:`${n}/brand-mobile.html`,width:390,height:844},{id:`brand-pad`,track:`brand`,type:`pad`,index:`03`,label:`Pad 端`,eyebrow:`BRAND · PAD`,title:`沉浸式品牌画布`,description:`为 834 × 1194 视口重组章节节奏，保留更完整的视觉张力。`,url:`${n}/brand-pad.html`,width:834,height:1194},{id:`technology-desktop`,track:`technology`,type:`desktop`,index:`04`,label:`桌面端`,eyebrow:`TECHNOLOGY · DESKTOP`,title:`技术体系总览`,description:`从架构、智能座舱、电驱到安全，建立可信且可理解的技术叙事。`,url:`${r}/technology.html`,width:1440,height:900},{id:`technology-mobile`,track:`technology`,type:`mobile`,index:`05`,label:`手机端`,eyebrow:`TECHNOLOGY · MOBILE`,title:`移动技术叙事`,description:`以短章节、横向卡片和抽屉交互承载高密度技术信息。`,url:`${r}/technology-mobile.html`,width:390,height:844},{id:`technology-pad`,track:`technology`,type:`pad`,index:`06`,label:`Pad 端`,eyebrow:`TECHNOLOGY · PAD`,title:`技术探索界面`,description:`强化系统关系与证据展示，让复杂技术在触控场景中更易探索。`,url:`${r}/technology-pad.html`,width:834,height:1194}],a={arrowLeft:`<path d="M19 12H5m6-6-6 6 6 6"/>`,arrowRight:`<path d="M5 12h14m-6-6 6 6-6 6"/>`,arrowUpRight:`<path d="M7 17 17 7M8 7h9v9"/>`,fullscreen:`<path d="M8 3H3v5m13-5h5v5M8 21H3v-5m13 5h5v-5"/>`,desktop:`<rect x="3" y="4" width="18" height="13" rx="1.5"/><path d="M8 21h8m-4-4v4"/>`,pad:`<rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M11 18.5h2"/>`,mobile:`<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/>`,pause:`<path d="M8 5v14m8-14v14"/>`,play:`<path d="m8 5 11 7-11 7Z"/>`,pulse:`<path d="M3 12h4l2.2-5 4 10 2.2-5H21"/>`};function o(e,t=18,n=!1){return`<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="${n?`currentColor`:`none`}" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${a[e]}</svg>`}function s(e,t=13,n=!1){return o(e,t,n)}function c(e,t=!1){return`<span class="track-mark track-mark--${e}${t?` is-compact`:``}"><i aria-hidden="true"></i>${e===`brand`?`BRAND`:`TECH`}</span>`}function l(){return`
    <section class="launch-gate" aria-label="启动设计展示">
      <div class="launch-grid" aria-hidden="true"></div>
      <header class="launch-header">
        <img src="${e}/assets/logo-white.svg" alt="GEELY" />
        <span>DESIGN REVIEW · 2026</span>
      </header>
      <div class="launch-orbit launch-orbit--one" aria-hidden="true"></div>
      <div class="launch-orbit launch-orbit--two" aria-hidden="true"></div>
      <div class="launch-copy">
        <p class="launch-kicker"><span>DUAL TRACK</span><i></i><span>ONE ENTRY</span></p>
        <h1>Brand <em>×</em> Technology<span>品牌与技术三端界面设计展示</span></h1>
        <p class="launch-intro">一次启动，依次进入桌面端、Pad 与手机端。<br />6 个真实页面，沿两条设计轨道连续播放。</p>
        <button class="launch-button" id="startShow" type="button">
          <span class="launch-button__pulse" aria-hidden="true"></span>
          <span class="launch-button__icon">${o(`play`,22,!0)}</span>
          <span><b>一键启动设计展示</b><small>START THE SHOW</small></span>
          ${o(`arrowRight`)}
        </button>
      </div>
      <div class="launch-tracks" aria-label="展示内容">
        <div>${c(`brand`)}<p>DESKTOP / PAD / MOBILE</p></div>
        <div>${c(`technology`)}<p>DESKTOP / PAD / MOBILE</p></div>
      </div>
      <footer class="launch-footer">
        <span>GEELY GLOBAL WEB EXPERIENCE</span>
        <span>06 CHAPTERS · 02 TRACKS · 01 SHOW</span>
      </footer>
    </section>
  `}var u=document.querySelector(`#root`);u.innerHTML=`
  <main class="showcase">
    <div class="showcase-ambient" aria-hidden="true"></div>
    <header class="showcase-header">
      <div class="showcase-brand">
        <img src="${e}/assets/logo-white.svg" alt="GEELY" />
        <span></span>
        <p>BRAND × TECHNOLOGY</p>
      </div>
      <div class="showcase-status">
        <span id="playStatus"><i></i><b>MANUAL</b></span>
        <b id="chapterCount">01 / ${String(i.length).padStart(2,`0`)}</b>
      </div>
      <div class="showcase-actions">
        <button id="openCurrent" type="button" title="独立打开当前页面">${o(`arrowUpRight`,16)}<span>独立打开</span></button>
        <button id="enterFullscreen" type="button" title="进入全屏">${o(`fullscreen`,16)}<span>全屏</span></button>
      </div>
    </header>
    <div class="showcase-layout">
      <section class="stage">
        <header class="stage-heading">
          <div id="stageMeta"></div>
          <p>${o(`pulse`,14,!0)} LIVE PREVIEW</p>
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
            <button id="previousChapter" type="button" aria-label="上一章节">${o(`arrowLeft`)}</button>
            <button class="play-control" id="togglePlay" type="button" aria-label="继续自动播放">${o(`play`,18,!0)}</button>
            <button id="nextChapter" type="button" aria-label="下一章节">${o(`arrowRight`)}</button>
          </div>
        </footer>
        <div class="chapter-progress" aria-hidden="true"><span id="chapterProgress"></span></div>
      </section>
      <aside class="chapter-rail" id="chapterRail" aria-label="设计展示章节"></aside>
    </div>
    ${l()}
  </main>
`;var d={showcase:document.querySelector(`.showcase`),playStatus:document.querySelector(`#playStatus`),chapterCount:document.querySelector(`#chapterCount`),stageMeta:document.querySelector(`#stageMeta`),stageFrame:document.querySelector(`#stageFrame`),stageEyebrow:document.querySelector(`#stageEyebrow`),stageTitle:document.querySelector(`#stageTitle`),stageDescription:document.querySelector(`#stageDescription`),previous:document.querySelector(`#previousChapter`),toggle:document.querySelector(`#togglePlay`),next:document.querySelector(`#nextChapter`),progress:document.querySelector(`#chapterProgress`),rail:document.querySelector(`#chapterRail`)},f=0,p=!1,m=!1,h,g,_,v=8e3;function y(){let e=[`brand`,`technology`];d.rail.innerHTML=`
    <div class="rail-heading"><span>SHOW FLOW</span><small>${String(i.length).padStart(2,`0`)} CHAPTERS</small></div>
    <div class="rail-groups">
      ${e.map(e=>{let t=i.filter(t=>t.track===e);return`
          <section class="rail-group rail-group--${e}">
            <header>${c(e)}<span>${String(t.length).padStart(2,`0`)} SCENES</span></header>
            <ol>
              ${t.map(e=>{let t=i.indexOf(e);return`
                  <li class="${`${t===f?`is-active`:``} ${t<f?`is-past`:``}`}">
                    <button type="button" data-chapter="${t}">
                      <span class="rail-node" aria-hidden="true">${s(e.type,13,t===f)}</span>
                      <span class="rail-copy"><b>${e.label}</b><small>${e.title}</small></span>
                      <span class="rail-index">${e.index}</span>
                    </button>
                  </li>
                `}).join(``)}
            </ol>
          </section>
        `}).join(``)}
    </div>
    <div class="rail-shortcuts"><span>← → 切换</span><span>SPACE 暂停</span></div>
  `,d.rail.querySelectorAll(`[data-chapter]`).forEach(e=>{e.addEventListener(`click`,()=>T(Number(e.dataset.chapter),!1))})}function b(e,t,n,r){let i=()=>{let i=Math.max(220,t.clientWidth-34),a=Math.max(280,t.clientHeight-34),o=Math.max(.18,Math.min(i/e.width,a/e.height,1));n.style.width=`${e.width*o}px`,n.style.height=`${e.height*o}px`,r.style.width=`${e.width}px`,r.style.height=`${e.height}px`,r.style.transform=`scale(${o})`};g?.disconnect(),g=new ResizeObserver(i),g.observe(t),i()}function x(e){window.clearTimeout(_),d.stageFrame.classList.remove(`is-loaded`),d.stageFrame.innerHTML=`
    <div class="frame-glow" aria-hidden="true"></div>
    <div class="preview-host preview-host--${e.type}">
      <div class="preview-frame" style="--frame-radius: ${e.type===`mobile`?`42px`:e.type===`pad`?`30px`:`12px`}">
        <div class="preview-surface">
          <iframe src="${e.url}" title="${e.eyebrow} ${e.title}" allow="autoplay; fullscreen"></iframe>
        </div>
      </div>
      <span class="preview-dimension" aria-hidden="true">${e.width} × ${e.height}</span>
    </div>
    <div class="frame-loader" role="status"><i></i><span>正在载入真实页面</span></div>
  `;let t=d.stageFrame.querySelector(`.preview-host`),n=d.stageFrame.querySelector(`.preview-frame`),r=d.stageFrame.querySelector(`.preview-surface`),i=d.stageFrame.querySelector(`iframe`);b(e,t,n,r);let a=()=>{i.isConnected&&(d.stageFrame.classList.add(`is-loaded`),d.stageFrame.querySelector(`.frame-loader`)?.remove())};i.addEventListener(`load`,a,{once:!0}),_=window.setTimeout(a,1800)}function S(){d.playStatus.classList.toggle(`is-live`,p),d.playStatus.querySelector(`b`).textContent=p?`AUTO PLAY`:`MANUAL`,d.chapterCount.textContent=`${String(f+1).padStart(2,`0`)} / ${String(i.length).padStart(2,`0`)}`,d.toggle.innerHTML=o(p?`pause`:`play`,18,!0),d.toggle.setAttribute(`aria-label`,p?`暂停自动播放`:`继续自动播放`)}function C(){window.clearTimeout(h),d.progress.classList.remove(`is-running`),d.progress.style.setProperty(`--chapter-duration`,`${v}ms`),d.progress.offsetWidth,!(!p||!m)&&(d.progress.classList.add(`is-running`),h=window.setTimeout(()=>{if(f===i.length-1){p=!1,S();return}f+=1,w()},v))}function w(){let e=i[f];d.stageMeta.innerHTML=`${c(e.track,!0)}<span class="stage-slash">/</span><span>${e.label}</span>`,d.stageEyebrow.textContent=e.eyebrow,d.stageTitle.textContent=e.title,d.stageDescription.textContent=e.description,d.previous.disabled=f===0,d.next.setAttribute(`aria-label`,f===i.length-1?`回到开场`:`下一章节`),x(e),y(),S(),C()}function T(e,t=!1){m=!0,p=t,f=Math.max(0,Math.min(i.length-1,e)),d.showcase.classList.add(`is-started`),w()}function E(){m=!0,p=!0,f=0,d.showcase.classList.add(`is-started`),w()}function D(){m=!0,p=!p,d.showcase.classList.add(`is-started`),S(),C()}document.querySelector(`#startShow`).addEventListener(`click`,E),document.querySelector(`#openCurrent`).addEventListener(`click`,()=>{window.open(i[f].url,`_blank`,`noopener,noreferrer`)}),document.querySelector(`#enterFullscreen`).addEventListener(`click`,()=>{document.documentElement.requestFullscreen?.()}),d.previous.addEventListener(`click`,()=>T(f-1,!1)),d.next.addEventListener(`click`,()=>{T(f===i.length-1?0:f+1,!1)}),d.toggle.addEventListener(`click`,D),window.addEventListener(`keydown`,e=>{!m||e.target instanceof Element&&e.target.closest(`button, a, input, textarea, iframe`)||(e.key===`ArrowLeft`&&T(f-1,!1),e.key===`ArrowRight`&&T(f+1,!1),e.code===`Space`&&(e.preventDefault(),D()),e.key.toLowerCase()===`f`&&document.documentElement.requestFullscreen?.())}),w();