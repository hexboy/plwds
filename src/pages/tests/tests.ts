import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tests',
  templateUrl: 'tests.html',
})
export class TestsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  testsfunction(e, id) {

    if (e.target.nodeName == "SPAN") {
      e = e.target.parentNode;
    } else {
      e = e.target;
    }

    if (id == 2) {
      //correct
      e.style.backgroundColor = "green";
    } else {
      e.style.backgroundColor = "red";
    }
    console.log('select', e);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestsPage');
  }

}
