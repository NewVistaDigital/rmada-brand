import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rocky Mountain ADA Center Brand Guidelines",
  description: "Brand guidelines, documentation, and downloads for the RMADA center.",
  assetsDir: 'static',
  ignoreDeadLinks: true,
  lastUpdated: true,
  srcDir: './src',
  outDir: './docs',
  srcExclude: ['**/README.md', '**/TODO.md'],
  head: [
    [
      'link',
      { href: 'href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap', rel: 'stylesheet' }
    ]
  ],
  themeConfig: {
    logo: {
      light: '/logo.png',
      dark: '/logo-dark.png',
      alt: 'Rocky Mountain ADA Center Brand Guidelines',
    },
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/introduction.md' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is this site for?', link: '/introduction' }
        ]
      },
      {
        text: 'Brand',
        items: [
          { text: 'Logos', link: '/brand/logos' },
          // { text: 'Logo Variations', link: '/brand/logo-variations' },
          { text: 'Colors', link: '/brand/colors' },
          { text: 'Extended Color Palette', link: '/brand/extended-palette' },
          { text: 'Typography', link: '/brand/typography' },
          { text: 'Shortlinks (rmad.ac)', link: '/brand/branded-shortlinks' },
          { text: 'Email Signatures', link: '/brand/email-signatures' },
        ]
      },
      {
        text: 'Downloads',
        link: '/downloads',
        collapsed: true,
        items: [
          {
            text: 'Logo Files', link: '/downloads/logo-files'
          },
          {
            text: 'Print Files', link: '/downloads/print-files'
          },
          {
            text: 'Digital Media', link: '/downloads/digital-files'
          }
        ]
      },
      {
        text: 'Voice and Tone',
        link: '/voice-and-tone',
        collapsed: true,
        items: [
          { text: 'tl;dr', link: '/voice-and-tone/tldr' },
          { text: 'Writing Goals', link: '/voice-and-tone/writing-goals' },
          { text: 'Writing About People', link: '/voice-and-tone/writing-about-people' },
          { text: 'Grammer & Mechanics', link: '/voice-and-tone/grammar-and-mechanics' },
          { text: 'Writing Online', link: '/voice-and-tone/writing-online' },
          { text: 'Writing Email Newsletters', link: '/voice-and-tone/writing-email-newsletters' },
          { text: 'Writing for Social Media', link: '/voice-and-tone/writing-for-social-media' },
          { text: 'Writing for Accessibility', link: '/voice-and-tone/writing-for-accessibility' },
          { text: 'Creating Structured Content', link: '/voice-and-tone/creating-structured-content' },
          { text: 'Copyright & Trademarks', link: '/voice-and-tone/copyright-and-trademarks' },
          { text: 'Further Reading', link: '/voice-and-tone/further-reading' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jessemutz/rmada-brand' },
      { icon: 'instagram', link: 'https://instagram.com/newvistadigital' }
    ]
  }
})
