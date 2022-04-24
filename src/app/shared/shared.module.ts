import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ClockComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, MatButtonModule, MatInputModule
  ],
  exports: [
    CommonModule,
    ClockComponent,
    FormsModule,
    ReactiveFormsModule, MatButtonModule, MatInputModule
  ]
})
export class SharedModule { }
