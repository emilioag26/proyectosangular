import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContaainer: ViewContainerRef,
    private templateRef : TemplateRef<any>
  ) { }
    @Input('appTimes') set render(times:number){
        this.viewContaainer.clear()
        for(let i =0; i<times;i++){
          this.viewContaainer.createEmbeddedView(this.templateRef,{})
        }
    }
}
