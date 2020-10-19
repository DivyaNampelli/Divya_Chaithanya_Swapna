import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})

export class TitleComponent implements OnInit {

title;
  titleForm: FormGroup = this.formbuilder.group({
    TitleName: ['', Validators.required],
    AlbumId: ['', Validators.required],
    //AlbumId:['',Validators.required],
  })
  editedId: any;
  titleById: any;
  res: any;
  getalltitles=[];
  audioResult: any;

  constructor(private router:Router,private formbuilder:FormBuilder,private auth:AuthService) { }

  ngOnInit(): void {
    this.getAllTitles();
  }

getAllTitles(){
  let data:any;

   this.auth.getAllTitle().subscribe(resp=>{    
    if(resp["status"] == 200){
      data = resp["data"];
      this.getalltitles=resp["data"];      
      for (let i of data) {        
        i.titleName = i.titleName.replaceAll(" ", "/");
      }
      this.getalltitles = data;
    }
    else{
      alert(resp["data"]);
    }
  })
}
addTitle(){
  this.titleForm.value.AlbumId=Number(this.titleForm.value.AlbumId);
  return this.auth.addTitle(this.titleForm.value).subscribe(resp=>{
    if(resp["status"]==200){
      this.getAllTitles();
      alert(resp["data"]);
   
    }
    else{
      alert(resp["data"]);
    }
  })
}
editTitle(val) {
  this.editedId = val;
  this.auth.getTitleById(val).subscribe(res => {
    this.titleById = res["data"];
    this.titleForm.get("TitleName").setValue(this.titleById.titleName),
    this.titleForm.get("AlbumId").setValue(this.titleById.albumId)
  })
}
updateTitle() {
  let obj = {
    titleId: this.editedId,
    titlename: this.titleForm.value.TitleName,
    albumId: this.titleForm.value.AlbumId
  }
  this.auth.updateTitle(obj).subscribe(resp => {
    if (resp["status"] == 200) {
      this.getAllTitles();
    }
    else {
      alert(resp["data"]);
    }
  })
}
deleteTitle(id) {
  this.auth.deleteTitle(id).subscribe(resp => {
    if (resp["status"] == 200) {
      this.getAllTitles();
    }
    else {
      alert(resp["data"]);
    }
  })
}
// changeSong(e) {
//   console.log(e.target.value);
//   this.res = e.target.value;
//   this.getalltitles.filter(element => {
//     if (element.titleId == this.res) {
//       this.audioResult = element.titleName;
//       console.log(this.audioResult, "hsdgshdgsdg");
//     }
//   })
// }
}
