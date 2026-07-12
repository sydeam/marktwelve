import {
  BadgeCheck,
  BarChart3,
  Camera,
  Clapperboard,
  Compass,
  FileText,
  Film,
  Gauge,
  Gem,
  Megaphone,
  MessageSquareText,
  PackageCheck,
  PenTool,
  Share2,
  Sparkles,
  Target,
  User,
  Video,
  Wand2,
  type LucideIcon,
} from 'lucide-react'

export type ServiceSlug =
  | 'Video-Mark'
  | 'Digital-Marketing'
  | 'Branding-Mark'
  | 'Photography-Mark'

export interface ServiceOffering {
  title: string
  description: string
  icon: LucideIcon
}

export interface ServiceProcessStep {
  step: string
  title: string
  desc: string
}

export interface ServiceData {
  slug: ServiceSlug
  name: string
  shortIntro: string
  heroDescription: string
  icon: LucideIcon
  offerings: ServiceOffering[]
  why: {
    heading: string
    body: string
    points: string[]
  }
  process: ServiceProcessStep[]
  cta: {
    heading: string
    body: string
  }
}

export const services: ServiceData[] = [
  {
    slug: 'Video-Mark',
    name: 'Video Mark',
    shortIntro:
      'Cinematic founder stories, commercial films, and sharp social assets built to stop the scroll.',
    heroDescription:
      'We do not just capture frames; we capture momentum. From raw founder documentaries to high definition commercial ad films, we build the visual assets and sharp social hooks that stop the scroll and turn passive viewers into brand believers.',
    icon: Film,
    offerings: [
      {
        title: 'Brand Documentaries',
        description:
          'We script, direct, and produce premium, cinematic founder stories that strip away corporate fluff to transform your raw personal journey into undeniable market trust.',
        icon: Clapperboard,
      },
      {
        title: 'Commercial Ad Films',
        description:
          'We produce high end, concept driven commercial films that capture the raw essence of your brand, engineered to turn passive scrollers into immediate paying customers.',
        icon: Video,
      },
      {
        title: 'Social Asset Engines',
        description:
          'We engineer high velocity, beautifully graded vertical videos built on sharp psychological hooks and seamless pacing to keep your brand completely omnipresent across digital feeds.',
        icon: Share2,
      },
    ],
    why: {
      heading: 'Built for brands that need attention with weight.',
      body:
        'Your visual content should not feel like another asset in a calendar. It should move the market, clarify the founder story, and give every campaign a premium visual spine.',
      points: ['Cinematic direction', 'Performance led hooks', 'Social first edits'],
    },
    process: [
      {
        step: '01',
        title: 'Narrative Lock',
        desc: 'We define the audience, message, emotional arc, and conversion goal before a frame is planned.',
      },
      {
        step: '02',
        title: 'Creative Blueprint',
        desc: 'We build scripts, shot lists, locations, visual references, and production timelines around the core outcome.',
      },
      {
        step: '03',
        title: 'Production',
        desc: 'We direct the shoot with attention to pacing, composition, brand tone, and usable campaign coverage.',
      },
      {
        step: '04',
        title: 'Post & Distribution Assets',
        desc: 'We edit, grade, package, and adapt the final film into platform ready assets built for attention.',
      },
    ],
    cta: {
      heading: 'Give your story the frame it deserves.',
      body:
        'Let us build the film assets that make your brand feel impossible to ignore.',
    },
  },
  {
    slug: 'Digital-Marketing',
    name: 'Digital Mark',
    shortIntro:
      'Data driven performance frameworks across search and social channels that move the right audience.',
    heroDescription:
      'Distribution is everything, and vanity metrics are a waste of time. We deploy smart, data driven performance marketing frameworks across search and social channels to stamp your message directly in front of the audience that moves the needle.',
    icon: Target,
    offerings: [
      {
        title: 'Performance Marketing',
        description:
          'We construct, manage, and scale highly targeted, data backed ad campaigns across Google and Meta platforms that position your brand directly in front of active buyers.',
        icon: BarChart3,
      },
      {
        title: 'Organic Growth & Content Strategy',
        description:
          'We architect systemic social media strategies and brand community frameworks that organically capture digital attention and systematically channel it into highly qualified inbound business leads.',
        icon: Megaphone,
      },
      {
        title: 'Conversion Optimization',
        description:
          'From high converting website landing pages to seamless user journeys, we analyze and optimize every digital customer touchpoint to ensure your entire marketing budget converts flawlessly.',
        icon: Gauge,
      },
    ],
    why: {
      heading: 'Focused on qualified demand, not vanity motion.',
      body:
        'We connect media buying, content strategy, landing pages, and conversion intelligence into one operating system for measurable growth.',
      points: ['Buyer led targeting', 'Clean reporting', 'Conversion first funnels'],
    },
    process: [
      {
        step: '01',
        title: 'Growth Audit',
        desc: 'We review your audience, offers, funnel, analytics, and current channel performance.',
      },
      {
        step: '02',
        title: 'Channel Strategy',
        desc: 'We define where budget, content, and testing velocity should go for the strongest commercial signal.',
      },
      {
        step: '03',
        title: 'Launch & Learn',
        desc: 'We deploy campaigns with precise tracking, creative variants, and a clear optimization rhythm.',
      },
      {
        step: '04',
        title: 'Scale What Converts',
        desc: 'We reallocate spend, refine messaging, and strengthen landing experiences around proven demand.',
      },
    ],
    cta: {
      heading: 'Turn attention into pipeline.',
      body:
        'Let us build a distribution system that puts your message in front of people ready to act.',
    },
  },
  {
    slug: 'Branding-Mark',
    name: 'Branding Mark',
    shortIntro:
      'Premium positioning, visual identity, and campaign language that make your business the obvious choice.',
    heroDescription:
      'A lasting mark is not built by chasing trends; it is built on genuine authority. We dig deep into your corporate vision to craft timeless visual identities, sleek packaging frameworks, and commanding narratives that position your business as the obvious premium choice.',
    icon: Gem,
    offerings: [
      {
        title: 'Corporate Positioning & Narrative',
        description:
          'We engineer your core communication architecture, crafting premium brand stories, pitch pillars, and strategic messaging that make your business unforgettable to investors and your target audience.',
        icon: MessageSquareText,
      },
      {
        title: 'Logo & Visual Identity Design',
        description:
          'We design sleek, minimalist logos, premium color systems, and cohesive corporate brochure layouts that ensure your brand identity feels sophisticated across both digital and print mediums.',
        icon: PenTool,
      },
      {
        title: 'Billboard Design & Copywriting',
        description:
          'We conceptualize high impact outdoor advertising campaigns, combining striking visuals with razor sharp, commanding copy for nationwide billboards and large scale placements designed to capture immediate attention.',
        icon: FileText,
      },
    ],
    why: {
      heading: 'Authority first, aesthetics in service of strategy.',
      body:
        'We build brand systems that are clear enough for investors, compelling enough for customers, and disciplined enough to scale across every touchpoint.',
      points: ['Strategic positioning', 'Minimal visual systems', 'Premium verbal identity'],
    },
    process: [
      {
        step: '01',
        title: 'Discovery',
        desc: 'We understand the business model, market position, customer psychology, and founder vision.',
      },
      {
        step: '02',
        title: 'Brand Architecture',
        desc: 'We define the positioning, message hierarchy, proof points, and core narrative system.',
      },
      {
        step: '03',
        title: 'Identity Design',
        desc: 'We craft the logo, typography, colors, layouts, and visual rules that give the brand discipline.',
      },
      {
        step: '04',
        title: 'Rollout System',
        desc: 'We package the identity into practical digital, print, pitch, and campaign ready assets.',
      },
    ],
    cta: {
      heading: 'Make the market remember you.',
      body:
        'Let us turn your business vision into a brand system with presence, clarity, and command.',
    },
  },
  {
    slug: 'Photography-Mark',
    name: 'Photography Mark',
    shortIntro:
      'Premium portraits, product frames, and campaign imagery that sharpen every brand touchpoint.',
    heroDescription:
      'We do not just take pictures, we capture your brand premium identity. From high end corporate portraits to cinematic product frames, we deliver sharp, pristine visual assets that elevate your marketing material and command instant consumer respect across all mediums.',
    icon: Camera,
    offerings: [
      {
        title: 'Corporate & Executive Portraits',
        description:
          'We style, direct, and shoot premium, high contrast portraits of founders and leadership teams, engineered to instantly project authority, trust, and boardroom ready professionalism.',
        icon: User,
      },
      {
        title: 'Commercial Product Photography',
        description:
          'We capture the high definition textures, raw ingredients, and sleek packaging details of your products, creating pristine, magazine quality assets optimized for ecommerce, brochures, and digital storefronts.',
        icon: PackageCheck,
      },
      {
        title: 'Campaign & Editorial Shoots',
        description:
          'We conceptualize and execute high concept visual lookbooks and creative lifestyle imagery, providing your brand with the raw aesthetic firepower needed for billboards, lookbooks, and print advertisements.',
        icon: Sparkles,
      },
    ],
    why: {
      heading: 'Images that make the brand feel expensive before a word is read.',
      body:
        'Every frame is planned around perception: authority for leaders, desirability for products, and cohesion for campaigns.',
      points: ['Directed shoot environments', 'Premium lighting language', 'Commercial usage focus'],
    },
    process: [
      {
        step: '01',
        title: 'Visual Direction',
        desc: 'We define the mood, formats, locations, styling, and usage needs for the complete shoot.',
      },
      {
        step: '02',
        title: 'Production Planning',
        desc: 'We prepare shot lists, props, lighting references, and timelines so the shoot stays intentional.',
      },
      {
        step: '03',
        title: 'Shoot Day',
        desc: 'We direct subjects, products, and scenes with the detail needed for polished commercial output.',
      },
      {
        step: '04',
        title: 'Retouch & Delivery',
        desc: 'We edit, retouch, and package final assets for web, social, print, and campaign use.',
      },
    ],
    cta: {
      heading: 'Upgrade the way your brand is seen.',
      body:
        'Let us create the still assets that make every campaign, page, and profile feel sharper.',
    },
  },
]

export const serviceMap = new Map(services.map((service) => [service.slug, service]))

export const closingSections = [
  {
    eyebrow: 'Our Story',
    title: 'A sharper way to build market trust.',
    body:
      'Mark Twelve exists for brands that want presence without noise. We combine strategic restraint, visual taste, and commercial discipline to help ambitious teams leave a lasting mark.',
    href: '/about',
    cta: 'Know Our Story',
    icon: Compass,
  },
  {
    eyebrow: 'Our Work',
    title: 'See the marks already made.',
    body:
      'Explore campaigns, visual systems, and growth work shaped for brands that needed more than surface level marketing.',
    href: '/portfolio',
    cta: 'View Our Work',
    icon: BadgeCheck,
  },
  {
    eyebrow: 'Say Hello',
    title: 'Ready when the vision is real.',
    body:
      'Tell us where your brand is headed. We will help define the sharpest route from attention to authority.',
    href: '/contact',
    cta: 'Start a Conversation',
    icon: Wand2,
  },
]

