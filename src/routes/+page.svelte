<script lang="ts">
</script>

<svelte:head>
  <title>Michael Collins — Software Engineer</title>
  <meta name="description" content="Senior software engineer. 10+ years. Full-stack. Available for contract." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
</svelte:head>

<div class="wrap">

  <!-- ── Header ───────────────────────────────── -->
  <header class="hd">
    <span class="hd-logo">MC<span class="cursor">_</span></span>
    <span class="hd-avail">Available for contract</span>
  </header>

  <!-- ── Intro ────────────────────────────────── -->
  <section class="intro">
    <h1><span class="n-light">Michael</span><span class="n-reg">&thinsp;Collins</span></h1>
    <p class="tagline">Software Engineer &middot; <span class="accent">10+ years experience</span> &middot; Brisbane, AU</p>
    <p class="bio">Shipping production software across climate tech, defence, finance and government.</p>
  </section>

  <div class="rule"></div>

  <!-- ── Services ─────────────────────────────── -->
  <section class="services">
    <h2 class="section-label">Services</h2>
    <div class="service-grid">
      {#each [
        { n: '01', title: 'App Development'  },
        { n: '02', title: 'Blockchain'       },
        { n: '03', title: 'AI & Automation'  },
      ] as s}
        <div class="service-item">
          <span class="service-n">{s.n}</span>
          <span class="service-title">{s.title}</span>
        </div>
      {/each}
    </div>
  </section>

  <div class="rule"></div>

  <!-- ── Past Work ────────────────────────────── -->
  <section class="clients">
    <h2 class="section-label">Previous Clients</h2>
    <div class="work-grid">
      {#each [
        { mark: 'CM', logo: '/logos/carbonmark.png', client: 'Carbonmark',        project: 'Tokenized carbon credit marketplace on Polygon' },
        { mark: 'WW', logo: '/logos/woolworths.png', client: 'Woolworths',         project: 'Real-time pricing & promotions forecasting tool' },
        { mark: 'AZ', logo: '/logos/amazon.png',     client: 'Amazon',             project: 'Merchant storefront product (US, undisclosed)' },
        { mark: 'DD', logo: '/logos/deloitte.png',   client: 'Deloitte Digital',   project: 'Enterprise software — banks, insurers, government' },
        { mark: 'DT', logo: '/logos/transport.png',  client: 'Victorian Dept. of Transport', project: 'Digital twin of Melbourne using spatial frameworks' },
        { mark: 'AA', logo: '/logos/army.png',       client: 'Australian Army',    project: 'Interactive operations manual (WebGL / PixiJS)' },
      ] as w}
        <div class="work-card">
          <div class="work-mark">
            <img src={w.logo} alt={w.client} class="work-logo"
              onerror={(e) => { (e.currentTarget as HTMLImageElement).style.display='none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display='flex'; }}
            />
            <span class="work-initials" style="display:none">{w.mark}</span>
          </div>
          <div class="work-body">
            <span class="work-client">{w.client}</span>
            <span class="work-project">{w.project}</span>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <div class="rule"></div>

  <!-- ── Skills + Experience ──────────────────── -->
  <div class="lower-grid">

    <div class="col-skills">
      <h2 class="section-label">Skills</h2>
      <div class="skill-cloud">
        {#each ['TypeScript','Python','React','NextJS','SvelteKit','Express','GraphQL','Tailwind','Supabase','AWS','Polygon'] as sk}
          <span class="skill">{sk}</span>
        {/each}
      </div>
    </div>

    <div class="col-exp">
      <h2 class="section-label">Experience</h2>
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

  <!-- ── CTA ──────────────────────────────────── -->
  <section class="cta">
    <div class="cta-left">
      <p class="cta-heading">Got a project?<br/>Let's talk.</p>
      <p class="cta-sub">I'm available for contract engagements — short or long term.</p>
    </div>
    <div class="cta-right">
      <a href="mailto:hello@mcoll.net" class="cta-email">hello@mcoll.net</a>
      <div class="cta-links">
        <a href="https://linkedin.com/in/mcollins92">LinkedIn →</a>
        <a href="https://github.com/0xemc">GitHub →</a>
      </div>
    </div>
  </section>

</div>

<style>
  .wrap {
    font-family: 'IBM Plex Mono', monospace;
    max-width: 900px;
    margin: 0 auto;
    padding: 36px 44px 64px;
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
  .hd-avail {
    font-size: 0.64rem;
    font-weight: 400;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #caff00;
  }

  /* ── Intro ───────────────────────────────────── */
  .intro { margin-bottom: 40px; }

  h1 {
    margin: 0 0 10px;
    font-size: clamp(2.2rem, 5.5vw, 3.8rem);
    line-height: 1;
    letter-spacing: -0.025em;
    color: #efefef;
  }
  .n-light { font-weight: 300; }
  .n-reg   { font-weight: 400; }

  .accent  { color: #caff00; font-weight: 400; }

  .tagline {
    margin: 0 0 14px;
    font-size: 0.72rem;
    font-weight: 300;
    color: #666;
    letter-spacing: 0.04em;
  }
  .bio {
    margin: 0;
    font-size: 0.84rem;
    font-weight: 300;
    line-height: 1.75;
    color: #aaa;
    max-width: 560px;
  }

  /* ── Rule ────────────────────────────────────── */
  .rule {
    border: none;
    border-top: 1px solid #252525;
    margin: 36px 0;
  }

  /* ── Section label ───────────────────────────── */
  .section-label {
    margin: 0 0 18px;
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #caff00;
  }

  /* ── Services ────────────────────────────────── */
  .service-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0;
    border-top: 1px solid #252525;
    border-left: 1px solid #252525;
  }
  .service-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 20px 18px;
    border-right: 1px solid #252525;
    border-bottom: 1px solid #252525;
    transition: background 0.15s;
  }
  .service-item:hover { background: #1f1f1f; }
  .service-n {
    font-size: 0.6rem;
    font-weight: 500;
    color: #caff00;
    letter-spacing: 0.1em;
  }
  .service-title {
    font-size: 0.82rem;
    font-weight: 400;
    color: #d4d4d4;
    letter-spacing: 0.01em;
    line-height: 1.3;
  }

  /* ── Past Work ───────────────────────────────── */
  .work-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: #252525;
    border: 1px solid #252525;
  }
  .work-card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    background: #181818;
    transition: background 0.15s;
  }
  .work-card:hover { background: #1f1f1f; }
  .work-card:hover .work-client { color: #caff00; }
  .work-mark {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .work-logo {
    width: 26px;
    height: 26px;
    object-fit: contain;
    display: block;
    filter: opacity(0.75) brightness(1.2);
    transition: filter 0.2s;
  }
  .work-card:hover .work-logo {
    filter: opacity(1) brightness(1.1);
  }
  .work-initials {
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: #555;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: color 0.15s;
  }
  .work-card:hover .work-initials { color: #caff00; }
  .work-body {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .work-client {
    font-size: 0.8rem;
    font-weight: 400;
    color: #d4d4d4;
    letter-spacing: 0.02em;
    transition: color 0.15s;
  }
  .work-project {
    font-size: 0.7rem;
    font-weight: 300;
    color: #999;
    letter-spacing: 0.02em;
    line-height: 1.4;
  }

  /* ── Lower grid ──────────────────────────────── */
  .lower-grid {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 56px;
    align-items: start;
  }

  /* ── Skills ──────────────────────────────────── */
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
  .skill:hover { color: #caff00; border-color: #caff00; }

  /* ── Experience ──────────────────────────────── */
  .exp-list { border-top: 1px solid #252525; }
  .exp-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #252525;
  }
  .exp-row:hover .exp-co { color: #caff00; }
  .exp-meta { display: flex; flex-direction: column; gap: 3px; }
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
    color: #555;
    letter-spacing: 0.04em;
  }
  .exp-yr {
    font-size: 0.68rem;
    font-weight: 300;
    color: #444;
    letter-spacing: 0.07em;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  /* ── CTA ─────────────────────────────────────── */
  .cta {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 40px;
    padding: 32px;
    border: 1px solid #2a2a2a;
    background: #1a1a1a;
  }
  .cta-heading {
    margin: 0 0 10px;
    font-size: clamp(1.4rem, 3vw, 2rem);
    font-weight: 300;
    letter-spacing: -0.02em;
    color: #efefef;
    line-height: 1.2;
  }
  .cta-sub {
    margin: 0;
    font-size: 0.75rem;
    font-weight: 300;
    color: #666;
    letter-spacing: 0.02em;
  }
  .cta-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
    flex-shrink: 0;
  }
  .cta-email {
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    font-weight: 400;
    color: #caff00;
    letter-spacing: 0.02em;
    transition: opacity 0.15s;
  }
  .cta-email:hover { opacity: 0.75; }
  .cta-links {
    display: flex;
    gap: 16px;
  }
  .cta-links a {
    font-size: 0.7rem;
    font-weight: 300;
    color: #555;
    letter-spacing: 0.05em;
    transition: color 0.15s;
  }
  .cta-links a:hover { color: #caff00; }

  /* ── Responsive ──────────────────────────────── */
  @media (max-width: 680px) {
    .wrap          { padding: 24px 20px 48px; }
    .hd            { margin-bottom: 36px; }
    h1             { font-size: 2.2rem; }
    .service-grid  { grid-template-columns: repeat(2, 1fr); }
    .lower-grid    { grid-template-columns: 1fr; gap: 36px; }
    .cta           { flex-direction: column; align-items: flex-start; }
    .cta-right     { align-items: flex-start; }
    .work-grid     { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 400px) {
    .service-grid { grid-template-columns: 1fr; }
  }
</style>
