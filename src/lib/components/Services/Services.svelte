<script lang="ts">
  import { services } from './constants';
  import { services as s } from './styles';
  import { shared } from '$lib/tokens';
  import SectionHeader from '../SectionHeader/SectionHeader.svelte';
</script>

<section id="services" class={shared.sectionWrap}>
  <SectionHeader label="Lorem Ipsum" title="Dolor Sit" />

  <div class={s.list}>
    {#each services as service}
      <div class={s.row}>
        <span class={s.num}>{service.num}</span>
        <h3 class={s.title}>{service.title}</h3>
        <p class={s.desc}>{service.desc}</p>
        <span class={s.arrow}>→</span>
      </div>
    {/each}
  </div>
</section>
