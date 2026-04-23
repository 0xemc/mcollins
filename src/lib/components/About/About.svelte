<script lang="ts">
  import { bio, infoGrid } from './constants';
  import { about as s } from './styles';
  import { shared } from '$lib/tokens';
  import SectionHeader from '../SectionHeader/SectionHeader.svelte';
</script>

<section id="about" class={shared.sectionWrap}>
  <SectionHeader label="Background" title="Experience" />

  <div class={s.grid}>
    <!-- Bio column -->
    <div class={s.left}>
      <div class={s.avatar}>MC</div>
      <div class={s.bio}>
        {#each bio as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
      <a href="#contact" class={shared.btnHot}>Work With Me →</a>
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
