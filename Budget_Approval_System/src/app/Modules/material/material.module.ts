import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list'


const MatModules =[
  MatButtonModule,MatButtonToggleModule,MatToolbarModule,
  MatSidenavModule,MatListModule,MatIconModule,
  MatSelectModule,MatInputModule,MatFormFieldModule,MatDividerModule,
  MatTableModule,MatPaginatorModule,MatGridListModule
];

@NgModule({
 
  imports: [MatModules],
  exports:[MatModules]
})
export class MaterialModule { }
