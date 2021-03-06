import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, FacebookIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "Analytics",
    href: "#",
  },
  {
    label: "Audit",
    href: "#",
  },
  {
    label: "Docs",
    href: "#",
  },
  {
    label: "Referral Program",
    href: "#",
  },
  {
    label: "Apply For Pool",
    href: "#",
  },
  {
    label: "Apply For Farm",
    href: "#",
  },
  // {
  //   label: "Help",
  //   items: [
  //     {
  //       label: "Customer",
  //       href: "Support https://docs.pancakeswap.finance/contact-us/customer-support",
  //     },
  //     {
  //       label: "Troubleshooting",
  //       href: "https://docs.pancakeswap.finance/help/troubleshooting",
  //     },
  //     {
  //       label: "Guides",
  //       href: "https://docs.pancakeswap.finance/get-started",
  //     },
  //   ],
  // },
  // {
  //   label: "Developers",
  //   items: [
  //     {
  //       label: "Github",
  //       href: "https://github.com/pancakeswap",
  //     },
  //     {
  //       label: "Documentation",
  //       href: "https://docs.pancakeswap.finance",
  //     },
  //     {
  //       label: "Bug Bounty",
  //       href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
  //     },
  //     {
  //       label: "Audits",
  //       href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
  //     },
  //     {
  //       label: "Careers",
  //       href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
  //     },
  //   ],
  // },
];

export const socials = [
  {
    label: "Facebook",
    icon: FacebookIcon,
    href: "#",
  },
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/SmexSwap",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    href: "https://t.me/smexswap",
  },
  // {
  //   label: "Telegram",
  //   icon: TelegramIcon,
  //   items: [
  //     {
  //       label: "English",
  //       href: "https://t.me/smexswap",
  //     },
  //     {
  //       label: "Bahasa Indonesia",
  //       href: "https://t.me/PancakeSwapIndonesia",
  //     },
  //     {
  //       label: "??????",
  //       href: "https://t.me/PancakeSwap_CN",
  //     },
  //     {
  //       label: "Ti???ng Vi???t",
  //       href: "https://t.me/PancakeSwapVN",
  //     },
  //     {
  //       label: "Italiano",
  //       href: "https://t.me/pancakeswap_ita",
  //     },
  //     {
  //       label: "??????????????",
  //       href: "https://t.me/pancakeswap_ru",
  //     },
  //     {
  //       label: "T??rkiye",
  //       href: "https://t.me/pancakeswapturkiye",
  //     },
  //     {
  //       label: "Portugu??s",
  //       href: "https://t.me/PancakeSwapPortuguese",
  //     },
  //     {
  //       label: "Espa??ol",
  //       href: "https://t.me/PancakeswapEs",
  //     },
  //     {
  //       label: "?????????",
  //       href: "https://t.me/pancakeswapjp",
  //     },
  //     {
  //       label: "Fran??ais",
  //       href: "https://t.me/pancakeswapfr",
  //     },
  //     {
  //       label: "Datch",
  //       href: "https://t.me/PancakeSwap_DE",
  //     },
  //     {
  //       label: "Filipino",
  //       href: "https://t.me/Pancakeswap_Ph",
  //     },
  //     {
  //       label: "????????????????????? ?????????",
  //       href: "https://t.me/PancakeSwapGeorgia",
  //     },
  //     {
  //       label: "Announcements",
  //       href: "https://t.me/PancakeSwapAnn",
  //     },
  //   ],
  // },
  // {
  //   label: "Reddit",
  //   icon: RedditIcon,
  //   href: "https://reddit.com/r/pancakeswap",
  // },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/smexswap",
  },
  // {
  //   label: "Github",
  //   icon: GithubIcon,
  //   href: "https://github.com/smexswap",
  // },
  // {
  //   label: "Discord",
  //   icon: DiscordIcon,
  //   href: "https://discord.gg/pancakeswap",
  // },
  // {
  //   label: "Medium",
  //   icon: MediumIcon,
  //   href: "https://pancakeswap.medium.com/",
  // },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
