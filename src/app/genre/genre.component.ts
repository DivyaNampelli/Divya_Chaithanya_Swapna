import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Genre } from '../Models/music.model';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  genre;
  genereById;
  editedId: any;
  constructor(private router: Router, private formbuilder: FormBuilder, private authservice: AuthService) {
  }
  ngOnInit() {
    this.getAllGenre();
  }
  genreForm: FormGroup = this.formbuilder.group({
    GenereName: ['', Validators.required]
  })
  getAllGenre() {
    this.authservice.getAllGenre().subscribe(resp => {

      if (resp["status"] == 200) {
        this.genre = resp["data"];
      }
      else {
        alert(resp["data"]);
      }
    })
  }
  addGenre() {
    this.authservice.addGenre(this.genreForm.value).subscribe(resp => {

      if (resp["status"] == 200) {
        this.getAllGenre();
        alert(resp["data"]);
      }
      else {
        alert(resp["data"]);
      }
    })
  }

  editGenere(val) {
    this.editedId = val;
    this.authservice.getGenreById(val).subscribe(res => {
    this.genereById = res['data'];
    this.genreForm.get("GenereName").setValue(this.genereById.genereName);
    })
  }

  updateGenere() {
    let obj = {
      genreId: this.editedId,
      genereName: this.genreForm.value.GenereName
    }
    this.authservice.updateGenere(obj).subscribe(resp => {
      if (resp["status"] == 200) {
        this.getAllGenre();
      }
      else {
        alert(resp["data"]);
      }
    })
  }
  deleteGenere(id) {
    this.authservice.deleteGenere(id).subscribe(resp => {
      if (resp["status"] == 200) {
        this.getAllGenre();
      }
      else {
        alert(resp["data"]);
      }
    })
  }
}
