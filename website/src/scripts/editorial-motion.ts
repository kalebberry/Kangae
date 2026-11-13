import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Progressive enhancement: content remains visible without JavaScript. */
export function initEditorialMotion(): void {
  if (typeof window === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();
  media.add('(prefers-reduced-motion: no-preference) and (min-width: 1px)', () => {
    const groups: Array<{ selector: string; rise: number; stagger: number }> = [
  {
    "selector": ".hero .eyebrow, .hero .japanese, .hero h1, .hero-aside",
    "rise": 14,
    "stagger": 0.13
  },
  {
    "selector": ".principles article",
    "rise": 18,
    "stagger": 0.12
  },
  {
    "selector": ".steps article",
    "rise": 14,
    "stagger": 0.1
  },
  {
    "selector": ".compare-intro > *, .compare-tool",
    "rise": 14,
    "stagger": 0.12
  },
  {
    "selector": ".docs-hero > *, .docs-cards > a",
    "rise": 12,
    "stagger": 0.09
  }
];
    const context = gsap.context(() => {
    for (const { selector, rise, stagger } of groups) {
      const elements = gsap.utils.toArray<HTMLElement>(selector);
      if (!elements.length) continue;
      // Animate individually as elements enter the viewport; never conceal
      // content until its own animation begins.
      for (const element of elements) {
        ScrollTrigger.create({
          trigger: element,
          start: 'top 92%',
          once: true,
          onEnter: () => {
            gsap.fromTo(element, { autoAlpha: 0, y: rise }, {
              autoAlpha: 1, y: 0, duration: 0.72, ease: 'power2.out',
              delay: Math.min(elements.indexOf(element) * stagger, 0.36),
              overwrite: 'auto',
            });
          },
        });
      }
    }
    });
    return () => context.revert();
  });
  window.addEventListener('pagehide', () => media.revert(), { once: true });
}

initEditorialMotion();
