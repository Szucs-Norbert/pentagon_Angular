/*
*File:app.component.ts
*Author: Szűcs Norbert
*Copyright: 2022, Szűcs Norbert
*Group: Szoft II/N
*Date:2022.01.09
*Github:https://github.com/Szucs-Norbert
*Program feladata: Egy pentagon területének kiszámítása. 
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pentagon';

  base = 0;
  area = 0;

  onClickSzamit(){
    let area = (Math.pow(this.base,2)*Math.sqrt(25+10*Math.sqrt(5)))/4;
    console.log("Terület: "+area);
    this.area=Math.round(area*100)/100; 
  }
}
