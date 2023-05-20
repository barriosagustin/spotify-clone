import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
mockCover: TrackModel={
   
  cover:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmGjtmNPLiWFt-qVxD_bAuLWBuPWY1_Ig_A&usqp=CAU',
  album:'gioli & agi',
  name:'bebe(oficial)',
  url:'http://localhost/track.mp3',
  _id:'1',
}

constructor() {}

ngOnInit(): void {
  
}


}
