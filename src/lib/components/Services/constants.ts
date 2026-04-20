export interface Service {
  num: string;
  title: string;
  desc: string;
}

export const services: Service[] = [
  { num: '01', title: 'Lorem Ipsum Dolor',     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { num: '02', title: 'Consectetur Adipiscing',desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { num: '03', title: 'Sed Do Eiusmod',        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  { num: '04', title: 'Tempor Incididunt',      desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { num: '05', title: 'Labore Et Dolore',       desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.' },
  { num: '06', title: 'Magna Aliqua Enim',      desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.' },
];
