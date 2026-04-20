<script lang="ts">
  let menuOpen = $state(false);

  const services = [
    {
      icon: '🤖',
      title: 'AI Integration',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'
    },
    {
      icon: '⚡',
      title: 'Full Stack Development',
      desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.'
    },
    {
      icon: '🧠',
      title: 'LLM Architecture',
      desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.'
    },
    {
      icon: '📱',
      title: 'Mobile & Web Apps',
      desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed perspiciatis.'
    },
    {
      icon: '🔗',
      title: 'API & Automation',
      desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.'
    },
    {
      icon: '🛡️',
      title: 'Technical Consulting',
      desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.'
    }
  ];

  const stack = [
    { name: 'TypeScript', color: '#3178c6' },
    { name: 'Python', color: '#3572A5' },
    { name: 'Next.js', color: '#ffffff' },
    { name: 'SvelteKit', color: '#ff3e00' },
    { name: 'React Native', color: '#61dafb' },
    { name: 'Node.js', color: '#68a063' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'SQLite', color: '#003b57' },
    { name: 'Claude API', color: '#d4a96a' },
    { name: 'OpenAI', color: '#412991' },
    { name: 'Docker', color: '#2496ed' },
    { name: 'Tailwind CSS', color: '#38bdf8' },
  ];

  const projects = [
    {
      title: 'Lorem Ipsum AI Platform',
      tags: ['Next.js', 'Claude API', 'PostgreSQL'],
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '#'
    },
    {
      title: 'Dolor Sit Automation Suite',
      tags: ['Python', 'LangChain', 'Docker'],
      desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      link: '#'
    },
    {
      title: 'Consectetur Mobile App',
      tags: ['React Native', 'TypeScript', 'Node.js'],
      desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      link: '#'
    },
  ];
</script>

<svelte:head>
  <title>Lorem Ipsum — Full Stack AI Engineer</title>
  <meta name="description" content="Full Stack AI Engineer specialising in LLM integration, automation, and modern web applications." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<!-- NAV -->
