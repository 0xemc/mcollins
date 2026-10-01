<script lang="ts">
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.post.title} — Michael Collins</title>
  <meta name="description" content={data.post.description} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
</svelte:head>

<div class="wrap">

  <header class="hd">
    <a href="/" class="hd-logo">MC<span class="cursor">_</span></a>
    <a href="/blog" class="hd-back">&larr; Blog</a>
  </header>

  <article class="post">
    <h1 class="post-title">{data.post.title}</h1>
    <p class="post-date">{data.post.date}</p>
    <div class="post-body">
      {@html data.post.html}
    </div>
  </article>

</div>

<style>
  .wrap {
    font-family: 'IBM Plex Mono', monospace;
    max-width: 700px;
    margin: 0 auto;
    padding: 36px 44px 64px;
    animation: fadein 0.4s ease both;
  }

  @keyframes fadein {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }

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
  .hd-back {
    font-size: 0.64rem;
    font-weight: 400;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #999;
    transition: color 0.15s;
  }
  .hd-back:hover { color: #caff00; }

  .post-title {
    margin: 0 0 8px;
    font-size: clamp(1.6rem, 4vw, 2.2rem);
    font-weight: 400;
    letter-spacing: -0.02em;
    color: #efefef;
  }
  .post-date {
    margin: 0 0 32px;
    font-size: 0.7rem;
    font-weight: 300;
    color: #777;
    letter-spacing: 0.04em;
  }

  .post-body {
    font-size: 0.88rem;
    font-weight: 300;
    line-height: 1.8;
    color: #bbb;
  }
  .post-body :global(p) { margin: 0 0 1.2em; }
  .post-body :global(img) {
    max-width: 100%;
    height: auto;
    border: 1px solid #252525;
    margin: 0 0 1.2em;
  }
  .post-body :global(h2) {
    margin: 2em 0 0.8em;
    font-size: 1.1rem;
    font-weight: 400;
    color: #e0e0e0;
  }
  .post-body :global(a) {
    color: #caff00;
    text-decoration: underline;
  }
  .post-body :global(code) {
    font-size: 0.85em;
    background: #161616;
    border: 1px solid #252525;
    padding: 2px 5px;
  }
  .post-body :global(pre) {
    background: #161616;
    border: 1px solid #252525;
    padding: 16px;
    overflow-x: auto;
  }
  .post-body :global(pre code) {
    background: none;
    border: none;
    padding: 0;
  }
</style>
