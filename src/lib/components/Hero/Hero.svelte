<script lang="ts">
  import { stats } from './constants';
  import { hero } from './styles';
  import { shared } from '$lib/tokens';
</script>

<section id="home" class={hero.section}>

  <div class={hero.topBar}>
    <span>Brisbane, AU</span>
    <span class="flex items-center gap-2">
      <span class={hero.pulse}></span>
      Available for Contract
    </span>
    <span>v2025</span>
  </div>

  <div class={hero.grid}>
    <!-- Headline column -->
    <div class={hero.left}>
      <div>
        <p class={hero.eyebrow}>— Software Engineer · 10+ Years Experience</p>
        <h1 class={hero.h1}>
          Michael<br/>
          <span class={hero.h1Accent}>Collins</span><br/>
          .
        </h1>
        <p class={hero.subtext}>
          Full-stack engineer and technical lead with a decade of experience shipping
          production software across climate tech, finance, defence and government.
        </p>
        <div class={hero.btns}>
          <a href="#about"   class={shared.btnPrimary}>My Experience →</a>
          <a href="#contact" class={shared.btnOutline}>Get In Touch</a>
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
