import {Component} from '@angular/core';
import{PaintingService} from "../services/PaintingService";
import{Account} from "../model/Account";



@Component({
    selector: "main-comp",
    templateUrl: "./app/main/main.html",
})
export class MainComponent{

    constructor(private service :PaintingService){}

    public isAdmin: boolean = false;
    public acc: Account = new Account();
    public resultString: string;

    public login(): void{
        this.service.login(this.acc)
            .subscribe(
            (res: string) => this.resultString = res,
            error => console.log(error)
            )
        setTimeout(() => {if(this.resultString === "Successful login"){
            this.isAdmin = true;
        } },500);
        
        this.acc= new Account();
    }
}

$(document).ready(function(){
    $(document).scroll(function(){
        var nav = $('.navdiv');
        nav.toggleClass('nav2', $(this).scrollTop() > nav.height());
        $('ul li a').toggleClass('a2',$(this).scrollTop() > nav.height());
    })
})
