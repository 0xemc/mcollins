export interface ContactLink {
  icon: string;
  label: string;
  val: string;
  href: string;
}

export const contactLinks: ContactLink[] = [
  { icon: '✉', label: 'Lorem', val: 'lorem@ipsum.dolor',  href: 'mailto:lorem@ipsum.dolor' },
  { icon: '◈', label: 'Ipsum', val: '/in/loremipsum',     href: '#' },
  { icon: '⬡', label: 'Dolor', val: 'lorem.ipsum/dolor',  href: '#' },
];

export interface FormField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

export const formFields: FormField[] = [
  { id: 'name',    label: 'Lorem', type: 'text',  placeholder: 'Lorem ipsum' },
  { id: 'email',   label: 'Ipsum', type: 'email', placeholder: 'lorem@ipsum.dolor' },
  { id: 'subject', label: 'Dolor', type: 'text',  placeholder: 'Sit amet consectetur' },
];
