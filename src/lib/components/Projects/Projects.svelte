<script lang="ts">
  import { projects } from './constants';
  import { projects as s } from './styles';
  import { shared } from '$lib/tokens';
  import SectionHeader from '../SectionHeader/SectionHeader.svelte';
</script>

<section id="projects" class={shared.sectionWrap}>
  <SectionHeader label="Dolor Ipsum" title="Lorem Sit" />

  <div class={s.grid}>
    {#each projects as project}
      <a href="#" class={s.card}>
        <div class={s.topRow}>
          <span class={s.meta}>{project.num}</span>
          <span class={s.meta}>{project.year}</span>
        </div>
        <h3 class={s.title}>{project.title}</h3>
        <p class={s.desc}>{project.desc}</p>
        <div class={s.tags}>
          {#each project.tags as tag}
            <span class={s.tag}>{tag}</span>
          {/each}
        </div>
        <div class={s.link}>
          Lorem Ipsum <span class={s.arrow}>→</span>
        </div>
      </a>
    {/each}
  </div>
</section>
