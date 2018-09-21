import AbstractTransitionBlock from 'app/component/block/AbstractTransitionBlock';
import CopyBlockTransitionController from './CopyBlockTransitionController';

export default class CopyBlock extends AbstractTransitionBlock {
  public static displayName: string = 'copy-block';
  public transitionController: CopyBlockTransitionController;

  constructor(el: HTMLElement) {
    super(el);
    this.transitionController = new CopyBlockTransitionController(this);
  }
}
