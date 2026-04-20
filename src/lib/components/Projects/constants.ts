export interface Project {
  num: string;
  title: string;
  tags: string[];
  desc: string;
  year: string;
}

export const projects: Project[] = [
  {
    num: '001', year: '2025',
    title: 'Lorem Ipsum Dolor Platform',
    tags: ['Amet', 'Consectetur', 'Adipiscing'],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    num: '002', year: '2024',
    title: 'Sed Do Eiusmod Suite',
    tags: ['Tempor', 'Incididunt', 'Labore'],
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    num: '003', year: '2024',
    title: 'Magna Aliqua App',
    tags: ['Dolore', 'Enim', 'Minim'],
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];
