import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { TokenStorageService } from '../service/token-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomaineService } from '../service/domaine.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { FormateurService } from '../service/formateur.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showFiller = false;
  
  constructor(private tokenStorageService: TokenStorageService, public dialog: MatDialog, private router: Router,
    private formateurService: FormateurService) 
  { }

  ngOnInit(): void {
    this.formateurService.getFormateurs()
    .subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  
  logout(): void {
    console.log("logout");
    this.tokenStorageService.signOut();
    this.router.navigateByUrl("/login");

  }


}
