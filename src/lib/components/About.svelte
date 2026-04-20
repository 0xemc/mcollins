<script lang="ts">
  import { bio, infoGrid } from '$lib/constants/about';
  import { about as s } from '$lib/styles/about';
  import { shared } from '$lib/styles/tokens';
  import SectionHeader from './SectionHeader.svelte';
</script>

<section id="about" class={shared.sectionWrap}>
  <SectionHeader label="Sit Lorem" title="Ipsum Dolor" />

  <div class={s.grid}>
    <!-- Bio column -->
    <div class={s.left}>
      <div class={s.avatar}>LI</div>
      <div class={s.bio}>
        {#each bio as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
      <a href="#contact" class={shared.btnHot}>Lorem Ipsum →</a>
    </div>

    <!-- Info grid column -->
    <div class={s.right}>
      {#each infoGrid as [label, val]}
        <div class={s.infoRow}>
          <span class={s.infoLabel}>{label}</span>
          <span class={s.infoVal}>{val}</span>
        </div>
      {/each}
    </div>
  </div>
</section>
