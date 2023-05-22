import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //programacion reactiva

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit,OnDestroy {
mockCover: TrackModel={
   
  cover:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmGjtmNPLiWFt-qVxD_bAuLWBuPWY1_Ig_A&usqp=CAU',
  album:'gioli & agi',
  name:'bebe(oficial)',
  url:'http://localhost/track.mp3',
  _id:'1',
}

listObservers$: Array<Subscription> = []

constructor(private _multimediaService :MultimediaService) {}

ngOnInit(): void {
  const observer1$: Subscription = this._multimediaService.callback.subscribe((response:TrackModel) =>  {
    console.log(response); 
  })

  this.listObservers$ = [observer1$]
}

ngOnDestroy(): void {
  this.listObservers$.forEach(u => u.unsubscribe());
}


}
