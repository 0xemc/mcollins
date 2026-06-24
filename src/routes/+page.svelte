<script lang="ts">
</script>

<svelte:head>
  <title>Michael Collins — Software Engineer</title>
  <meta name="description" content="Senior software engineer. 10+ years. Full-stack. Available for contract." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
  <link rel="preload" href="/me-marseille.webp" as="image" type="image/webp" />
</svelte:head>

<div class="wrap">

  <!-- ── Header ───────────────────────────────── -->
  <header class="hd">
    <span class="hd-logo">MC<span class="cursor">_</span></span>
    <a href="mailto:hello@mcoll.net" class="hd-avail">Available for contract</a>
  </header>

  <!-- ── Intro ────────────────────────────────── -->
  <section class="intro">
    <div class="intro-title">
      <div class="hd-photo-wrap">
        <picture>
          <source srcset="/me-marseille.webp" type="image/webp" />
          <img src="/me-marseille.png" alt="Michael Collins" class="hd-photo" fetchpriority="high" />
        </picture>
      </div>
      <div class="intro-text">
        <h1><span class="n-light">Michael</span><span class="n-reg">&thinsp;Collins</span></h1>
        <p class="tagline">Software Engineer &middot; <span class="accent">10+ years experience</span></p>
        <p class="bio">Delivering fullstack software for climate, defence, finance and government.</p>
      </div>
    </div>
  </section>

  <!-- ── CTA ──────────────────────────────────── -->
  <section class="cta">
    <div class="cta-left">
      <p class="cta-heading">Got a project?<br/>Let's talk.</p>
    </div>
    <div class="cta-right">
      <a href="mailto:hello@mcoll.net" class="cta-email">hello@mcoll.net</a>
      <a href="tel:+61429142912" class="cta-phone">+61 429 142 912</a>
      <div class="cta-links">
        <a href="https://linkedin.com/in/mcollins92"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> LinkedIn</a>
        <a href="https://github.com/0xemc"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> GitHub</a>
      </div>
    </div>
  </section>

  <div class="rule"></div>

  <!-- ── Services ─────────────────────────────── -->
  <section class="services">
    <h2 class="section-label">Services</h2>
    <div class="service-grid">
      {#each [
        { n: '01', title: 'App Development', skills: ['TypeScript','React','NextJS','SvelteKit','Express','Tailwind','Supabase'] },
        { n: '02', title: 'Blockchain',      skills: ['Solidity','Ethers.js','Hardhat','IPFS','Polygon','GraphQL']             },
        { n: '03', title: 'AI & Business Automation', skills: ['Python','AWS','OpenClaw','NanoClaw','n8n']                              },
      ] as s}
        <div class="service-item">
          <span class="service-n">{s.n}</span>
          <span class="service-title">{s.title}</span>
          <div class="service-skills">
            {#each s.skills as sk}
              <span class="skill">{sk}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <div class="rule"></div>

  <!-- ── Past Work ────────────────────────────── -->
  <section class="clients">
    <h2 class="section-label">Previous Work</h2>
    <div class="work-grid">
      {#each [
        { mark: 'WW', logo: '/logos/woolworths.png', client: 'Woolworths',                 project: 'Real-time pricing & promotions forecasting tool' },
        { mark: 'AZ', logo: '/logos/amazon_white.svg',     client: 'Amazon',                     project: 'Merchant storefront product (US, undisclosed)' },
        { mark: 'DD', logo: '/logos/deloitte.png',   client: 'Deloitte Digital',            project: 'Enterprise software — banks, insurers, government' },
        { mark: 'DT', logo: '/logos/transport.png',  client: 'Victorian Dept. of Transport',project: 'Digital twin of Melbourne using spatial frameworks' },
        { mark: 'AA', logo: '/logos/army.svg',       client: 'Australian Army',             project: 'Interactive operations manual (WebGL / PixiJS)' },
        { mark: 'TH', logo: '/logos/thales.png',     client: 'Thales ATC',                 project: 'Air traffic control systems software' },
        { mark: 'BD', logo: '/logos/boxdice.png',    client: 'Box & Dice',                  project: 'Real estate CRM & property management platform' },
        { mark: 'QT', logo: '/logos/quantium.png',   client: 'Quantium',                   project: 'Data science & retail analytics platform', invert: true },
        { mark: 'CM', logo: '/logos/carbonmark.png', client: 'Carbonmark',                  project: 'Tokenized carbon credit marketplace on Polygon' },
      ] as w}
        <div class="work-card">
          <div class="work-mark">
            <img src={w.logo} alt={w.client} class="work-logo {w.invert ? 'work-logo-invert' : ''}"
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

  <!-- ── Mobile CTA ───────────────────────────── -->
  <section class="cta cta-mobile">
    <div class="cta-left">
      <p class="cta-heading">Ready to build<br/>something?</p>
      <p class="cta-sub">Drop me a line — I'm open to new contract work.</p>
    </div>
    <div class="cta-right">
      <a href="mailto:hello@mcoll.net" class="cta-email">hello@mcoll.net</a>
      <a href="tel:+61429142912" class="cta-phone">+61 429 142 912</a>
      <div class="cta-links">
        <a href="https://linkedin.com/in/mcollins92"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> LinkedIn</a>
        <a href="https://github.com/0xemc"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> GitHub</a>
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
  .intro-title {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 20px;
  }
  .intro-text { display: flex; flex-direction: column; gap: 10px; }
  .intro-text h1 { margin: 0; }
  .intro-text .tagline { margin: 0; }
  .intro-text .bio { margin: 0; }
  .hd-photo-wrap {
    width: 100px;
    align-self: stretch;
    flex-shrink: 0;
    border: 1px solid #252525;
    border-radius: 6px;
    overflow: hidden;
  }
  .hd-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    filter: grayscale(100%) brightness(0.8) contrast(1.1);
    display: block;
  }
  .hd-avail {
    font-size: 0.64rem;
    font-weight: 400;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #caff00;
    text-decoration: none;
    transition: opacity 0.15s;
  }
  .hd-avail:hover { opacity: 0.75; }

  /* ── Intro ───────────────────────────────────── */
  .intro { margin-bottom: 40px; }

  h1 {
    margin: 0;
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
    font-size: 0.76rem;
    font-weight: 300;
    color: #999;
    letter-spacing: 0.04em;
  }
  .bio {
    margin: 0;
    font-size: 0.88rem;
    font-weight: 300;
    line-height: 1.75;
    color: #bbb;
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
    font-size: 0.9rem;
    font-weight: 400;
    color: #e0e0e0;
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
    border-radius: 6px;
    filter: opacity(0.92) brightness(1.1);
    transition: filter 0.2s;
  }
  .work-card:hover .work-logo {
    filter: opacity(1) brightness(1.1);
  }
  .work-logo-invert {
    filter: brightness(0) invert(1) opacity(0.75);
  }
  .work-card:hover .work-logo-invert {
    filter: brightness(0) invert(1) opacity(1);
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
    font-size: 0.85rem;
    font-weight: 400;
    color: #e0e0e0;
    letter-spacing: 0.02em;
    transition: color 0.15s;
  }
  .work-project {
    font-size: 0.74rem;
    font-weight: 300;
    color: #aaa;
    letter-spacing: 0.02em;
    line-height: 1.4;
  }

  /* ── Skills (within service cards) ──────────── */
  .service-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 4px;
  }
  .skill {
    font-size: 0.62rem;
    font-weight: 400;
    color: #777;
    background: #161616;
    border: 1px solid #252525;
    padding: 3px 7px;
    letter-spacing: 0.05em;
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
    font-size: 0.78rem;
    font-weight: 300;
    color: #999;
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
  .cta-phone {
    font-size: 0.8rem;
    font-weight: 400;
    color: #d4d4d4;
    letter-spacing: 0.04em;
    transition: color 0.15s;
  }
  .cta-phone:hover { color: #caff00; }
  .cta-links {
    display: flex;
    gap: 16px;
  }
  .cta-links a {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.72rem;
    font-weight: 300;
    color: #888;
    letter-spacing: 0.05em;
    transition: color 0.15s;
  }
  .cta-links a:hover { color: #caff00; }
  .cta-links svg { flex-shrink: 0; }

  .cta-mobile { display: none; }

  /* ── Responsive ──────────────────────────────── */
  @media (max-width: 680px) {
    .wrap          { padding: 24px 20px 48px; }
    .hd            { margin-bottom: 36px; }
    h1             { font-size: 2.2rem; }
    .hd-photo-wrap { width: 72px; height: 72px; align-self: flex-start; }
    .service-grid  { grid-template-columns: repeat(2, 1fr); }
.cta           { flex-direction: column; align-items: flex-start; }
    .cta-right     { align-items: flex-start; }
    .work-grid     { display: flex; flex-direction: column; gap: 0; background: none; border: none; border-top: 1px solid #252525; }
    .work-card     { flex-direction: row; align-items: center; gap: 14px; padding: 14px 0; background: none; border-bottom: 1px solid #252525; border-radius: 0; }
    .work-mark     { width: 28px; height: 28px; flex-shrink: 0; }
    .work-logo     { width: 20px; height: 20px; }
    .work-body     { flex: 1; gap: 3px; }
    .cta-mobile    { display: flex; margin-top: 36px; }
  }

  @media (max-width: 400px) {
    .service-grid { grid-template-columns: 1fr; }
  }
</style>
