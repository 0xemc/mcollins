<script lang="ts">
  import { navItems } from './constants';
  import { nav } from './styles';

  let menuOpen = $state(false);
</script>

<header class={nav.header}>
  <nav class={nav.inner}>
    <a href="#home" class={nav.logo}>
      MC<span class="text-[#CAFF00] [-webkit-text-stroke:1px_#0A0A0A]">.</span>
    </a>

    <ul class={nav.desktopList}>
      {#each navItems as item}
        <li>
          <a href={item.href} class={nav.desktopLink}>{item.label}</a>
        </li>
      {/each}
    </ul>

    <a href="#contact" class={nav.cta}>Hire Me →</a>

    <button class={nav.burger} onclick={() => menuOpen = !menuOpen} aria-label="Toggle menu">
      {menuOpen ? 'Close' : 'Menu'}
    </button>
  </nav>

  {#if menuOpen}
    <div class={nav.mobileMenu}>
      {#each navItems as item}
        <a href={item.href} class={nav.mobileLink} onclick={() => menuOpen = false}>
          {item.label}
        </a>
      {/each}
      <a href="#contact" class={nav.mobileCta}>Hire Me →</a>
    </div>
  {/if}
</header>
