<script lang="ts">
  import { stats } from './constants';
  import { hero } from './styles';
  import { shared } from '$lib/tokens';
</script>

<section id="home" class={hero.section}>

  <div class={hero.topBar}>
    <span>Est. MMXXIV</span>
    <span class="flex items-center gap-2">
      <span class={hero.pulse}></span>
      Lorem ipsum dolor sit
    </span>
    <span>Portfolio v2.0</span>
  </div>

  <div class={hero.grid}>
    <!-- Headline column -->
    <div class={hero.left}>
      <div>
        <p class={hero.eyebrow}>— Lorem ipsum dolor sit amet</p>
        <h1 class={hero.h1}>
          Lorem<br/>
          <span class={hero.h1Accent}>Ipsum</span><br/>
          Dolor.
        </h1>
        <p class={hero.subtext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.
        </p>
        <div class={hero.btns}>
          <a href="#projects" class={shared.btnPrimary}>Lorem Ipsum →</a>
          <a href="#contact"  class={shared.btnOutline}>Dolor Sit</a>
        </div>
      </div>
    </div>

    <!-- Desktop stats column -->
    <div class={hero.statsCol}>
      {#each stats as [num, label]}
        <div class={hero.statCell}>
          <div class={hero.statNum}>{num}</div>
          <div class={hero.statLabel}>{label}</div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Mobile stats row -->
  <div class={hero.mobileStats}>
    {#each stats as [num, label]}
      <div class={hero.mobileCell}>
        <div class="text-xl font-bold">{num}</div>
        <div class="text-[10px] font-bold uppercase tracking-widest text-[#6B6B6B] mt-0.5">{label}</div>
      </div>
    {/each}
  </div>
</section>
