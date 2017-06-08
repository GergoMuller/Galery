import { Component, ViewChild, ElementRef} from "@angular/core";
import {Painting} from "../model/Painting";
import{PaintingService} from "../services/PaintingService";
import {Account} from "../model/Account";


@Component({
    selector: "admin-comp",
    templateUrl: "./app/admin/admin.html",
})
export class AdminComponent{
    @ViewChild("imgupload")
    private upload: ElementRef;
    public newPainting: Painting = new Painting();
    public resultString: string;

    constructor(private service :PaintingService){}


    public savePainting(): void{
        this.service.savePainting(this.newPainting)
            .subscribe(
                (res: string) => this.resultString = res,
                error => { console.log(error); this.resultString = "Error, only jpeg is supported"},
                () => console.log("REST post painting done")
            );
    } 

    ngOnInit(){
         var a = $('#browse');
         a.click( function(){
              $("#browse2").trigger("click"); }); 
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

}



