// Design tokens — single source of truth for the brutalist palette + shared class strings

export const colors = {
  ink:    '#0A0A0A',
  paper:  '#F2F0E8',
  acid:   '#CAFF00',
  hot:    '#FF3B00',
  muted:  '#6B6B6B',
};

export const shared = {
  // Section-level header bar (§ label + big title)
  sectionBar:   'border-b-2 border-[#0A0A0A] px-6 lg:px-16 py-6 flex items-baseline justify-between max-w-7xl mx-auto w-full',
  sectionLabel: 'text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B]',
  sectionTitle: 'text-4xl font-bold uppercase tracking-tighter text-[#0A0A0A]',
  sectionWrap:  'border-b-2 border-[#0A0A0A]',
  inner:        'max-w-7xl mx-auto w-full',

  // Buttons
  btnPrimary:   'bg-[#0A0A0A] text-[#CAFF00] font-bold uppercase text-xs tracking-widest px-6 py-3.5 border-2 border-[#0A0A0A] hover:bg-[#CAFF00] hover:text-[#0A0A0A] transition-colors',
  btnOutline:   'bg-transparent text-[#0A0A0A] font-bold uppercase text-xs tracking-widest px-6 py-3.5 border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-[#F2F0E8] transition-colors',
  btnHot:       'bg-[#FF3B00] text-[#F2F0E8] font-bold uppercase text-xs tracking-widest px-6 py-3.5 border-2 border-[#FF3B00] hover:bg-[#0A0A0A] hover:border-[#0A0A0A] transition-colors',

  divideX:      'divide-x-2 divide-[#0A0A0A]',
  divideY:      'divide-y-2 divide-[#0A0A0A]',
};
