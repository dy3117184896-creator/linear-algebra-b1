const copy = {
  zh: {
    brand: '中国科学技术大学 · 数学科学学院',
    eyebrow: '2026 秋季学期 · 课程主页',
    title: '线性代数 B1',
    subtitle: '从线性方程组出发，理解向量空间、线性映射与矩阵背后的统一结构。',
    nav: ['课程公告', '课程信息', '教学安排', '课程资源'],
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
      ['答疑时间', '待更新'], ['参考教材', '《线性代数》及课堂指定参考资料'],
      ['考核方式', '平时成绩、期中考试与期末考试（比例待定）'],
    ],
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

const ids = ['announcements', 'information', 'schedule', 'resources'];
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
