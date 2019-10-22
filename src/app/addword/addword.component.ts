import { Component, OnInit } from '@angular/core';

import { Word } from '../Word';
import { WordService } from '../word.service';

@Component({
  selector: 'app-addword',
  // template: `
  //   <p>
  //     addword works!
  //   </p>
  // `,

 // templateUrl: './app.component.html',
  templateUrl: './addword.component.html',
 // styleUrls: ['./app.component.css']
  styleUrls: ['./addword.component.css']

 // styles: []
})
export class AddwordComponent implements OnInit {

  //words: Word[];

  public words: Word[] = [];


  constructor(private wordService: WordService) { }

  ngOnInit() {
  }



engword:string = '';
plword:string = '';


  onTypedEngWordKeyUp(event:any) {
    // onTypedEngWordKeyUp(engword) { 
   
       
   
       //console.log(event.target.value);
   
       this.engword = event.target.value;
   
     // this.engword = event.value;
   
      // this.engword = engword.value;
   
       console.log(this.engword);
   
      // this.found = false;
   
     // this.engword = '';
   
     }



     add(engword:string, plword:string):void {

      this.wordService.addWord({engword, plword} as Word)
      .subscribe(word => {

        this.words.push(word);
      });

     }




     onTypedPlWordKeyUp(event:any) {
      // onTypedEngWordKeyUp(engword) { 
     
         
     
         //console.log(event.target.value);
     
         this.plword = event.target.value;
     
       // this.engword = event.value;
     
        // this.engword = engword.value;
     
         console.log(this.plword);
     
        // this.found = false;
     
       // this.engword = '';
     
       }



       typedPlWord() {



        
       }
}
