import {Component} from '@angular/core';




@Component({
    selector: "main-comp",
    templateUrl: "./app/main/main.html",
})
export class MainComponent{

    public isAdmin: boolean = false;

    public login(): void{
        this.isAdmin = true;
    }

}

$(document).ready(function(){
    $(document).scroll(function(){
        var nav = $('.navdiv');
        nav.toggleClass('nav2', $(this).scrollTop() > nav.height());
        $('ul li a').toggleClass('a2',$(this).scrollTop() > nav.height());
    })
})
