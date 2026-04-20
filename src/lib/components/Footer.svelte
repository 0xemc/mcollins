<script lang="ts">
  import { navItems } from '$lib/constants/nav';
  import { footer as s } from '$lib/styles/footer';
</script>

<footer class={s.wrap}>
  <div class={s.inner}>
    <div class={s.left}>
      <span class={s.logo}>LI<span class="text-[#FF3B00]">.</span></span>
      <span class={s.copy}>© 2026 Lorem Ipsum. Dolor sit amet.</span>
    </div>
    <div class={s.links}>
      {#each navItems.slice(0, 4) as item}
        <a href={item.href} class={s.link}>{item.label}</a>
      {/each}
    </div>
  </div>
</footer>
