import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../services/Constants';
import { Painting} from "../model/Painting"

@Injectable()
export class PaintingService{

    private url: string;
    private header: Headers;

    constructor(private http: Http, private config: Configuration){
        this.url = config.paintingsUrl;
        this.header = new Headers();
        this.header.append("Content-Type", "application/json");
        this.header.append("Accept", "application/json, text/plain");
    }

    public savePainting(p: Painting): Observable<String>{
        let pJson = JSON.stringify(p);
        return this.http.post(this.url, pJson, {headers: this.header})
                    .map((response: Response) => <string>response.json());            
    }

    public getAllPaintings(): Observable<Painting[]>{
        return this.http.get(this.url)
                    .map((resp: Response) =><Painting[]>resp.json());
    }

}
