import { Component,OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { TrackService } from '@modules/tracks/services/track.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  trackList$:any=[]
  constructor(public _trackService:TrackService){}

  ngOnInit(): void {
   this.getTracks();
  }

  getTracks():void{
    this._trackService.getAllTracks$().subscribe((res:TrackModel) =>{
      this.trackList$ = res;
      console.log(res)
    })
  }

}
