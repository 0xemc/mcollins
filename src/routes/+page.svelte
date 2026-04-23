<svelte:head>
  <title>Michael Collins — Software Engineer</title>
  <meta name="description" content="Senior software engineer. 10+ years. Full-stack. Available for contract." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
</svelte:head>

<div class="wrap">

  <header class="hd">
    <span class="hd-logo">MC<span class="cursor">_</span></span>
    <a href="mailto:hello@mcoll.net" class="hd-contact">hello@mcoll.net</a>
  </header>

  <section class="intro">
    <div class="name-row">
      <h1><span class="n-light">Michael</span><span class="n-reg">&thinsp;Collins</span></h1>
      <span class="title-badge">Software Engineer</span>
    </div>
    <p class="tagline">10+ years&ensp;&middot;&ensp;Full-stack&ensp;&middot;&ensp;Available for contract.</p>
    <p class="bio">
      Shipping production software across climate tech, defence, finance and government.<br />
      Currently Technical Lead at Carbonmark.
    </p>
  </section>

  <div class="rule"></div>

  <div class="grid">

    <div class="col-left">

      <div class="block">
        <h2 class="block-label">Offer</h2>
        <ul class="offer-list">
          {#each ['Full-Stack Dev', 'Technical Lead', 'Web3', 'Backend APIs', 'Enterprise Consulting', 'Climate Tech'] as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>

      <div class="block">
        <h2 class="block-label">Skills</h2>
        <div class="skill-cloud">
          {#each ['TypeScript', 'Python', 'React', 'NextJS', 'SvelteKit', 'Express', 'GraphQL', 'Tailwind', 'Supabase', 'AWS', 'Polygon'] as skill}
            <span class="skill">{skill}</span>
          {/each}
        </div>
      </div>

    </div>

    <div class="col-right">
      <h2 class="block-label">Experience</h2>
      <div class="exp-list">
        {#each [
          { co: 'Carbonmark',       role: 'Technical Lead',    y: '2023–Now'  },
          { co: 'Quantium',         role: 'Senior Engineer',   y: '2021–2023' },
          { co: 'Deloitte Digital', role: 'Senior Consultant', y: '2019–2021' },
          { co: 'Wanngi',           role: 'Software Engineer', y: '2018–2019' },
          { co: 'Box & Dice',       role: 'UI Engineer',       y: '2017–2018' },
          { co: 'Thales ATC',       role: 'Software Engineer', y: '2014–2017' },
        ] as j}
          <div class="exp-row">
            <div class="exp-meta">
              <span class="exp-co">{j.co}</span>
              <span class="exp-role">{j.role}</span>
            </div>
            <span class="exp-yr">{j.y}</span>
          </div>
        {/each}
      </div>
    </div>

  </div>

  <div class="rule"></div>

  <footer class="ft">
    <a href="mailto:hello@mcoll.net">hello@mcoll.net</a>
    <span class="ft-dot">&middot;</span>
    <a href="https://linkedin.com/in/mcollins92">linkedin.com/in/mcollins92</a>
    <span class="ft-dot">&middot;</span>
    <a href="https://github.com/0xemc">github.com/0xemc</a>
  </footer>

</div>

<style>
  .wrap {
    font-family: 'IBM Plex Mono', monospace;
    max-width: 900px;
    margin: 0 auto;
    padding: 36px 44px 52px;
    animation: fadein 0.4s ease both;
  }

  @keyframes fadein {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Header ─────────────────────────────────── */
  .hd {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 52px;
  }

  .hd-logo {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: #efefef;
  }

  .cursor {
    animation: blink 1.1s step-end infinite;
    color: #caff00;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }

  .hd-contact {
    font-size: 0.68rem;
    font-weight: 300;
    color: #666;
    letter-spacing: 0.04em;
    transition: color 0.15s;
  }
  .hd-contact:hover { color: #caff00; }

  /* ── Intro ───────────────────────────────────── */
  .intro {
    margin-bottom: 40px;
  }

  .name-row {
    display: flex;
    align-items: baseline;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 14px;
  }

  h1 {
    margin: 0;
    font-size: clamp(2.2rem, 5.5vw, 3.8rem);
    line-height: 1;
    letter-spacing: -0.025em;
    color: #efefef;
  }
  .n-light { font-weight: 300; }
  .n-reg   { font-weight: 400; }

  .title-badge {
    font-size: 0.68rem;
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #666;
  }

  .tagline {
    margin: 0 0 14px;
    font-size: 0.78rem;
    font-weight: 300;
    color: #888;
    letter-spacing: 0.03em;
  }

  .bio {
    margin: 0;
    font-size: 0.84rem;
    font-weight: 300;
    line-height: 1.75;
    color: #aaa;
    max-width: 580px;
  }

  /* ── Rule ────────────────────────────────────── */
  .rule {
    border: none;
    border-top: 1px solid #252525;
    margin: 36px 0;
  }

  /* ── Two-column grid ─────────────────────────── */
  .grid {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 56px;
    align-items: start;
  }

  /* ── Block label ─────────────────────────────── */
  .block-label {
    margin: 0 0 14px;
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #caff00;
  }

  .block {
    margin-bottom: 36px;
  }
  .block:last-child { margin-bottom: 0; }

  /* ── Offer list ──────────────────────────────── */
  .offer-list {
    list-style: none;
    padding: 0;
    margin: 0;
    border-top: 1px solid #252525;
  }
  .offer-list li {
    font-size: 0.78rem;
    font-weight: 300;
    color: #aaa;
    padding: 8px 0;
    border-bottom: 1px solid #252525;
    letter-spacing: 0.02em;
    transition: color 0.15s;
  }
  .offer-list li:hover { color: #caff00; }

  /* ── Skill cloud ─────────────────────────────── */
  .skill-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .skill {
    font-size: 0.66rem;
    font-weight: 400;
    color: #888;
    background: #1f1f1f;
    border: 1px solid #2a2a2a;
    padding: 4px 9px;
    letter-spacing: 0.05em;
    transition: color 0.15s, border-color 0.15s;
  }
  .skill:hover {
    color: #caff00;
    border-color: #caff00;
  }

  /* ── Experience ──────────────────────────────── */
  .exp-list {
    border-top: 1px solid #252525;
  }
  .exp-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 0;
    border-bottom: 1px solid #252525;
  }
  .exp-row:hover .exp-co   { color: #caff00; }
  .exp-row:hover .exp-role { color: #aaa; }

  .exp-meta {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .exp-co {
    font-size: 0.82rem;
    font-weight: 400;
    color: #d4d4d4;
    letter-spacing: 0.02em;
    transition: color 0.15s;
  }
  .exp-role {
    font-size: 0.7rem;
    font-weight: 300;
    color: #666;
    letter-spacing: 0.04em;
    transition: color 0.15s;
  }
  .exp-yr {
    font-size: 0.68rem;
    font-weight: 300;
    color: #484848;
    letter-spacing: 0.07em;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  /* ── Footer ──────────────────────────────────── */
  .ft {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    font-size: 0.68rem;
    font-weight: 300;
    letter-spacing: 0.04em;
    font-family: 'IBM Plex Mono', monospace;
  }
  .ft a {
    color: #666;
    transition: color 0.15s;
  }
  .ft a:hover { color: #caff00; }
  .ft-dot { color: #2a2a2a; }

  /* ── Responsive ──────────────────────────────── */
  @media (max-width: 620px) {
    .wrap    { padding: 24px 20px 44px; }
    .hd      { margin-bottom: 36px; }
    .name-row { flex-direction: column; gap: 6px; }
    h1       { font-size: 2.2rem; }
    .grid    { grid-template-columns: 1fr; gap: 36px; }
    .ft      { flex-direction: column; align-items: flex-start; gap: 8px; }
  }
</style>
