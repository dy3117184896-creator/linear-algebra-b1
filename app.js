const copy = {
  zh: {
    brand: '中国科学技术大学 · 数学科学学院',
    eyebrow: '2026 秋季学期 · 课程主页',
    title: '线性代数 B1',
    subtitle: '从线性方程组出发，理解向量空间、线性映射与矩阵背后的统一结构。',
    nav: ['课程公告', '课程信息', '参考书', '教学安排', '课程资源'],
    facts: [
      ['上课时间', '周二 9：45 – 11：20<br>周四 7：50 – 9：25'],
      ['上课地点', '5403'],
    ],
    announcementsTitle: '课程公告', announcementsKicker: 'Announcements',
    announcements: [
      ['09.01', '课程主页已上线', '讲义、作业与通知将随教学进度持续更新。'],
    ],
    informationTitle: '课程信息', informationKicker: 'Course information',
    information: [
      ['助教', '江子恒 钱治文'], ['上课时间', '周二 9：45–11：20<br>周四 07：50–09：25'], ['上课地点', '5403'],
      ['答疑时间', '待更新'], ['参考教材', '<a href="linear-algebra-1-textbook.pdf" target="_blank" rel="noopener">线性代数Ⅰ 陈发来 王新茂 陈效群 李思敏</a><br><small style="font-weight:400;display:inline-block;margin-top:0.35rem;">电子版课本和实际可能有出入，以纸质的课本为准</small>'],
      ['考核方式', '平时：期中：期末 = 2：3：5（暂定）'],
    ],
    referenceBooksTitle: '参考书 <small>（来自江助教）</small>',
    referenceBooksKicker: 'Recommended reading',
    referenceBooksNote: '课程群上传的都是中文译本，难免存在翻译上的 typo。感兴趣的同学可自行寻找英文原版，也算是锻炼阅读英文文献的能力。',
    referenceBooks: [
      {
        label: '矩阵主线',
        title: 'Introduction to Linear Algebra',
        cnTitle: '中文译名《线性代数》',
        authors: 'Gilbert Strang',
        pdf: 'reference-book-01-introduction-to-linear-algebra.pdf',
        description: '非常标准典型的、以矩阵为开头的主线讲法。',
        companion: '配套课程视频',
        companionUrl: 'https://www.bilibili.com/video/BV1ix411f7Yp/',
      },
      {
        label: '应用导向',
        title: 'Linear Algebra and Its Applications',
        cnTitle: '中文译名《线性代数及其应用》',
        authors: 'David C. Lay · Steven R. Lay · Judi J. McDonald',
        pdf: 'reference-book-02-linear-algebra-applications.pdf',
        description: '本书以线性代数的“应用”为核心，更照顾工科学生的落地需求，例如线性代数在转码、机器学习、图形学或凸优化等方面的用途。可以参考本书的案例理解理论知识，或作为遴选深造方向的指南，从中理解为什么线性代数（B1）要在大一秋修读，以及它凭什么作为万科之基础。',
      },
      {
        label: '理论路线',
        title: 'Linear Algebra Done Right',
        cnTitle: '中文译名《线性代数应该这样学》',
        authors: 'Sheldon Axler',
        pdf: 'reference-book-03-linear-algebra-done-right.pdf',
        description: '本书以线性空间起手，行列式为终点，教学流程与主流很不一样；且本书的风格偏理论与抽象，因此对初学者难度略大。对线性代数的理论知识感兴趣的同学，可以尝试阅读此书。',
        quote: '“线性代数是有限维线性空间上的线性算子理论。”',
      },
      {
        label: '校内笔记',
        title: '理论控也能看懂的线代笔记 Ver 1.2',
        cnTitle: '提纲挈领式的校内笔记',
        authors: '陈跃宇（物院严班 24 级）',
        pdf: 'reference-book-04-linear-algebra-notes-ver-1.2.pdf',
        description: '该笔记采用提纲挈领式的写法，具体简介在文件内有写。',
        email: 'cly2263467979@mail.ustc.edu.cn',
      },
    ],
    externalTitle: '外部资料',
    externalName: '线性代数的本质',
    externalCreator: '3Blue1Brown 制作的系列视频',
    externalUrl: 'https://www.bilibili.com/video/BV1Ys411k7vQ/',
    scheduleTitle: '教学安排', scheduleKicker: 'Weekly schedule',
    scheduleIntro: '以下为课程框架，具体进度将在开课后根据课堂实际情况调整。',
    headers: ['周次', '主题', '关键词', '讲义', '作业'],
    resourceTitle: '课程资源', resourceKicker: 'Resources',
    resources: [
      ['讲义', 'Lecture notes', '每周课堂讲义与补充材料', '等待上传'],
      ['作业', 'Problem sets', '作业题目、截止日期与提交说明', '等待发布'],
      ['习题课', 'Recitations', '习题课讲义与例题整理', '等待上传'],
      ['考试资料', 'Exams', '考试安排、范围与往年资料', '等待发布'],
    ],
    footer: '线性代数 B1 · 2026 秋季学期', backTop: '回到顶部 ↑', placeholder: '待上传',
    update: '最近更新：2026 年 9 月',
  },
};

