import { Component} from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  todos: string[]=[];
  todo: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController){}

  add(){
    this.todos.push(this.todo);
    this.todo="";
  }
  delete(item){
    let alert = this.alertCtrl.create({
      title: "Warning",
      message: "Permanent will be deleted",
      buttons: [
        {
          text: "OK",
          handler: () => {
            console.log('Item Deleted');
          }
        },
      ]
    });
    var index = this.todos.indexOf(item, 0);
    if(index > -1){
      this.todos.splice(index, 1);
    }
    alert.present()
  }
}
