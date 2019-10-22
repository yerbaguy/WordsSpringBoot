import { Component, OnInit } from '@angular/core';

import { Categories } from '../Categories';
import { Word } from '../Word';
import { WordService } from '../word.service';
import { Logs } from 'selenium-webdriver';
import { Observable } from 'rxjs';
import { ValueTransformer } from '@angular/compiler/src/util';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  public words: Word[] = [];
  public categ: Categories[] = [];
 // public categoriess : Categories[];

   public categoriess
  categoriesName:String = "";
   public catName:String = "";

  constructor(private wordService: WordService, private httpClient: HttpClient) { 


    // this.wordService.getCategory().subscribe(


    //   (data : any[]) => {

    //     this.categoriesName = data[0].categoriesName;

    //     console.log("categoriesName" + this.categoriesName);
    // })

   // this.getCatName();

  
  }

   engw:String = "";
   plw:String = "";
   
   
  ngOnInit() {


  //  this.wordService.getCategory()
  //  .subscribe( 
     

  //       data => {
        
  //       this.categoriess = data;

    
  //        this.categoriesName = data[0].categoriesName
         
  //        this.catName = this.categoriess[2].catName

  //        this.getCatName(this.catName)

         
  //           console.log(this.categoriess);
  //           console.log("catName" + this.catName);

  //       }    
     
  //    )

     
  }



  getEngWord() {

    this.engw = "lksjd";
  }

  getPlWord() {

    this.plw = "lkjsdf"


  }

 // getCatName() : any {
   getCatName(catName:String) {



    this.wordService.getCategory()
    .subscribe( 
      
     //  data => {
        
     //   this.categoriess[0] = data[0];
     //  // this.categoriesName = data[0].categoriesName;
         
     //  this.categoriesName = this.categoriess[0].categoriesName;
 
     //  // console.log(this.categoriess[0]);
     //   console.log(this.categoriesName);
 
         data => {
         
         this.categoriess = data;
 
      //    resultArray => this.categoriess = resultArray
     //}        
     
          this.categoriesName = data[0].categoriesName
          
          this.catName = this.categoriess[2].catName
 
         // this.getCatName(this.catName)
 
    // console.log(data);
 
      //   categoriess => this.categoriesName = categoriess;
          
             console.log(this.categoriess);
             console.log("catName" + this.catName);
 
         }    
      
      ) 

    






      // this.categoriesName = "lkjasdf";
   // this.categoriesName = this.wordService.getCategory;


     console.log("getCatName" + this.catName);

      // this.wordService.getCategory().subscribe(


      //  // (data : any[]) => {

      //     value => {

      //     this.categoriesName = value[0].categoriesName;

      //     console.log("getCatName" + this.categoriesName);
      //     this.catName = this.categoriesName;

      //     this.getCattName(this.catName)

      //    // this.getCattName(this.categoriesName)
      //     console.log("getCatNameeee" + this.categoriesName);
      //   }
         
        
      // )



      // this.wordService.getCategory()
      // .subscribe(
        
      //   data => this.categoriess = data 
           
      //   //   categoriess => this.categoriesName = categoriess;
            
        
      //   )

      //   console.log("categories" + this.categoriess);
        
            



      // this.httpClient.get('http://localhost:8080/api/findbyid')
      // .subscribe(
         
      //  (data:any[]) => {
   
      //   // console.log(data);
   
      //  // if (data.length) {
   
      //   this.categoriesName = data[0].categoriesName;
   
      //  // this.engwsupport = this.engwordSupport;
   
      //   console.log('engwordsupport' + this.categoriesName);
   
      //  // this.found = true;
   
      //   }
   
      //  //}
   
      // )







        
  }

  getCattName(catName) {


   // this.categoriesName = "lkjasdflkjasdf";

   //    this.categoriesName = this.catName;
   //    console.log("categoriesNamee" + this.categoriesName);
     
  }


  addCateg(categoriesName:String):void {

      console.log("categoriesName-addCated", categoriesName);
      this.getCatName(categoriesName);

    this.wordService.addCat({categoriesName} as Categories)
    .subscribe(categories => {

      this.categ.push(categories);
      

    });

    this.getCatName(this.catName)

    // this.wordService.addCat({categoriesName}) as Categories)
    // .subscribe(categories => {

    //    this.categories.push(categories);
    // });

   // this.getCattName(this.catName);

   // this.getCatName();

  }


  add(engword:string, plword:string):void {

    this.wordService.addWord({engword, plword} as Word)
    .subscribe(word => {

      this.words.push(word);
    });

   }

  
}
