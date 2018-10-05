import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';

@Component({
    selector: "page-add",
    templateUrl: "add.component.html"
})
export class AddPage{
    todos: string[]=[];
    todo:string;
    constructor(public viewCtrl: ViewController){}

    dismiss(){
        this.viewCtrl.dismiss();
    }
    add(){
        this.todos.push(this.todo);
        this.todo="";
    }

}