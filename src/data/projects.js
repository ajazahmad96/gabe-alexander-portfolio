// One entry per project. To add a project, copy an object and change it.
// To remove one, delete it. Order here is the order on the site.
//
//   title / subtitle : shown as the big title and the small line under the card
//   roles            : 'picture' (editing) and/or 'sound' (sound mixing)
//   description      : one or two short lines (TODO: Gabe to rewrite in his own words)
//   media.src        : short looping preview, MP4 (plays on hover / when in view)
//   media.poster     : still image shown before the video loads
//   clips            : 2-3 extra video clips shown on the project page, below the player
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

// ---------------------------------------------------------------------------
// DEMO FOOTAGE — placeholder only, swap out once Gabe approves a direction.
//
// These are free stock clips from mixkit.co, individually checked to carry
// the "Mixkit Stock Video Free License" (free for commercial use, no
// attribution required: https://mixkit.co/license/#videoFree) — NOT their
// "Restricted" license, which many Mixkit clips carry and only allows
// personal use. Real brand-specific footage for these ads/films isn't
// publicly downloadable, so these three stand in as generic "process" shots
// (editing, office, walking/outdoor) across every picture project below,
// purely so nothing on the site is a blank box. Replace per project once
// Gabe sends his own approved clips or says what he'd like used instead.
const DEMO = {
  editing: {
    src: 'https://assets.mixkit.co/videos/44071/44071-720.mp4',
    poster: 'https://assets.mixkit.co/videos/44071/44071-thumb-720-0.jpg',
  },
  office: {
    src: 'https://assets.mixkit.co/videos/914/914-360.mp4',
    poster: 'https://assets.mixkit.co/videos/914/914-thumb-360-0.jpg',
  },
  outdoor: {
    src: 'https://assets.mixkit.co/videos/86/86-360.mp4',
    poster: 'https://assets.mixkit.co/videos/86/86-thumb-360-4.jpg',
  },
};

const POOL = [DEMO.editing, DEMO.office, DEMO.outdoor];

// Returns [primary, ...the other two pool clips] so a project's extra clips
// don't just repeat its own card preview, with the order varied per project
// (via `offset`) so repetition across projects doesn't look identical.
const extrasFor = (primary, offset) => {
  const rest = POOL.filter((c) => c !== primary);
  const rotated = [...rest.slice(offset % rest.length), ...rest.slice(0, offset % rest.length)];
  return [primary, ...rotated];
};

const raw = [
  { title: 'Motion Graphics', subtitle: 'Miracle Brand', roles: ['picture'], description: 'Motion graphics for Miracle Brand.', media: DEMO.editing, clips: extrasFor(DEMO.editing, 0) },
  { title: 'AI-Powered Video', subtitle: '', roles: ['picture'], description: 'An edit built around AI-powered video.', media: DEMO.editing, clips: extrasFor(DEMO.editing, 1) },
  { title: 'Joe Rogan', subtitle: 'Alpha Brain', roles: ['picture'], description: 'An edit for Alpha Brain, with Joe Rogan.', media: DEMO.office, clips: extrasFor(DEMO.office, 0) },
  { title: 'Mike Tyson', subtitle: 'Iron Remedy', roles: ['picture'], description: 'An edit for Iron Remedy, with Mike Tyson.', media: DEMO.office, clips: extrasFor(DEMO.office, 1) },
  { title: 'UGC', subtitle: 'Fabletics', roles: ['picture'], description: 'User-generated content edit for Fabletics.', media: DEMO.outdoor, clips: extrasFor(DEMO.outdoor, 0) },
  { title: 'UGC', subtitle: 'inDrive', roles: ['picture'], description: 'User-generated content edit for inDrive.', media: DEMO.office, clips: extrasFor(DEMO.office, 2) },
  { title: 'The Righteous Gemstones', subtitle: 'HBO Series', roles: ['sound'], description: 'Sound mix for the HBO series.' },
  { title: 'El Camino Christmas', subtitle: 'Film', roles: ['sound'], description: 'Sound mix for the film.' },
  { title: 'Ron Sayer', subtitle: 'Today Was Made For Adventure', roles: ['picture', 'sound'], description: 'Edit and sound mix for Ron Sayer.', media: DEMO.outdoor, clips: extrasFor(DEMO.outdoor, 1) },
  { title: 'Idahoan', subtitle: 'Prep Series', roles: ['picture', 'sound'], description: 'Edit and sound mix for the Idahoan prep series.', media: DEMO.outdoor, clips: extrasFor(DEMO.outdoor, 2) },
  { title: 'iwi', subtitle: 'Product Feature', roles: ['picture'], description: 'A product feature edit for iwi.', media: DEMO.editing, clips: extrasFor(DEMO.editing, 2) },
  { title: 'Enchanted Christmas', subtitle: 'Film', roles: ['sound'], description: 'Sound mix for the film.' },
  { title: 'Bison Boys', subtitle: 'TV Series', roles: ['sound'], description: 'Sound mix for the TV series.' },
  { title: 'Doggface', subtitle: 'KJ’s Super Stores Ad', roles: ['picture'], description: 'An ad edit for KJ’s Super Stores.', media: DEMO.office, clips: extrasFor(DEMO.office, 0) },
  { title: 'UGC', subtitle: 'User-Generated Content', roles: ['picture'], description: 'Edits for user-generated content.', media: DEMO.outdoor, clips: extrasFor(DEMO.outdoor, 0) },
  { title: 'Family First Medical Center', subtitle: 'Goodbye Tissues?!', roles: ['picture', 'sound'], description: 'Edit and sound mix for Family First Medical Center.', media: DEMO.office, clips: extrasFor(DEMO.office, 1) },
  { title: 'Surprise Me!', subtitle: 'Film', roles: ['sound'], description: 'Sound mix for the film.' },
  { title: 'BMW of Idaho Falls', subtitle: 'Adventure Is Calling', roles: ['sound'], description: 'Sound mix for BMW of Idaho Falls.' },
  { title: 'Sound Design Portfolio', subtitle: '', roles: ['sound'], description: 'A collection of sound design work.' },
  { title: 'Hillam Orthodontics', subtitle: 'A Typical Teenager', roles: ['picture', 'sound'], description: 'Edit and sound mix for Hillam Orthodontics.', media: DEMO.editing, clips: extrasFor(DEMO.editing, 1) },
];

export const projects = raw.map((p) => ({
  slug: slugify(`${p.title} ${p.subtitle}`),
  media: { src: '', poster: '' },
  clips: [],
  embed: '',
  film: '',
  ...p,
}));

export const isSoundOnly = (p) => p.roles.length === 1 && p.roles[0] === 'sound';
