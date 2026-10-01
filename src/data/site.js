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
  // DEMO ONLY: this is a free stock clip ("Boy editing a video on a computer" from
  // mixkit.co, Mixkit Free License — free for commercial use, no attribution required)
  // just so the hero isn't empty while showing this to Gabe. Swap it for his real
  // reel footage before this goes anywhere public. License: https://mixkit.co/license/#videoFree
  heroLoop: {
    src: 'https://assets.mixkit.co/videos/44071/44071-720.mp4',
    poster: 'https://assets.mixkit.co/videos/44071/44071-thumb-720-0.jpg',
  },

  // The full showreel. Use ONE of: a direct file (src) or an embed URL (Vimeo/YouTube player link).
  // DEMO ONLY: same free Mixkit clip as the hero, just so "Play reel" has something
  // to play. Replace with Gabe's actual reel (or a Vimeo/YouTube embed link) later.
  reel: {
    src: 'https://assets.mixkit.co/videos/44071/44071-720.mp4',
    poster: 'https://assets.mixkit.co/videos/44071/44071-thumb-720-0.jpg',
    embed: '',
  },

  about: {
    // Path or URL to a portrait. Left empty on purpose — no stand-in photo of
    // Gabe himself exists to place here, and using a random stock face would
    // be misleading rather than just an empty placeholder. Add his real portrait here.
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
