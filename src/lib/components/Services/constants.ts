export interface Service {
  num: string;
  title: string;
  desc: string;
}

export const services: Service[] = [
  { num: '01', title: 'Full-Stack Development',   desc: 'End-to-end web applications built with modern frameworks — from database to UI, shipped with quality and care.' },
  { num: '02', title: 'Technical Leadership',     desc: 'Leading engineering teams, managing delivery timelines and driving architecture decisions for complex projects.' },
  { num: '03', title: 'Web3 & Blockchain',        desc: 'Tokenization, on-chain marketplace development and decentralised application design on EVM-compatible networks.' },
  { num: '04', title: 'Backend Engineering',      desc: 'Scalable REST and GraphQL APIs, microservices, and database design using Node.js, Express and Python.' },
  { num: '05', title: 'Enterprise Consulting',    desc: 'Cross-industry software delivery for banks, government, defence and insurance — from scoping to production.' },
  { num: '06', title: 'Climate & Impact Tech',    desc: 'Carbon market platforms, environmental data tooling and sustainability software with real-world measurable impact.' },
];
