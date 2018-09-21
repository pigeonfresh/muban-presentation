import { MubanTransitionController, IMubanTransitionMixin } from 'muban-transition-component';
import { TimelineMax, Expo } from 'gsap';
import CopyBlock from './CopyBlock';

class CopyBlockTransitionController extends MubanTransitionController<CopyBlock> {
  protected setupTransitionInTimeline(timeline: TimelineMax, parent: CopyBlock, id: string): void {
    const title = parent.getElement('[data-title]');
    const copy = parent.getElement('[data-copy]');

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

  protected setupTransitionOutTimeline(
    timeline: TimelineMax,
    parent: CopyBlock,
    id: string,
  ): void {}

  protected setupLoopingAnimationTimeline(
    timeline: TimelineMax,
    parent: CopyBlock,
    id: string,
  ): void {}
}

export default CopyBlockTransitionController;
