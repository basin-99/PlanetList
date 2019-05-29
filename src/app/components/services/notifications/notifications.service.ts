import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  durationInSeconds = 5;

  constructor( private _snackBar: MatSnackBar ) { }

  snackBarSuccess(message = 'Data has been loaded properly!'):void {
    this._snackBar.open(message, 'OK');
  }

  snackBarError(message = 'Data  has not been loaded properly!'):void {
    this._snackBar.open(message, 'OK');
  }
}
