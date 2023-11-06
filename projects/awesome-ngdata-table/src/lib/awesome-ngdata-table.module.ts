import { NgModule } from '@angular/core';
import { AwesomeNGDataTableComponent } from './components/dtTable/awesome-ngdata-table.component';
import { FormsModule } from '@angular/forms';
import { PagerComponent } from './components/pager/pager.component';
import { TableExporterComponent } from './components/table-exporter/table-exporter.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TableActionsTdComponent } from './components/table-actions-td/table-actions-td.component';



@NgModule({
  declarations: [
    AwesomeNGDataTableComponent,
    PagerComponent,
    TableExporterComponent,
    TableActionsTdComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
  ],
  exports: [
    AwesomeNGDataTableComponent,
  ]
})
export class AwesomeNGDataTableModule { }
