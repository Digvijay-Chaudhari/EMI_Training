import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component'; 
import { ViewhistoryComponent } from './Components/viewhistory/viewhistory.component'; 
import { HeaderComponent } from './Components/header/header.component'; 
import { LandingpageComponent } from './Components/landingpage/landingpage.component'; 
import { MaterialModule } from '../material/material.module';
import { TestingComponent } from './Components/testing/testing.component'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReportActionComponent } from './Components/report-action/report-action.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyRequestComponent } from './Components/my-request/my-request.component';
import { SearchRequestPipe } from 'src/app/Pipes/search-request.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    ViewhistoryComponent,
    HeaderComponent,
    LandingpageComponent,
    TestingComponent,
    ReportActionComponent,
    MyRequestComponent,
    SearchRequestPipe
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class BudgetModule { }
