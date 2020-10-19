export class Music {
    MusicId: number;
    AlbumId: number;
    TitleId: number;
    ArtistId: number;
    GenreId: number;
    genereName: string;
    albumName: string;
    titleName: string;
    artistName: string;
    musicdirectorName: string;
}
export class Genre {
    GenreId: number;
    GenereName: string;
}
export class Album {
    AlbumId: number;
    AlbumName: string;
    Year: number;
    GenreId: number;
}
export class Artist {
    ArtistId: number;
    ArtistName: string;
    Profession: number;
    TitleId: string;
    MusicdirectorName: string;
    Title: string[];
    MusicMaster: string[];
}
export class Title {
    TitleId: number;
    TitleName: string;
    AlbumId: number;
}