const weeks = [
  [['01', '第一周'], ['待更新'], ['待更新']]
];

const ids = ['announcements', 'information', 'references', 'schedule', 'resources'];
const heading = (kicker, title) => `<div class="section-heading"><span class="section-index" aria-hidden="true"></span><div><p>${kicker}</p><h2>${title}</h2></div></div>`;

function render() {
  const t = copy.zh;
  const idx = 0;
  document.documentElement.lang = 'zh-CN';
  document.title = '线性代数 B1｜2026 秋季学期';
  document.getElementById('app').innerHTML = `
    <main id="top">
      <header class="hero">
        <div class="hero-lines" aria-hidden="true"><span>λ</span><span>A</span><span>v</span><span>=</span><span>λ</span><span>v</span></div>
        <div class="site-shell">
          <div class="topbar">
            <a class="brand" href="#top" aria-label="${t.title}"><span class="brand-mark">LA</span><span>${t.brand}</span></a>
          </div>
          <div class="hero-grid">
            <div class="hero-copy">
              <p class="eyebrow"><span></span>${t.eyebrow}</p><h1>${t.title}</h1><p class="hero-subtitle">${t.subtitle}</p>
              <nav aria-label="Course sections">${t.nav.map((label, i) => `<a href="#${ids[i]}">${label}<span>↘</span></a>`).join('')}</nav>
            </div>
            <aside class="course-card" aria-label="Course summary">
              <div class="matrix-mark" aria-hidden="true"><i></i><span>1&nbsp;&nbsp;0<br>0&nbsp;&nbsp;1</span><i></i></div>
              <dl>${t.facts.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')}</dl>
              <p class="update"><span></span>${t.update}</p>
            </aside>
          </div>
        </div>
      </header>
      <div class="site-shell content-shell">
        <section id="announcements" class="section-card announcement-section">
          ${heading(t.announcementsKicker, t.announcementsTitle)}
          <div class="announcement-list">${t.announcements.map(([date, title, detail], i) => `<article><span class="notice-number">0${i + 1}</span><time>${date}</time><div><h3>${title}</h3><p>${detail}</p></div></article>`).join('')}</div>
        </section>
        <section id="information" class="section-card">
          ${heading(t.informationKicker, t.informationTitle)}
          <div class="info-grid">${t.information.map(([label, value], i) => `<div class="info-item"><span>${String(i + 1).padStart(2, '0')}</span><div><p>${label}</p><strong>${value}</strong></div></div>`).join('')}</div>
        </section>
        <section id="references" class="section-card reference-section">
          ${heading(t.referenceBooksKicker, t.referenceBooksTitle)}
          <div class="reference-note"><span>阅读说明</span><p>${t.referenceBooksNote}</p></div>
          <div class="book-list">
            ${t.referenceBooks.map((book, i) => `<article class="book-card">
              <div class="book-number"><span>${String(i + 1).padStart(2, '0')}</span><small>${book.label}</small></div>
              <div class="book-content">
                <a class="book-title" href="${book.pdf}" target="_blank" rel="noopener"><span>${book.title}</span><b>PDF ↗</b></a>
                <div class="book-meta"><span>${book.cnTitle}</span><i></i><span>${book.authors}</span></div>
                <p>${book.description}</p>
                ${book.quote ? `<blockquote>${book.quote}</blockquote>` : ''}
                ${book.companionUrl ? `<a class="book-extra" href="${book.companionUrl}" target="_blank" rel="noopener"><span>▶</span>${book.companion}</a>` : ''}
                ${book.email ? `<a class="book-extra" href="mailto:${book.email}"><span>@</span>${book.email}</a>` : ''}
              </div>
            </article>`).join('')}
          </div>
          <a class="reference-video" href="${t.externalUrl}" target="_blank" rel="noopener">
            <span class="video-mark">▶</span><div><small>${t.externalTitle}</small><h3>${t.externalName}</h3><p>${t.externalCreator}</p></div><b>前往视频 ↗</b>
          </a>
        </section>
        <section id="schedule" class="section-card schedule-section">
          <div class="section-title-row">${heading(t.scheduleKicker, t.scheduleTitle)}<p>${t.scheduleIntro}</p></div>
          <div class="table-wrap"><table><thead><tr>${t.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
          <tbody>${weeks.map(w => `<tr><td><b>${w[0][0]}</b><span>${w[0][1]}</span></td><td>${w[1][idx]}</td><td>${w[2][idx]}</td><td><span class="status">${t.placeholder}</span></td><td><span class="status">${t.placeholder}</span></td></tr>`).join('')}</tbody></table></div>
        </section>
        <section id="resources" class="section-card">
          ${heading(t.resourceKicker, t.resourceTitle)}
          <div class="resource-grid">${t.resources.map(([title, en, description, state], i) => `<article><div class="resource-top"><span>0${i + 1}</span><i aria-hidden="true">↗</i></div><p>${en}</p><h3>${title}</h3><div class="resource-rule"></div><p class="resource-description">${description}</p><span class="resource-state"><i></i>${state}</span></article>`).join('')}</div>
        </section>
        <footer><p>${t.footer}</p><a href="#top">${t.backTop}</a></footer>
      </div>
    </main>`;
}

render();
