import {
  Directive,
  inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { LoaderComponent } from './components/loader.component';

@Directive({
  selector: '[appLoader]',
  standalone: true,
})
export class LoaderDirective {
  private readonly templateRef = inject(TemplateRef);
  private readonly vcRef = inject(ViewContainerRef);

  @Input()
  set appLoader(loading: boolean) {
    this.vcRef.clear();

    if (loading) {
      this.vcRef.createComponent(LoaderComponent);
    } else {
      this.vcRef.createEmbeddedView(this.templateRef);
    }
  }
}
