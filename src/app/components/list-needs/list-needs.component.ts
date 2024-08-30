import { Component, OnInit } from '@angular/core';
import { Needs } from 'src/app/model/Needs';
import { NeedsServiceService } from 'src/app/services/needs-service.service';

@Component({
  selector: 'app-list-needs',
  templateUrl: './list-needs.component.html',
  styleUrls: ['./list-needs.component.css']
})
export class ListNeedsComponent implements OnInit {

  needs: Needs[] = [];
  errorMessage: string | undefined;

  constructor(private needsService: NeedsServiceService) { }

  ngOnInit(): void {
    this.loadNeeds();
  }

  loadNeeds(): void {
    this.needsService.retrieveAllNeeds().subscribe(
      (data: Needs[]) => {
        this.needs = data;
      },
      (error) => {
        this.errorMessage = 'Failed to load needs';
        console.error(error);
      }
    );
  }
}
