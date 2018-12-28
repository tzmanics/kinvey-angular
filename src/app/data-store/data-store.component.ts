import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

import { Kinvey } from 'kinvey-angular2-sdk';
import { Chore } from '../models/chore';

@Component({
  selector: 'app-data-store',
  templateUrl: './data-store.component.html',
  styleUrls: ['./data-store.component.sass']
})
export class DataStoreComponent implements OnInit {
  dataStore = Kinvey.DataStore.collection<Chore>('chores');
  dataStoreType = Kinvey.DataStoreType.Cache;
  chores: Chore[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      this.dataStoreType = queryParams['dataStoreType'];
      this.reload();
    });
  }
  
  reload() {
    this.dataStore.find().subscribe((chores) => {
      console.log(`data: ${chores}`);
      this.chores = chores;
      this.cd.detectChanges();
    });
  }

}
