import AbstractTransitionBlock from 'app/component/block/AbstractTransitionBlock';
import HeroTransitionController from './HeroTransitionController';

export default class Hero extends AbstractTransitionBlock {
  public static displayName: string = 'hero';
  public transitionController: HeroTransitionController;

  constructor(el: HTMLElement) {
    super(el);
    this.transitionController = new HeroTransitionController(this);
  }
}
