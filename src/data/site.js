// Everything site-wide that Gabe may want to change lives here.
// Empty strings are placeholders: fill them in and the site picks them up.

export const site = {
  name: 'Gabe Alexander',
  role: 'Filmmaker and editor',

  // TODO: replace with Gabe's real contact email.
  email: 'hello@your-email.com',

  // These two links come from Gabe's current website.
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/gabealexandermedia' },
    { label: 'Vimeo', href: 'https://vimeo.com/alexandermedia' },
  ],

  // Short silent loop behind the hero (a 10 to 20 second cut, MP4, under ~8 MB works well).
  heroLoop: {
  src: 'https://assets.mixkit.co/videos/44071/44071-720.mp4',
  poster: 'https://assets.mixkit.co/videos/44071/44071-thumb-720-0.jpg',
},

  // The full showreel. Use ONE of: a direct file (src) or an embed URL (Vimeo/YouTube player link).
  reel: { src: '', poster: '', embed: '' },

  about: {
    // Path or URL to a portrait. Leave empty to show a placeholder.
    portrait: '',
    // TODO: Gabe should rewrite this in his own words.
    intro:
      'I cut picture and mix sound for commercials, series and films. The work is above. If you like it, let’s make something.',
    line: 'Filmmaker, editor, creative collaborator.',
  },

  // Shows a small "Placeholder" tag on frames that have no real media yet.
  // Set to false once real videos and images are in.
  showPlaceholderLabels: true,
};
