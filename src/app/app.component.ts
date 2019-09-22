import { Component, OnInit } from '@angular/core';
import { spParser } from './sp_parser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sentenceParser';

  ngOnInit(){
    let parse = new spParser();
    parse.setBuffer("we are the know.");
    
    let word = parse.readTillWhitespace();

    return word;
  }
}
