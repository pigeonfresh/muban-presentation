import { MubanTransitionController, IMubanTransitionMixin } from 'muban-transition-component';
import { TimelineMax } from 'gsap';
import {{name_pc}} from './{{name_pc}}';

class {{name_pc}}TransitionController extends MubanTransitionController<{{name_pc}}> {

  protected setupTransitionInTimeline(timeline:TimelineMax, parent:{{name_pc}}, id:string): void {

  }

  protected setupTransitionOutTimeline(timeline:TimelineMax, parent:{{name_pc}}, id:string): void {

  }

  protected setupLoopingAnimationTimeline(timeline:TimelineMax, parent:{{name_pc}}, id:string): void {

  }
}

export default {{name_pc}}TransitionController;