<header class="fixed top-0 w-full z-50 border-b border-[#2a2a38] bg-[#0f0f13]/80 backdrop-blur-md">
  <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
    <a href="#home" class="font-semibold text-white tracking-tight">ML<span class="text-indigo-400">.</span></a>

    <!-- Desktop links -->
    <ul class="hidden md:flex items-center gap-8 text-sm text-[#8888a0]">
      {#each ['Services', 'Stack', 'Projects', 'About', 'Contact'] as item}
        <li><a href="#{item.toLowerCase()}" class="hover:text-white transition-colors">{item}</a></li>
      {/each}
    </ul>

    <a href="#contact" class="hidden md:inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
      Hire Me
    </a>

    <!-- Mobile burger -->
    <button
      class="md:hidden text-[#8888a0] hover:text-white"
      onclick={() => menuOpen = !menuOpen}
      aria-label="Toggle menu"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {#if menuOpen}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        {/if}
      </svg>
    </button>
  </nav>

  {#if menuOpen}
    <div class="md:hidden bg-[#16161d] border-t border-[#2a2a38] px-6 py-4 flex flex-col gap-4 text-sm">
      {#each ['Services', 'Stack', 'Projects', 'About', 'Contact'] as item}
        <a href="#{item.toLowerCase()}" class="text-[#8888a0] hover:text-white" onclick={() => menuOpen = false}>{item}</a>
      {/each}
      <a href="#contact" class="mt-2 bg-indigo-500 text-white text-center py-2 rounded-lg">Hire Me</a>
    </div>
  {/if}
</header>

<!-- HERO -->
<section id="home" class="min-h-screen flex items-center pt-16 relative overflow-hidden">
  <!-- Subtle gradient orbs -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
  </div>

  <div class="max-w-6xl mx-auto px-6 py-24 relative z-10">
    <div class="max-w-3xl">
      <div class="inline-flex items-center gap-2 bg-[#16161d] border border-[#2a2a38] rounded-full px-4 py-1.5 text-sm text-indigo-400 mb-8">
        <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        Available for new projects
      </div>

      <h1 class="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
        Full Stack<br/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">AI Engineer</span>
      </h1>

      <p class="text-xl text-[#8888a0] leading-relaxed mb-10 max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
      </p>

      <div class="flex flex-wrap gap-4">
        <a href="#projects" class="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg transition-colors">
          View My Work
        </a>
        <a href="#contact" class="border border-[#2a2a38] hover:border-indigo-500/50 text-[#e8e8f0] font-medium px-6 py-3 rounded-lg transition-colors">
          Get In Touch
        </a>
      </div>

      <!-- Stats -->
      <div class="mt-16 flex flex-wrap gap-12">
        {#each [['5+', 'Years Experience'], ['30+', 'Projects Delivered'], ['12+', 'AI Integrations'], ['100%', 'Remote Ready']] as [num, label]}
          <div>
            <div class="text-3xl font-bold text-white">{num}</div>
            <div class="text-sm text-[#8888a0] mt-1">{label}</div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- SERVICES -->
<section id="services" class="py-24 bg-[#16161d]">
  <div class="max-w-6xl mx-auto px-6">
    <div class="mb-16">
      <p class="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">What I Do</p>
      <h2 class="text-4xl font-bold text-white mb-4">Services</h2>
      <p class="text-[#8888a0] max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each services as service}
        <div class="bg-[#1e1e28] border border-[#2a2a38] rounded-xl p-6 hover:border-indigo-500/40 transition-colors group">
          <div class="text-3xl mb-4">{service.icon}</div>
          <h3 class="text-white font-semibold text-lg mb-2 group-hover:text-indigo-400 transition-colors">{service.title}</h3>
          <p class="text-[#8888a0] text-sm leading-relaxed">{service.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- TECH STACK -->
<section id="stack" class="py-24">
  <div class="max-w-6xl mx-auto px-6">
    <div class="mb-16">
      <p class="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">Technologies</p>
      <h2 class="text-4xl font-bold text-white mb-4">Tech Stack</h2>
      <p class="text-[#8888a0] max-w-xl">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.
      </p>
    </div>

    <div class="flex flex-wrap gap-3">
      {#each stack as tech}
        <div class="flex items-center gap-2 bg-[#16161d] border border-[#2a2a38] rounded-lg px-4 py-2.5 hover:border-indigo-500/40 transition-colors">
          <div class="w-2.5 h-2.5 rounded-full" style="background-color: {tech.color}"></div>
          <span class="text-sm text-[#e8e8f0] font-medium">{tech.name}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section id="projects" class="py-24 bg-[#16161d]">
  <div class="max-w-6xl mx-auto px-6">
    <div class="mb-16">
      <p class="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">Portfolio</p>
      <h2 class="text-4xl font-bold text-white mb-4">Recent Projects</h2>
      <p class="text-[#8888a0] max-w-xl">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each projects as project}
        <a href={project.link} class="group bg-[#1e1e28] border border-[#2a2a38] rounded-xl p-6 hover:border-indigo-500/40 transition-all hover:-translate-y-1 block">
          <div class="flex flex-wrap gap-2 mb-4">
            {#each project.tags as tag}
              <span class="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full px-2.5 py-0.5">{tag}</span>
            {/each}
          </div>
          <h3 class="text-white font-semibold text-lg mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
          <p class="text-[#8888a0] text-sm leading-relaxed mb-4">{project.desc}</p>
          <div class="flex items-center gap-1.5 text-indigo-400 text-sm font-medium">
            View Project
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- ABOUT -->
<section id="about" class="py-24">
  <div class="max-w-6xl mx-auto px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <!-- Avatar placeholder -->
      <div class="relative">
        <div class="aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl bg-[#16161d] border border-[#2a2a38] flex items-center justify-center">
          <div class="text-center">
            <div class="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">ML</div>
            <p class="text-[#8888a0] text-sm">Profile Photo</p>
          </div>
        </div>
        <!-- Floating badge -->
        <div class="absolute -bottom-4 -right-4 bg-[#1e1e28] border border-[#2a2a38] rounded-xl px-4 py-3 shadow-xl">
          <div class="text-xs text-[#8888a0] mb-0.5">Based in</div>
          <div class="text-white font-semibold text-sm">🇦🇺 Australia</div>
        </div>
      </div>

      <!-- Bio -->
      <div>
        <p class="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">About Me</p>
        <h2 class="text-4xl font-bold text-white mb-6">Lorem Ipsum Dolor Sit</h2>
        <div class="space-y-4 text-[#8888a0] leading-relaxed">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.</p>
        </div>

        <div class="mt-8 grid grid-cols-2 gap-4">
          {#each [['Availability', 'Full-time / Contract'], ['Location', 'Remote (AU/Global)'], ['Response Time', '< 24 hours'], ['Languages', 'English']] as [label, val]}
            <div class="bg-[#16161d] border border-[#2a2a38] rounded-lg p-4">
              <div class="text-xs text-[#8888a0] mb-1">{label}</div>
              <div class="text-white text-sm font-medium">{val}</div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="py-24 bg-[#16161d]">
  <div class="max-w-6xl mx-auto px-6">
    <div class="max-w-2xl mx-auto text-center mb-16">
      <p class="text-indigo-400 text-sm font-medium uppercase tracking-widest mb-3">Get In Touch</p>
      <h2 class="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
      <p class="text-[#8888a0]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
      <!-- Contact info -->
      <div class="space-y-6">
        {#each [
          { icon: '✉️', label: 'Email', val: 'hello@loremipsum.dev', href: 'mailto:hello@loremipsum.dev' },
          { icon: '💼', label: 'LinkedIn', val: '/in/loremipsum', href: '#' },
          { icon: '🐙', label: 'GitHub', val: 'github.com/loremipsum', href: '#' },
        ] as item}
          <a href={item.href} class="flex items-center gap-4 bg-[#1e1e28] border border-[#2a2a38] rounded-xl p-4 hover:border-indigo-500/40 transition-colors group">
            <div class="text-2xl">{item.icon}</div>
            <div>
              <div class="text-xs text-[#8888a0] mb-0.5">{item.label}</div>
              <div class="text-white text-sm font-medium group-hover:text-indigo-400 transition-colors">{item.val}</div>
            </div>
          </a>
        {/each}
      </div>

      <!-- Contact form -->
      <form class="space-y-4" onsubmit={(e) => e.preventDefault()}>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-xs text-[#8888a0] mb-1.5" for="name">Name</label>
            <input id="name" type="text" placeholder="Lorem Ipsum" class="w-full bg-[#1e1e28] border border-[#2a2a38] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#8888a0] focus:border-indigo-500/60 focus:outline-none transition-colors" />
          </div>
          <div>
            <label class="block text-xs text-[#8888a0] mb-1.5" for="email">Email</label>
            <input id="email" type="email" placeholder="lorem@ipsum.dev" class="w-full bg-[#1e1e28] border border-[#2a2a38] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#8888a0] focus:border-indigo-500/60 focus:outline-none transition-colors" />
          </div>
        </div>
        <div>
          <label class="block text-xs text-[#8888a0] mb-1.5" for="subject">Subject</label>
          <input id="subject" type="text" placeholder="Project enquiry" class="w-full bg-[#1e1e28] border border-[#2a2a38] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#8888a0] focus:border-indigo-500/60 focus:outline-none transition-colors" />
        </div>
        <div>
          <label class="block text-xs text-[#8888a0] mb-1.5" for="message">Message</label>
          <textarea id="message" rows="5" placeholder="Lorem ipsum dolor sit amet..." class="w-full bg-[#1e1e28] border border-[#2a2a38] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#8888a0] focus:border-indigo-500/60 focus:outline-none transition-colors resize-none"></textarea>
        </div>
        <button type="submit" class="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 rounded-lg transition-colors">
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="border-t border-[#2a2a38] py-8">
  <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
    <div class="text-[#8888a0] text-sm">© 2026 Lorem Ipsum. All rights reserved.</div>
    <div class="flex gap-6 text-sm text-[#8888a0]">
      {#each ['Services', 'Projects', 'About', 'Contact'] as item}
        <a href="#{item.toLowerCase()}" class="hover:text-white transition-colors">{item}</a>
      {/each}
    </div>
  </div>
</footer>
