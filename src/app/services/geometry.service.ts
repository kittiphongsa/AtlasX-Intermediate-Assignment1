import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeometryService {

  type: string = "";
  rings: Array<any> = null;

  private graphicsUpdate = new Subject<Array<any>>();

  getPolygon(){
    return this.rings;
  }

  getGraphicsUpdateListener(){
    return this.graphicsUpdate.asObservable();
  }

  setPolygon(rings: Array<any>){
    this.type = "polygon",
    this.rings = rings;
    this.graphicsUpdate.next(rings);
  }

}
