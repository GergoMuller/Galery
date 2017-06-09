import { Component, OnInit} from "@angular/core";
import {Painting} from "../model/Painting";
import{PaintingService} from "../services/PaintingService";

@Component({
    selector: "paintings-comp",
    templateUrl: "./app/paintings/paintings.html"
})
export class PaintingsComponent extends OnInit{
    
    public paintings: Painting[];
    public selectedPainting: Painting = new Painting();
    public selIndex: number;

    constructor(private service: PaintingService){
        super();
    }

    public ngOnInit(): void{
        this.service.getAllPaintings()
            .subscribe(
                (res: Painting[]) => this.paintings = res,
                error => console.log(error),
                () => console.log("REST get painting done")
            );
    }

    public over(i: number){
      let elementName: string = "#details" + i;
      $(elementName).removeAttr("hidden");
      $("#p"+i).addClass("fadep");  
    }

    public leave(i: number){
      let elementName: string = "#details" + i;
      $(elementName).attr("hidden","true"); 
      $("#p"+i).removeClass("fadep");   
    }

    public showBig(i: number){
        this.selectedPainting = this.paintings[i];
        this.selIndex = i;
    }

    public forward(i: number){
        if(this.selIndex < this.paintings.length-1){
            this.selectedPainting = this.paintings[this.selIndex++ + 1];
        }
    }

    public back(i: number){
        if(this.selIndex > 0){
            this.selectedPainting = this.paintings[this.selIndex-- - 1];
        }
    }

    ngAfterViewChecked(){}
    


}