import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule],
  declarations: [SpinnerComponent],
  exports: [FormsModule, SpinnerComponent]
})
export class SharedModule {}
