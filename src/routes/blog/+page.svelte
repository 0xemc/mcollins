<script lang="ts">
  let { data } = $props();
</script>

<svelte:head>
  <title>Blog — Michael Collins</title>
  <meta name="description" content="Writing from Michael Collins." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
</svelte:head>

<div class="wrap">

  <header class="hd">
    <a href="/" class="hd-logo">MC<span class="cursor">_</span></a>
    <span class="hd-label">Blog</span>
  </header>

  <ul class="post-list">
    {#each data.posts as post}
      <li class="post-item">
        <a href="/blog/{post.slug}" class="post-link">
          <span class="post-title">{post.title}</span>
          <span class="post-date">{post.date}</span>
        </a>
        {#if post.description}
          <p class="post-desc">{post.description}</p>
        {/if}
      </li>
    {:else}
      <li class="post-empty">Nothing published yet.</li>
    {/each}
  </ul>

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
  .hd-label {
    font-size: 0.64rem;
    font-weight: 400;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #999;
  }

  .post-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  .post-item {
    padding: 20px 0;
    border-bottom: 1px solid #252525;
  }
  .post-item:first-child {
    border-top: 1px solid #252525;
  }
  .post-link {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 16px;
  }
  .post-title {
    font-size: 0.95rem;
    font-weight: 400;
    color: #e0e0e0;
    letter-spacing: 0.01em;
    transition: color 0.15s;
  }
  .post-link:hover .post-title { color: #caff00; }
  .post-date {
    font-size: 0.7rem;
    font-weight: 300;
    color: #777;
    letter-spacing: 0.04em;
    flex-shrink: 0;
  }
  .post-desc {
    margin: 8px 0 0;
    font-size: 0.8rem;
    font-weight: 300;
    color: #aaa;
    line-height: 1.6;
  }
  .post-empty {
    padding: 20px 0;
    font-size: 0.85rem;
    color: #777;
    border-top: 1px solid #252525;
  }
</style>
