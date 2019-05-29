import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../../services/planets/planets.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from '../../services/notifications/notifications.service';

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss']
})
export class PlanetInfoComponent implements OnInit {
  constructor(
     private planetManager: PlanetsService, 
     private activatedRoute: ActivatedRoute,
     private notification: NotificationsService
      ) { }

  details = []
  
  ngOnInit() {
    this.prepareView();
  }

  prepareView(){
    this.activatedRoute.paramMap.subscribe(params => {
      const id = +params.get('id');
      this.planetManager.getPlanetInfo(id).subscribe((response) => {
        const data = response as any;
        this.details = data;
        this.notification.snackBarSuccess();
      }, error => {
        this.notification.snackBarError();
        }
      );
    });
  }
}
