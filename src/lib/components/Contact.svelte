<script lang="ts">
  import { contactLinks, formFields } from '$lib/constants/contact';
  import { contact as s } from '$lib/styles/contact';
  import { shared } from '$lib/styles/tokens';
  import SectionHeader from './SectionHeader.svelte';
</script>

<section id="contact" class={shared.sectionWrap}>
  <SectionHeader label="Amet Lorem" title="Dolor Ipsum" />

  <div class={s.grid}>
    <!-- CTA + contact links -->
    <div class={s.left}>
      <div>
        <p class={s.headline}>
          Lorem ipsum<br/>dolor sit<br/><span class={s.headlineAccent}>amet.</span>
        </p>
        <p class={s.subtext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna.
        </p>
      </div>
      <div class={s.linkList}>
        {#each contactLinks as item}
          <a href={item.href} class={s.linkItem}>
            <span class={s.linkLabel}>{item.icon} {item.label}</span>
            <span class={s.linkVal}>{item.val} →</span>
          </a>
        {/each}
      </div>
    </div>

    <!-- Form -->
    <form class={s.form} onsubmit={(e) => e.preventDefault()}>
      {#each formFields as field}
        <div class={s.fieldWrap}>
          <label class={s.label} for={field.id}>{field.label}</label>
          <input id={field.id} type={field.type} placeholder={field.placeholder} class={s.input} />
        </div>
      {/each}
      <div class={s.fieldWrap}>
        <label class={s.label} for="message">Amet</label>
        <textarea id="message" rows="4" placeholder="Lorem ipsum dolor sit amet..."
          class={s.textarea}></textarea>
      </div>
      <div class={s.submitWrap}>
        <button type="submit" class={s.submit}>Lorem Ipsum →</button>
      </div>
    </form>
  </div>
</section>
