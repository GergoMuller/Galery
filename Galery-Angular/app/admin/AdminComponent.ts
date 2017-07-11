import { Component, ViewChild, ElementRef, EventEmitter, Output} from "@angular/core";
import {Painting} from "../model/Painting";
import{PaintingService} from "../services/PaintingService";
import {Account} from "../model/Account";


@Component({
    selector: "admin-comp",
    templateUrl: "./app/admin/admin.html",
})
export class AdminComponent{
   
    @Output()
    public refreshEvent = new EventEmitter();
    public newPainting: Painting = new Painting();
    public resultString: string;

    constructor(private service :PaintingService){}


    public savePainting(): void{
        this.service.savePainting(this.newPainting)
            .subscribe(
                (res: string) => this.resultString = res,
                error => { console.log(error); this.resultString = "ERROR"},
                () => console.log("REST post painting done")
            );
        setTimeout(() => this.refreshEvent.emit(), 800);
    } 

    ngOnInit(){
        var a = $('#browse');
        a.click( function(){
            $("#browse2").trigger("click"); }); 

        var a = $('#imp');
        a.click( function(){
            $("#imp2").trigger("click"); }); 
    }

    public onImgChange(event){
        this.readThis(event.target);
    }

    readThis(inputValue: any): void {
        var file:File = inputValue.files[0];
        var myReader:FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.newPainting.painting = myReader.result;
            this.newPainting.painting = this.newPainting.painting.substring(23);
        }
        myReader.readAsDataURL(file);
    }

    public onImgChange2(event){
        this.readThis2(event.target);
    }

    readThis2(inputValue: any): void {
        var file:File = inputValue.files[0];
        var myReader:FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.newPainting.imprint = myReader.result;
            this.newPainting.imprint = this.newPainting.imprint.substring(23);
        }
        myReader.readAsDataURL(file);
    }

}



