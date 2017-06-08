import { Injectable } from '@angular/core';

@Injectable()
export class Configuration{
    private server: string = "http://localhost:8080/Galery-0.0.1-SNAPSHOT/galery/";
    private paintingApi: string = "paintings";
    private adminApi: string = "admin";
    public paintingsUrl: string = this.server + this.paintingApi;
    public admingsUrl: string = this.server + this.adminApi;
}