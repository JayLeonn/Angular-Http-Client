import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPrintableComponent } from './book-printable/book-printable.component';
import { DetailContainerComponent } from './detail-container/detail-container.component';
import { BookdetailsComponent } from './book-details/book-details.component';
import { RouterModule } from '@angular/router';

const detailRoutes = [
  {
    path: 'book/:id',
    component: DetailContainerComponent,
    children: [
      { path: '', component: BookdetailsComponent }, // localhost:4200/book/:id
      { path: 'printable', component: BookPrintableComponent }, // localhost:4200/book/:id/printable
    ],
  },
];

@NgModule({
  declarations: [
    BookPrintableComponent,
    DetailContainerComponent,
    BookdetailsComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(detailRoutes)],
})
export class DetailModule {}
