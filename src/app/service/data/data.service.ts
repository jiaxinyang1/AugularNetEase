import { Injectable, ChangeDetectionStrategy } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  changed =new Subject();
  constructor() { }

 
}
