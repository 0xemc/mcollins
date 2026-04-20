<script lang="ts">
  import { stack } from '$lib/constants/stack';
  import { stack as s } from '$lib/styles/stack';
  import { shared } from '$lib/styles/tokens';
  import SectionHeader from './SectionHeader.svelte';
</script>

<section id="stack" class={shared.sectionWrap}>
  <SectionHeader label="Ipsum Dolor" title="Amet Sit" />

  <div class={s.body}>
    <div class={s.tags}>
      {#each stack as tech, i}
        <div class="{s.tag} {i % 7 === 0 ? s.tagAcid : ''} {i % 5 === 0 ? s.tagHot : ''}">
          {tech}
        </div>
      {/each}
    </div>
  </div>
</section>
