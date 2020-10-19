import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
 })
 export class MusicComponent implements OnInit {
 
  constructor(private router:Router,private formbuilder:FormBuilder,private auth:AuthService) { }
music;
  ngOnInit(): void {
    this.getMusic();
  }
  musicForm:FormGroup=this.formbuilder.group({
    GenereName:['',Validators.required],
    AlbumName: ['',Validators.required],
    TitleName:  ['',Validators.required],
    ArtistName: ['',Validators.required],
    MusicdirectorName:  ['',Validators.required]
  }
  )
getMusic(){
  return this.auth.getMusic(this.musicForm.value).subscribe(resp=>{
    debugger;
    if(resp["status"] == 200){
      this.music=resp["Album"];
      console.log(this.music);
    }
    else{
      alert(resp["Album"]);
    }
  })
}
}
