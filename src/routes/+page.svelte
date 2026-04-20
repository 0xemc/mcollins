<script lang="ts">
  import '@fontsource/space-grotesk/400.css';
  import '@fontsource/space-grotesk/700.css';

  let menuOpen = $state(false);

  const navItems = [
    { label: 'Lorem', href: '#services' },
    { label: 'Ipsum', href: '#stack' },
    { label: 'Dolor', href: '#projects' },
    { label: 'Sit', href: '#about' },
    { label: 'Amet', href: '#contact' },
  ];

  const services = [
    { num: '01', title: 'Lorem Ipsum Dolor', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { num: '02', title: 'Consectetur Adipiscing', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { num: '03', title: 'Sed Do Eiusmod', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { num: '04', title: 'Tempor Incididunt', desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { num: '05', title: 'Labore Et Dolore', desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.' },
    { num: '06', title: 'Magna Aliqua Enim', desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.' },
  ];

  const stack = [
    'Lorem Ipsum', 'Dolor Sit', 'Amet Elit', 'Sed Do',
    'Eiusmod Tempor', 'Incididunt Ut', 'Labore Dolore',
    'Magna Aliqua', 'Enim Ad Minim', 'Veniam Quis',
    'Nostrud Exercit', 'Ullamco Labor',
  ];

  const projects = [
    {
      num: '001',
      title: 'Lorem Ipsum Dolor Platform',
      tags: ['Amet', 'Consectetur', 'Adipiscing'],
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      year: '2025',
    },
    {
      num: '002',
      title: 'Sed Do Eiusmod Suite',
      tags: ['Tempor', 'Incididunt', 'Labore'],
      desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      year: '2024',
    },
    {
      num: '003',
      title: 'Magna Aliqua App',
      tags: ['Dolore', 'Enim', 'Minim'],
      desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      year: '2024',
    },
  ];
</script>

<svelte:head>
  <title>Lorem Ipsum — Dolor Sit Amet</title>
  <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
</svelte:head>

<!-- ══════════════════════════════════════════════ NAV -->
<header class="sticky top-0 z-50 bg-[#F2F0E8] border-b-2 border-[#0A0A0A]">
  <nav class="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

    <a href="#home" class="font-bold text-xl tracking-tighter text-[#0A0A0A] uppercase">
      LI<span class="text-[#CAFF00] [-webkit-text-stroke:1px_#0A0A0A]">.</span>
    </a>

    <!-- Desktop -->
    <ul class="hidden md:flex items-center gap-0 text-xs font-bold uppercase tracking-widest">
      {#each navItems as item}
        <li>
          <a href={item.href}
            class="px-4 py-4 text-[#6B6B6B] hover:text-[#0A0A0A] hover:bg-[#CAFF00] transition-colors border-l-2 border-transparent hover:border-[#0A0A0A] inline-block">
            {item.label}
          </a>
        </li>
      {/each}
    </ul>

    <a href="#contact"
      class="hidden md:inline-block bg-[#0A0A0A] text-[#CAFF00] text-xs font-bold uppercase tracking-widest px-5 py-2.5 border-2 border-[#0A0A0A] hover:bg-[#CAFF00] hover:text-[#0A0A0A] transition-colors">
      Lorem →
    </a>

    <button class="md:hidden font-bold text-xs uppercase tracking-widest border-2 border-[#0A0A0A] px-3 py-1.5"
      onclick={() => menuOpen = !menuOpen}>
      {menuOpen ? 'Close' : 'Menu'}
    </button>
  </nav>

  {#if menuOpen}
    <div class="md:hidden border-t-2 border-[#0A0A0A] bg-[#F2F0E8]">
      {#each navItems as item}
        <a href={item.href}
          class="block px-6 py-4 text-xs font-bold uppercase tracking-widest border-b border-[#0A0A0A]/20 hover:bg-[#CAFF00] transition-colors"
          onclick={() => menuOpen = false}>
          {item.label}
        </a>
      {/each}
      <a href="#contact" class="block px-6 py-4 text-xs font-bold uppercase tracking-widest bg-[#0A0A0A] text-[#CAFF00]">
        Lorem →
      </a>
    </div>
  {/if}
</header>

<!-- ══════════════════════════════════════════════ HERO -->
<section id="home" class="border-b-2 border-[#0A0A0A] min-h-[92vh] flex flex-col">

  <!-- Top bar -->
  <div class="border-b-2 border-[#0A0A0A] px-6 py-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#6B6B6B]">
    <span>Est. MMXXIV</span>
    <span class="flex items-center gap-2">
      <span class="w-1.5 h-1.5 rounded-full bg-[#CAFF00] border border-[#0A0A0A] inline-block animate-pulse"></span>
      Lorem ipsum dolor sit
    </span>
    <span>Portfolio v2.0</span>
  </div>

  <!-- Main hero grid -->
  <div class="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_auto] max-w-7xl mx-auto w-full">

    <!-- Left: headline -->
    <div class="p-8 lg:p-16 flex flex-col justify-between border-r-0 lg:border-r-2 border-[#0A0A0A]">
      <div>
        <p class="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-6">
          — Lorem ipsum dolor sit amet
        </p>
        <h1 class="text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tighter text-[#0A0A0A] uppercase mb-8">
          Lorem<br/>
          <span class="text-[#FF3B00]">Ipsum</span><br/>
          Dolor.
        </h1>
        <p class="text-base text-[#6B6B6B] max-w-lg leading-relaxed mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.
        </p>
        <div class="flex flex-wrap gap-3">
          <a href="#projects"
            class="bg-[#0A0A0A] text-[#F2F0E8] font-bold uppercase text-xs tracking-widest px-6 py-3.5 border-2 border-[#0A0A0A] hover:bg-[#CAFF00] hover:text-[#0A0A0A] transition-colors">
            Lorem Ipsum →
          </a>
          <a href="#contact"
            class="bg-transparent text-[#0A0A0A] font-bold uppercase text-xs tracking-widest px-6 py-3.5 border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F2F0E8] transition-colors">
            Dolor Sit
          </a>
        </div>
      </div>
    </div>

    <!-- Right: stats column -->
    <div class="hidden lg:grid grid-rows-4 w-48 border-l-2 border-[#0A0A0A] divide-y-2 divide-[#0A0A0A]">
      {#each [['XX+', 'Lorem'], ['XX+', 'Ipsum'], ['XX+', 'Dolor'], ['XX%', 'Sit']] as [n, l]}
        <div class="flex flex-col items-center justify-center p-4 text-center hover:bg-[#CAFF00] transition-colors cursor-default">
          <div class="text-3xl font-bold text-[#0A0A0A]">{n}</div>
          <div class="text-[10px] font-bold uppercase tracking-widest text-[#6B6B6B] mt-1">{l}</div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Mobile stats row -->
  <div class="lg:hidden grid grid-cols-4 border-t-2 border-[#0A0A0A] divide-x-2 divide-[#0A0A0A]">
    {#each [['XX+', 'Lorem'], ['XX+', 'Ipsum'], ['XX+', 'Dolor'], ['XX%', 'Sit']] as [n, l]}
      <div class="py-5 text-center">
        <div class="text-xl font-bold">{n}</div>
        <div class="text-[10px] font-bold uppercase tracking-widest text-[#6B6B6B] mt-0.5">{l}</div>
      </div>
    {/each}
  </div>
</section>

<!-- ══════════════════════════════════════════════ SERVICES -->
<section id="services" class="border-b-2 border-[#0A0A0A]">
  <!-- Section header -->
  <div class="border-b-2 border-[#0A0A0A] px-6 lg:px-16 py-6 flex items-baseline justify-between max-w-7xl mx-auto w-full">
    <h2 class="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B]">§ Lorem Ipsum</h2>
    <span class="text-4xl font-bold uppercase tracking-tighter text-[#0A0A0A]">Dolor Sit</span>
  </div>

  <div class="max-w-7xl mx-auto w-full divide-y-2 divide-[#0A0A0A]">
    {#each services as s, i}
      <div class="grid grid-cols-[4rem_1fr_auto] lg:grid-cols-[6rem_1fr_2fr_auto] items-start gap-0 px-6 lg:px-16 py-8 group hover:bg-[#CAFF00] transition-colors cursor-default border-[#0A0A0A]">
        <!-- Number -->
        <span class="text-xs font-bold text-[#6B6B6B] group-hover:text-[#0A0A0A] pt-1">{s.num}</span>
        <!-- Title -->
        <h3 class="text-lg lg:text-2xl font-bold uppercase tracking-tight text-[#0A0A0A]">{s.title}</h3>
        <!-- Desc (hidden on mobile) -->
        <p class="hidden lg:block text-sm text-[#6B6B6B] group-hover:text-[#0A0A0A] leading-relaxed max-w-md">{s.desc}</p>
        <!-- Arrow -->
        <span class="text-[#0A0A0A] font-bold text-lg self-center group-hover:translate-x-1 transition-transform">→</span>
      </div>
    {/each}
  </div>
</section>

<!-- ══════════════════════════════════════════════ STACK -->
<section id="stack" class="border-b-2 border-[#0A0A0A]">
  <div class="border-b-2 border-[#0A0A0A] px-6 lg:px-16 py-6 flex items-baseline justify-between max-w-7xl mx-auto w-full">
    <h2 class="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B]">§ Ipsum Dolor</h2>
    <span class="text-4xl font-bold uppercase tracking-tighter text-[#0A0A0A]">Amet Sit</span>
  </div>

  <div class="max-w-7xl mx-auto w-full px-6 lg:px-16 py-12">
    <div class="flex flex-wrap gap-3">
      {#each stack as tech, i}
        <div class="border-2 border-[#0A0A0A] px-4 py-2 text-xs font-bold uppercase tracking-widest
          hover:bg-[#0A0A0A] hover:text-[#CAFF00] transition-colors cursor-default
          {i % 5 === 0 ? 'bg-[#FF3B00] text-[#F2F0E8] border-[#FF3B00] hover:bg-[#0A0A0A] hover:border-[#0A0A0A]' : ''}
          {i % 7 === 0 ? 'bg-[#CAFF00] border-[#0A0A0A]' : ''}">
          {tech}
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════ PROJECTS -->
<section id="projects" class="border-b-2 border-[#0A0A0A]">
  <div class="border-b-2 border-[#0A0A0A] px-6 lg:px-16 py-6 flex items-baseline justify-between max-w-7xl mx-auto w-full">
    <h2 class="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B]">§ Dolor Ipsum</h2>
    <span class="text-4xl font-bold uppercase tracking-tighter text-[#0A0A0A]">Lorem Sit</span>
  </div>

  <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#0A0A0A]">
    {#each projects as p}
      <a href="#" class="group block p-8 lg:p-10 hover:bg-[#0A0A0A] transition-colors">
        <div class="flex items-start justify-between mb-8">
          <span class="text-xs font-bold text-[#6B6B6B] group-hover:text-[#6B6B6B]">{p.num}</span>
          <span class="text-xs font-bold text-[#6B6B6B] group-hover:text-[#6B6B6B]">{p.year}</span>
        </div>

        <h3 class="text-xl font-bold uppercase tracking-tight text-[#0A0A0A] group-hover:text-[#CAFF00] mb-4 leading-tight">{p.title}</h3>
        <p class="text-sm text-[#6B6B6B] group-hover:text-[#6B6B6B] leading-relaxed mb-8">{p.desc}</p>

        <div class="flex flex-wrap gap-2 mb-6">
          {#each p.tags as tag}
            <span class="text-[10px] font-bold uppercase tracking-widest border border-[#0A0A0A] group-hover:border-[#6B6B6B] px-2 py-1 text-[#0A0A0A] group-hover:text-[#6B6B6B]">{tag}</span>
          {/each}
        </div>

        <div class="text-xs font-bold uppercase tracking-widest text-[#0A0A0A] group-hover:text-[#CAFF00] flex items-center gap-2">
          Lorem Ipsum <span class="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </div>
      </a>
    {/each}
  </div>
</section>

<!-- ══════════════════════════════════════════════ ABOUT -->
<section id="about" class="border-b-2 border-[#0A0A0A]">
  <div class="border-b-2 border-[#0A0A0A] px-6 lg:px-16 py-6 flex items-baseline justify-between max-w-7xl mx-auto w-full">
    <h2 class="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B]">§ Sit Lorem</h2>
    <span class="text-4xl font-bold uppercase tracking-tighter text-[#0A0A0A]">Ipsum Dolor</span>
  </div>

  <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#0A0A0A]">

    <!-- Left: bio -->
    <div class="p-8 lg:p-16">
      <!-- Avatar block -->
      <div class="w-24 h-24 border-2 border-[#0A0A0A] bg-[#CAFF00] flex items-center justify-center text-2xl font-bold uppercase mb-8">
        LI
      </div>

      <div class="space-y-4 text-[#6B6B6B] leading-relaxed text-sm mb-10">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.</p>
      </div>

      <a href="#contact" class="inline-block bg-[#FF3B00] text-[#F2F0E8] font-bold uppercase text-xs tracking-widest px-6 py-3.5 border-2 border-[#FF3B00] hover:bg-[#0A0A0A] hover:border-[#0A0A0A] transition-colors">
        Lorem Ipsum →
      </a>
    </div>

    <!-- Right: info grid -->
    <div class="divide-y-2 divide-[#0A0A0A]">
      {#each [
        ['Lorem Ipsum', 'Dolor sit amet consectetur'],
        ['Consectetur', 'Adipiscing elit sed do'],
        ['Sed Do', 'Eiusmod tempor incididunt'],
        ['Incididunt', 'Ut labore et dolore'],
        ['Labore Et', 'Magna aliqua enim ad'],
        ['Magna Aliqua', 'Minim veniam quis nostrud'],
      ] as [label, val]}
        <div class="px-8 py-6 flex items-center justify-between group hover:bg-[#CAFF00] transition-colors">
          <span class="text-xs font-bold uppercase tracking-widest text-[#6B6B6B]">{label}</span>
          <span class="text-sm font-bold text-[#0A0A0A]">{val}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════ CONTACT -->
<section id="contact" class="border-b-2 border-[#0A0A0A]">
  <div class="border-b-2 border-[#0A0A0A] px-6 lg:px-16 py-6 flex items-baseline justify-between max-w-7xl mx-auto w-full">
    <h2 class="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B]">§ Amet Lorem</h2>
    <span class="text-4xl font-bold uppercase tracking-tighter text-[#0A0A0A]">Dolor Ipsum</span>
  </div>

  <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#0A0A0A]">

    <!-- Left: CTA + links -->
    <div class="p-8 lg:p-16 flex flex-col justify-between">
      <div>
        <p class="text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-tight tracking-tighter text-[#0A0A0A] mb-8">
          Lorem ipsum<br/>dolor sit<br/><span class="text-[#FF3B00]">amet.</span>
        </p>
        <p class="text-sm text-[#6B6B6B] leading-relaxed max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>

      <div class="mt-10 space-y-3">
        {#each [
          { label: '✉ Lorem', val: 'lorem@ipsum.dolor' },
          { label: '◈ Ipsum', val: '/in/loremipsum' },
          { label: '⬡ Dolor', val: 'lorem.ipsum/dolor' },
        ] as item}
          <a href="#" class="flex items-center justify-between border-2 border-[#0A0A0A] px-5 py-4 hover:bg-[#0A0A0A] hover:text-[#CAFF00] transition-colors group">
            <span class="text-xs font-bold uppercase tracking-widest text-[#6B6B6B] group-hover:text-[#CAFF00]">{item.label}</span>
            <span class="text-xs font-bold text-[#0A0A0A] group-hover:text-[#CAFF00]">{item.val} →</span>
          </a>
        {/each}
      </div>
    </div>

    <!-- Right: form -->
    <form class="p-8 lg:p-16 space-y-0 divide-y-2 divide-[#0A0A0A] border-t-2 lg:border-t-0 border-[#0A0A0A]"
      onsubmit={(e) => e.preventDefault()}>
      {#each [
        { id: 'name', label: 'Lorem', type: 'text', placeholder: 'Lorem ipsum' },
        { id: 'email', label: 'Ipsum', type: 'email', placeholder: 'lorem@ipsum.dolor' },
        { id: 'subject', label: 'Dolor', type: 'text', placeholder: 'Sit amet consectetur' },
      ] as f}
        <div class="py-4">
          <label class="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-2" for={f.id}>{f.label}</label>
          <input id={f.id} type={f.type} placeholder={f.placeholder}
            class="w-full bg-transparent border-0 text-sm font-bold text-[#0A0A0A] placeholder-[#AAAAAA] focus:outline-none py-1" />
        </div>
      {/each}
      <div class="py-4">
        <label class="block text-[10px] font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-2" for="message">Amet</label>
        <textarea id="message" rows="4" placeholder="Lorem ipsum dolor sit amet..."
          class="w-full bg-transparent border-0 text-sm font-bold text-[#0A0A0A] placeholder-[#AAAAAA] focus:outline-none py-1 resize-none"></textarea>
      </div>
      <div class="pt-6">
        <button type="submit"
          class="w-full bg-[#0A0A0A] text-[#CAFF00] font-bold uppercase text-xs tracking-widest py-4 border-2 border-[#0A0A0A] hover:bg-[#CAFF00] hover:text-[#0A0A0A] transition-colors">
          Lorem Ipsum →
        </button>
      </div>
    </form>
  </div>
</section>

<!-- ══════════════════════════════════════════════ FOOTER -->
<footer class="border-b-2 border-[#0A0A0A]">
  <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#0A0A0A]">
    <div class="px-6 lg:px-16 py-6 flex items-center gap-6">
      <span class="font-bold text-xl tracking-tighter uppercase">LI<span class="text-[#FF3B00]">.</span></span>
      <span class="text-xs text-[#6B6B6B] font-bold uppercase tracking-widest">© 2026 Lorem Ipsum. Dolor sit amet.</span>
    </div>
    <div class="flex divide-x-2 divide-[#0A0A0A]">
      {#each navItems.slice(0, 4) as item}
        <a href={item.href}
          class="px-5 py-6 text-[10px] font-bold uppercase tracking-widest text-[#6B6B6B] hover:text-[#0A0A0A] hover:bg-[#CAFF00] transition-colors">
          {item.label}
        </a>
      {/each}
    </div>
  </div>
</footer>
