import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[CardChange]',
  standalone: true
})
export class CardChangeDirective {
  @Input() bgColor:string = "white";
  constructor(public cardRefe:ElementRef) {}
  @HostListener("mouseover") changeCardShadow(){
    this.cardRefe.nativeElement.style = "box-shadow: 5px 5px;";
  }
  @HostListener("mouseout") orginalCardShadow(){
    this.cardRefe.nativeElement.style = "box-shadow: 3px 3px;";
  }
  ngAfterViewChecked()
  {
    this.cardRefe.nativeElement.style.backgroundColor = this.bgColor;
  }
}
