<script lang="ts">
  import '@fontsource/space-grotesk/400.css';
  import '@fontsource/space-grotesk/700.css';

  import Nav      from '$lib/components/Nav/Nav.svelte';
  import Hero     from '$lib/components/Hero/Hero.svelte';
  import Services from '$lib/components/Services/Services.svelte';
  import Stack    from '$lib/components/Stack/Stack.svelte';
  import Projects from '$lib/components/Projects/Projects.svelte';
  import About    from '$lib/components/About/About.svelte';
  import Contact  from '$lib/components/Contact/Contact.svelte';
  import Footer   from '$lib/components/Footer/Footer.svelte';
</script>

<svelte:head>
  <title>Lorem Ipsum — Dolor Sit Amet</title>
  <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
</svelte:head>

<Nav />
<Hero />
<Services />
<Stack />
<Projects />
<About />
<Contact />
<Footer />
