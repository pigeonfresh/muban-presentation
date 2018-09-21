import { MubanTransitionController, IMubanTransitionMixin } from 'muban-transition-component';
import { TimelineMax, Expo } from 'gsap';
import Hero from './Hero';

class HeroTransitionController extends MubanTransitionController<Hero> {
  protected setupTransitionInTimeline(timeline: TimelineMax, parent: Hero, id: string): void {
    const visual = parent.getElement('[data-visual]');
    const title = parent.getElement('[data-title]');
    const copy = parent.getElement('[data-copy]');

    timeline.fromTo(
      visual,
      2,
      {
        autoAlpha: 0,
        scale: 1.3,
      },
      {
        autoAlpha: 1,
        scale: 1,
        ease: Expo.easeOut,
        delay: 1,
        onStart: () => (parent.element.style.visibility = 'visible'),
      },
    );

    timeline.fromTo(
      title,
      2,
      {
        y: 20,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        ease: Expo.easeOut,
      },
      '-=1.5',
    );

    timeline.fromTo(
      copy,
      1,
      {
        y: 20,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        ease: Expo.easeOut,
      },
      '-=1.5',
    );
  }

  protected setupTransitionOutTimeline(timeline: TimelineMax, parent: Hero, id: string): void {}

  protected setupLoopingAnimationTimeline(timeline: TimelineMax, parent: Hero, id: string): void {}
}

export default HeroTransitionController;
