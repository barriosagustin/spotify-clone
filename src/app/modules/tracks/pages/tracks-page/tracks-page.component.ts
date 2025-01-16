import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css'],
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  observerList$: Array<Subscription> = [];

  titleSmall: string = 'La mejor musica del mundo';
  titleBig: string = 'Lo mejor de Electronica';

  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    this.loadDataAll();
    this.loadDataRandom();
  }

  loadDataAll(): void {
    this.trackService.getAllTracks$().subscribe((res: TrackModel[]) => {
      this.tracksTrending = res;
    });
  }

  loadDataRandom(): void {
    this.trackService.getAllRandom$().subscribe(
      (res: TrackModel[]) => {
        this.tracksRandom = res;
      },
      (err) => {
        console.log('error de conexion');
      }
    );
  }

  ngOnDestroy(): void {}
}
