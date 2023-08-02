import { Injectable } from '@angular/core';
import { DayPilot } from 'daypilot-pro-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import EventData = DayPilot.EventData;
import { retryWhen, delay, take } from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {
  }

  /*
  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<EventData[]> {
    return this.http.get<any>("/api/events?start=" + from.toString() + "&end=" + to.toString()).pipe(
      map(array =>
        array.map(this.transformEventJsonToData)
      )
    );
  }
  */

  // in development mode, the client may request data before the server is fully initialized, retry
  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<EventData[]> {
    return this.http.get<any>("/api/events?start=" + from.toString() + "&end=" + to.toString())
      .pipe(
        retryWhen(errors =>
          errors.pipe(
            delay(1000), // Delay retry by 1 second
            take(3)      // Retry up to 3 times
          )
        ),
        map(array => array.map(this.transformEventJsonToData))
      );
  }

  // in development mode, the client may request data before the server is fully initialized, retry
  getResources(): Observable<any> {
    return this.http.get("/api/resources")
      .pipe(
        retryWhen(errors =>
          errors.pipe(
            delay(1000), // Delay retry by 1 second
            take(3)      // Retry up to 3 times
          )
        )
      );
  }

  createEvent(e: EventData): Observable<EventData> {
    var transformed = this.transformEventDataToJson(e);
    return this.http.post<EventJson>("/api/events", transformed).pipe(
      map(this.transformEventJsonToData)
    );
  }

  deleteEvent(id: string): Observable<any> {
    return this.http.delete("/api/events/" + id);
  }

  updateEvent(e: EventData): Observable<any> {
    var transformed = this.transformEventDataToJson(e);
    return this.http.put("/api/events/" + e.id, transformed);
  }

  transformEventJsonToData: ((json:EventJson) => EventData) = (json) => (
    {
      id: json.id,
      start: json.start,
      end: json.end,
      text: json.text,
      resource: json.resourceId
    }
  );

  transformEventDataToJson: ((data:EventData) => EventJson) = (data) => (
    {
      id: data.id as number,
      start: data.start instanceof DayPilot.Date ? data.start.toString(): data.start,
      end: data.end instanceof DayPilot.Date ? data.end.toString() : data.end,
      text: data.text,
      resourceId: data.resource as number
    }
  );

}

export interface EventJson {
  id: number;
  start: string;
  end: string;
  text: string;
  resourceId: number
}
