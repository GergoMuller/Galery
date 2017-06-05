import {Component} from '@angular/core';




@Component({
    selector: "main-comp",
    templateUrl: "./app/main/main.html",
})
export class MainComponent{

    public title: string = "Hello Galery";

}


$(document).ready(function(){
    $(document).scroll(function(){
        var nav = $('.navdiv');
        nav.toggleClass('nav2', $(this).scrollTop() > nav.height());
        $('ul li a').toggleClass('a2',$(this).scrollTop() > nav.height());
    })
})