import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../services/Constants';
import { Painting} from "../model/Painting";
import {Account} from "../model/Account";

@Injectable()
export class PaintingService{

    private url: string;
    private adminUrl: string;
    private header: Headers;

    constructor(private http: Http, private config: Configuration){
        this.url = config.paintingsUrl;
        this.adminUrl = config.admingsUrl;
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

    public login(a: Account): Observable<string>{
        return this.http.post(this.adminUrl,JSON.stringify(a), {headers: this.header})
            .map((resp: Response) => <string>resp.json());
    }

    public delete(id: number): void{
        let url = this.url + "/" + id;
        this.http.get(url).subscribe();
    }

}
