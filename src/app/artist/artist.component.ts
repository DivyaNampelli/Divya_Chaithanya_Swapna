import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist;
  editedId: any;
  artistId: any;
  artistById: any;
  constructor(private router: Router, private formbuilder: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
    this.getAllArtists();
  }
  artistForm: FormGroup = this.formbuilder.group({
    ArtistName: ['', Validators.required],
    Profession: ['', Validators.required],
    TitleId: ['', Validators.required],
    MusicdirectorName: ['', Validators.required]
  })
  getAllArtists() {
    this.auth.getAllArtists().subscribe(resp => {
      if (resp["status"] == 200) {
        this.artist = resp["data"]
      }
      else {
        alert(resp["data"]);
      }
    })
  }
  addArtist() {
    this.artistForm.value.TitleId=Number(this.artistForm.value.TitleId);
    this.auth.addArtist(this.artistForm.value).subscribe(resp => {
      debugger;
      if (resp["status"] == 200) {
       this.getAllArtists();
      }
      else {
        alert(resp["data"]);
      }
    })
  }
  editArtist(val) {
    this.editedId = val;
    this.auth.getArtistById(val).subscribe(res => {
      this.artistById = res["data"];
      this.artistForm.get("ArtistName").setValue(this.artistById.artistName),
        this.artistForm.get("Profession").setValue(this.artistById.profession),
        this.artistForm.get("TitleId").setValue(this.artistById.titleId),
        this.artistForm.get("MusicdirectorName").setValue(this.artistById.musicdirectorName)
    })
  }
  updateArtist() {
    debugger;
    let obj = {   
      artistId: this.editedId,
      artistName: this.artistForm.value.ArtistName,
      profession: this.artistForm.value.Profession,
      titleId: this.artistForm.value.TitleId,
      musicdirectorName: this.artistForm.value.MusicdirectorName
    }
    this.auth.updateArtist(obj).subscribe(resp => {
      if (resp["status"] == 200) {
        this.getAllArtists();
      }
      else {
        alert(resp["data"]);
      }
    })
  }
  deleteArtist(id) {
    this.auth.deleteArtist(id).subscribe(resp => {
      if (resp["status"] == 200) {
        this.getAllArtists();
      }
      else {
        alert(resp["data"]);
      }
    })
  }
}
