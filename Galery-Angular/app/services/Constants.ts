import { Injectable } from '@angular/core';

@Injectable()
export class Configuration{
    private server: string = "http://localhost:8080/Galery/galery/";
    private paintingApi: string = "paintings";
    public paintingsUrl: string = this.server + this.paintingApi; 
}