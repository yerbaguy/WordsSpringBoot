import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Component({
  selector: 'app-pulltheword',
  templateUrl: './pulltheword.component.html',
  styleUrls: ['./pulltheword.component.css']
})
export class PullthewordComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }


  engword:string = '';
  catName:String = '';
  catn:String = '';
  subCatName:String = '';
  plword:string = '';
  pl:string = '';
  engWordNumber:number;
  e:number;
  found:boolean;
  answer:string = '';
  engwordSupport:string = '';
  engwsupport:string = '';



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
   
   
     typedEngWord() {
   
   
       //  const headers = new Headers();
       //  headers.append('Content-Type', 'application/json; charset=utf-8');
   
       console.log('posteng');
   
       this.httpClient.post('http://localhost:8080/api/posteng', JSON.stringify(this.engword), httpOptions )
           .subscribe(
             
             () => {},
             err => console.error(err)
   
           ) 
       
       
   
        console.log(this.engword);
   
       //  this.getCompareGetRandPlAndGetWordNumber();
   //    this.getWordNumber(); // here
   //    this.getRandPlWord();
   
   //    this.getRandPlWords();
   
   //    this.getIdPlWord(); // here
   
   
   //    this.getEngWordNumber(); //here to be checked
      // console.log('enggwordnumber' + this.enggWordNumber);
   
   
   //    this.gettttEngWordNumber(); //here to be checked
   //    console.log('gettttEngWordNumber' + this.gettttEngWordNumber);  // here to be checked
   


   this.getEngWordNumber();
   // console.log('enggwordnumber' + this.enggWordNumber);


    this.gettttEngWordNumber();
    console.log('gettttEngWordNumber' + this.gettttEngWordNumber);


     }




     getWord() {

      // console.log(this.name);
   
      this.httpClient.get('http://localhost:8080/api/word')
      .subscribe(
         
       (data:any[]) => {
   
        // console.log(data);
   
        if (data.length) {
   
        this.plword = data[0].plword;
   
        this.pl = this.plword;
   
        console.log(this.plword);
   
        this.found = true;
   
        }
   
       }
   
      )
   
     }



     getWordd() {

      // console.log(this.name);
   
      this.httpClient.get('http://localhost:8080/api/getinfo')
      .subscribe(
         
       (data:any[]) => {
   
        // console.log(data);
   
        if (data.length) {
   
       // this.plword = data[0].plword;
        this.catName = data[0].catName;
        this.subCatName = data[0].subCatName;

   
        this.catn = this.catName;
        this.pl = this.plword;
   
       // console.log(this.catn);
       console.log(data[0].catName)
       console.log(data[0].subCatName)
   
        this.found = true;
   
        }
   
       }
   
      )
   
     }






     getSupport() {

      // console.log(this.name);
   
      this.httpClient.get('http://localhost:8080/api/getrandengwordnumber')
      .subscribe(
         
       (data:any[]) => {
   
        // console.log(data);
   
        if (data.length) {
   
        this.engwordSupport = data[0].engwordSupport;
   
        this.engwsupport = this.engwordSupport;
   
        console.log('engwordsupport' + this.engwordSupport);
   
        this.found = true;
   
        }
   
       }
   
      )
   
     }








     getEngWordNumber() {


      let obs =  this.httpClient.get('http://localhost:8080/api/gettengwordnumber');
    
      //  // obs.subscribe(() => console.log('Got the response'));
      //  // obs.subscribe((response) => console.log(response));
    
        obs.subscribe((response) => {
    
    
          // this.getengwordnumber = response[0].getengwordnumber;
          // this.getEngwordnumber = this.getengwordnumber;
    
          this.engWordNumber = response[0].engWordNumber;
          console.log('engwordnumber' + this.engWordNumber);
       
          
         // this.engwn.engWordNumber = this.enggWordNumber;
    
    
    
        //  this.engwn.setengWordNumber = this.engWordNumber;
    
        //   this.engwnn = this.engwn.getengWordNumber;
    
    
    
    
         // console.log('engwnn' + this.engwnn);
    
    
          if (this.engWordNumber > 0) {
    
            console.log("Good");
          } else {
    
            console.log("Bad");
          }
    
      //    // this.randpl = response.randPlWord;
      //   //  this.p = this.randpl;
    
      //    // console.log('Got the response'));
      //   //  console.log(this.randpl);
    
      //      // console.log(response);
    
      //      this.response = response;
           
            //  console.log(response);
            // console.log('getengwordnumber' + this.getengwordnumber);
      //       console.log('getengwordnumber' + this.getEngwordnumber);
    
    
        }) 
    
    
    
    
    
    
    
    }



    gettttEngWordNumber() {

      this.httpClient.get('http://localhost:8080/api/gettengwordnumber')
      .subscribe(
         
       (data:any[]) => {
    
        // console.log(data);
    
        if (data.length) {
    
        this.engWordNumber = data[0].engWordNumber;
    
       // this.pl = this.plword;
        this.e = this.engWordNumber;
    
       // console.log(this.plword);
        console.log('gettttEngWordNumber' + this.e);
    
       // this.found = true;
    
        if (this.engWordNumber > 0) {
    
          this.answer = "Good";


        console.log("Good");
        } else {

          this.answer = "Bad";
    
        console.log("Bad");
        }
    
        }
    
       }
    
      )
    
    
    }






}
