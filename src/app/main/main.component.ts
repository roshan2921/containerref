import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
// import { ComponentFactoryResolver } from '@angular/core';
// import { placeHolderDirective } from '../shared/placeholder.directive';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {


  selectedData = [{ id: 1}, { id: 2}, { id: 3}, { id: 4}, { id: 5}, { id: 6 }];
  @ViewChild('vc', {read: ViewContainerRef}) vc!: ViewContainerRef;

  // @ViewChild(placeHolderDirective) alertHost!:placeHolderDirective

  constructor(private viewcontainerRef:ViewContainerRef) { }

  ngOnInit(): void {
    // setTimeout(()=>{
    //   this.generateComponent();
    // })   
  }

  generateComponent(){

    const vcontref=this.vc.createComponent(ToastComponent);
    vcontref.instance.message="HII This is meeeee";



    // const viewContainerRef=this.alertHost.viewContainerRef;
    // viewContainerRef.clear();
    // const componentRef=viewContainerRef.createComponent<any>(ToastComponent);
    // console.log('Generated');
    // componentRef.instance.message="Hello Roshan how are you"
  }


  // hit(){
  //   this.mainService.showError("Hello")
  // }

 

  // public showToaster(){
  //   // const toaster=new ToastComponent();
  //   const componentFactory=this.componentFactoryResolver.resolveComponentFactory(ToastComponent)
  //   this.alertHost.viewContainerRef.clear();
  //   const componentRef=this.alertHost.viewContainerRef.createComponent(componentFactory);
  //   componentRef.instance.message="Hello"
  // }

}
