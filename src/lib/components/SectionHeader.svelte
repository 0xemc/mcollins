<script lang="ts">
  import { shared } from '$lib/styles/tokens';

  interface Props {
    label: string;
    title: string;
  }
  let { label, title }: Props = $props();
</script>

<div class={shared.sectionBar}>
  <h2 class={shared.sectionLabel}>§ {label}</h2>
  <span class={shared.sectionTitle}>{title}</span>
</div>
