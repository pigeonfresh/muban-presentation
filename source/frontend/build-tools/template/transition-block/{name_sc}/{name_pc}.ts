import AbstractTransitionBlock from 'app/component/block/AbstractTransitionBlock';
import {{name_pc}}TransitionController from './{{name_pc}}TransitionController';

export default class {{name_pc}} extends AbstractTransitionBlock {
  public static displayName:string = '{{name_sc}}';
  public transitionController:{{name_pc}}TransitionController;

  constructor(el:HTMLElement) {
    super(el);
    this.transitionController = new {{name_pc}}TransitionController(this);
  }
}
