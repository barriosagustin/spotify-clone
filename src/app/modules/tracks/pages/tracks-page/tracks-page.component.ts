import { Component,OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
mockTrackList:Array<TrackModel> = []

titleSmall:string ='La mejor musica del mundo'
titleBig:string ='Lo mejor de Electronica'

  constructor(){}

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default
    console.log(data);
    this.mockTrackList = data;
  }

}
