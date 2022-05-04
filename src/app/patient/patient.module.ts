import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { IndexComponent } from './index/index.component';
import { AddpatientComponent } from './addpatient/addpatient.component';


@NgModule({
  declarations: [
    ViewComponent,
    IndexComponent,
    AddpatientComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PatientModule { }

