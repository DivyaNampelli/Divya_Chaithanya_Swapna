import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: any = `${environment.host_url}`
  constructor(private http: HttpClient) { }

  //GENRE SERVICES
  getAllGenre() {
    return this.http.get(this.url + '/Genre/GetAllGenre');
  }
  addGenre(c) {
    return this.http.post(this.url + '/Genre/AddGenre', c);
  }
  getGenreById(id) {
    return this.http.get(this.url + '/Genre/GetGenreById?genreid=' + id);
  }
  updateGenere(val) {
    return this.http.put(this.url + '/Genre/UpdateGenre', val);
  }
  deleteGenere(id) {
    return this.http.delete(this.url + '/Genre/DeleteGenre?genreId=' + id);
  }

  //ALBUM SERVICES
  getAllAlbum() {
    return this.http.get(this.url + '/Album/GetAllAlbums');
  }
  addAlbum(c) {
    return this.http.post(this.url + '/Album/AddAlbum', c);
  }
  getAlbumByGenreId(id) {
    return this.http.get(this.url + '/Album/GetAlbumByGenreId?genreid=' + id);
  }
  getAlbumById(id) {
    return this.http.get(this.url + '/Album/GetAlbumById?albumId=' + id);
  }
  updateAlbum(val) {
    return this.http.put(this.url + '/Album/UpdateAlbum', val);
  }
  deleteAlbum(id) {
    return this.http.delete(this.url + '/Album/DeleteAlbum?albumId=' + id);
  }


  //TITLE SERVICES
  getAllTitle() {
    return this.http.get(this.url + '/Title/GetAllTitles');
  }
  addTitle(c) {
    return this.http.post(this.url + '/Title/AddTitle', c);
  }
  getTitleByAlbumId(id) {
    return this.http.get(this.url + '/Title/GetTitleByAlbumId?albumid=' + id);
  }
  getTitleById(id) {
    return this.http.get(this.url + '/Title/GetTitleById?titleId=' + id);
  }
  updateTitle(val) {
    return this.http.put(this.url + '/Title/UpdateTitle', val);
  }
  deleteTitle(id) {
    return this.http.delete(this.url + '/Title/DeleteTitle?titleId=' + id);
  }

  //ARTIST SERVICES
  getAllArtists() {
    return this.http.get(this.url + '/Artist/GetAllArtists');
  }
  addArtist(c) {
    return this.http.post(this.url + '/Artist/AddArtist', c);
  }
  getArtistByTitleId(id) {
    return this.http.get(this.url + '/Title/GetArtistByTitleId?titleId=' + id);
  }
  getArtistById(id) {
    return this.http.get(this.url + '/Artist/GetArtistById?artistId=' + id);
  }
  updateArtist(val) {
    return this.http.put(this.url + '/Artist/UpdateArtist', val);
  }
  deleteArtist(id) {
    return this.http.delete(this.url + '/Artist/DeleteArtist?artistId=' + id);
  }
  //
  addMusic() {
    return this.http.get(this.url + '/Music/AddMusic');
  }
  getMusicById(id) {
    return this.http.get(this.url + '/Music/GetMusicById?musicId=' + id);
  }
  updateMusic(val) {
    return this.http.put(this.url + '/Music/UpdateMusic', val);
  }
  deleteMusic(id) {
    return this.http.delete(this.url + '/Music/DeleteMusic?musicId=' + id);
  }
  getMusic(c) {
    return this.http.post(this.url + '/Music/GetMusic',c);
  }
}
