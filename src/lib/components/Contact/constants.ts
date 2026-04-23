export interface ContactLink {
  icon: string;
  label: string;
  val: string;
  href: string;
}

export const contactLinks: ContactLink[] = [
  { icon: '✉', label: 'Email',    val: 'hello@mcoll.net',   href: 'mailto:hello@mcoll.net' },
  { icon: '◈', label: 'LinkedIn', val: '/in/mcollins92',    href: 'https://linkedin.com/in/mcollins92' },
  { icon: '⬡', label: 'GitHub',   val: '0xemc',             href: 'https://github.com/0xemc' },
];

export interface FormField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

export const formFields: FormField[] = [
  { id: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your name' },
  { id: 'email',   label: 'Email',   type: 'email', placeholder: 'hello@you.com' },
  { id: 'subject', label: 'Subject', type: 'text',  placeholder: "What are you working on?" },
];
