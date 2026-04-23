<script lang="ts">
  import { contactLinks, formFields } from './constants';
  import { contact as s } from './styles';
  import { shared } from '$lib/tokens';
  import SectionHeader from '../SectionHeader/SectionHeader.svelte';
</script>

<section id="contact" class={shared.sectionWrap}>
  <SectionHeader label="Get In Touch" title="Let's Work Together" />

  <div class={s.grid}>
    <!-- CTA + contact links -->
    <div class={s.left}>
      <div>
        <p class={s.headline}>
          Let's build<br/>something<br/><span class={s.headlineAccent}>great.</span>
        </p>
        <p class={s.subtext}>
          Looking for a senior engineer or technical lead for your next project?
          I'm available for contract work and open to discussing what you're building.
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
        <label class={s.label} for="message">Message</label>
        <textarea id="message" rows="4" placeholder="Tell me about your project..."
          class={s.textarea}></textarea>
      </div>
      <div class={s.submitWrap}>
        <button type="submit" class={s.submit}>Send Message →</button>
      </div>
    </form>
  </div>
</section>
