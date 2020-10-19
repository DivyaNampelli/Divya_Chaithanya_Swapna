import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album;
  albumId: any;
  albumById: any;
  editedId: any;
  constructor(private router: Router, private formbuilder: FormBuilder, private auth: AuthService) {
  }
  ngOnInit() {
    this.getAllAlbum();
  }
  get f() {
    return this.albumForm.controls;
  }
  albumForm: FormGroup = this.formbuilder.group({
    AlbumName: ['', Validators.required],
    Year: ['', Validators.required],
    GenreId: ['', Validators.required],
  })
  getAllAlbum() {
    this.auth.getAllAlbum().subscribe(resp => {

      if (resp["status"] == 200) {
        this.album = resp["data"];
      }
      else {
        alert(resp["data"]);
      }
    })
  }
  addAlbum() {
    this.albumForm.value.Year = Number(this.albumForm.value.Year);
    this.albumForm.value.GenreId = Number(this.albumForm.value.GenreId);
    this.auth.addAlbum(this.albumForm.value).subscribe(resp => {

      this.getAllAlbum();
      if (resp["status"] == 200) {
        alert(resp["data"]);
      }
      else {
        alert(resp["data"]);
      }
    })
  }

  editAlbum(val) {
    this.editedId = val;
    this.auth.getAlbumById(val).subscribe(res => {
      this.albumById = res["data"];
      this.albumForm.get("AlbumName").setValue(this.albumById.albumName),
        this.albumForm.get("Year").setValue(this.albumById.year),
        this.albumForm.get("GenreId").setValue(this.albumById.genreId)
    })
  }

  updateAlbum() {
    let obj = {
      albumId: this.editedId,
      albumName: this.albumForm.value.AlbumName,
      year:Number(this.albumForm.value.Year),
      genreId: this.albumForm.value.GenreId
    }
    this.auth.updateAlbum(obj).subscribe(resp => {
      if (resp["status"] == 200) {
        this.getAllAlbum();
      }
      else {
        alert(resp["data"]);
      }
    })
  }
  deleteAlbum(id) {
    this.auth.deleteAlbum(id).subscribe(resp => {
      if (resp["status"] == 200) {
        this.getAllAlbum();
      }
      else {
        alert(resp["data"]);
      }
    })
  }
}
