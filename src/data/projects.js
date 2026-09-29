// One entry per project. To add a project, copy an object and change it.
// To remove one, delete it. Order here is the order on the site.
//
//   title / subtitle : shown as the big title and the small line under the card
//   roles            : 'picture' (editing) and/or 'sound' (sound mixing)
//   description      : one or two short lines (TODO: Gabe to rewrite in his own words)
//   media.src        : short looping preview, MP4 (plays on hover / when in view)
//   media.poster     : still image shown before the video loads
//   embed            : full film, e.g. 'https://player.vimeo.com/video/123456789'
//   film             : full film as a direct file, used when there is no embed
//   stills           : optional extra images [{ src, alt, ratio }]
//   credits          : optional [{ role: 'Director', name: '…' }], shown only when present
//   result           : optional { value: '…', label: '…' }, only add real, confirmed numbers

export const ROLE_NAMES = { picture: 'Editor', sound: 'Sound mixer' };

export const roleLabel = (roles) => roles.map((r) => ROLE_NAMES[r]).join(' and ');

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const raw = [
  { title: 'Motion Graphics', subtitle: 'Miracle Brand', roles: ['picture'], description: 'Motion graphics for Miracle Brand.' },
  { title: 'AI-Powered Video', subtitle: '', roles: ['picture'], description: 'An edit built around AI-powered video.' },
  { title: 'Joe Rogan', subtitle: 'Alpha Brain', roles: ['picture'], description: 'An edit for Alpha Brain, with Joe Rogan.' },
  { title: 'Mike Tyson', subtitle: 'Iron Remedy', roles: ['picture'], description: 'An edit for Iron Remedy, with Mike Tyson.' },
  { title: 'UGC', subtitle: 'Fabletics', roles: ['picture'], description: 'User-generated content edit for Fabletics.' },
  { title: 'UGC', subtitle: 'inDrive', roles: ['picture'], description: 'User-generated content edit for inDrive.' },
  { title: 'The Righteous Gemstones', subtitle: 'HBO Series', roles: ['sound'], description: 'Sound mix for the HBO series.' },
  { title: 'El Camino Christmas', subtitle: 'Film', roles: ['sound'], description: 'Sound mix for the film.' },
  { title: 'Ron Sayer', subtitle: 'Today Was Made For Adventure', roles: ['picture', 'sound'], description: 'Edit and sound mix for Ron Sayer.' },
  { title: 'Idahoan', subtitle: 'Prep Series', roles: ['picture', 'sound'], description: 'Edit and sound mix for the Idahoan prep series.' },
  { title: 'iwi', subtitle: 'Product Feature', roles: ['picture'], description: 'A product feature edit for iwi.' },
  { title: 'Enchanted Christmas', subtitle: 'Film', roles: ['sound'], description: 'Sound mix for the film.' },
  { title: 'Bison Boys', subtitle: 'TV Series', roles: ['sound'], description: 'Sound mix for the TV series.' },
  { title: 'Doggface', subtitle: 'KJ’s Super Stores Ad', roles: ['picture'], description: 'An ad edit for KJ’s Super Stores.' },
  { title: 'UGC', subtitle: 'User-Generated Content', roles: ['picture'], description: 'Edits for user-generated content.' },
  { title: 'Family First Medical Center', subtitle: 'Goodbye Tissues?!', roles: ['picture', 'sound'], description: 'Edit and sound mix for Family First Medical Center.' },
  { title: 'Surprise Me!', subtitle: 'Film', roles: ['sound'], description: 'Sound mix for the film.' },
  { title: 'BMW of Idaho Falls', subtitle: 'Adventure Is Calling', roles: ['sound'], description: 'Sound mix for BMW of Idaho Falls.' },
  { title: 'Sound Design Portfolio', subtitle: '', roles: ['sound'], description: 'A collection of sound design work.' },
  { title: 'Hillam Orthodontics', subtitle: 'A Typical Teenager', roles: ['picture', 'sound'], description: 'Edit and sound mix for Hillam Orthodontics.' },
];

export const projects = raw.map((p) => ({
  slug: slugify(`${p.title} ${p.subtitle}`),
  media: { src: '', poster: '' },
  embed: '',
  film: '',
  ...p,
}));

export const isSoundOnly = (p) => p.roles.length === 1 && p.roles[0] === 'sound';
