import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../shared/category.model';
import { CategotyServicesService } from '../shared/categoty-services.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: [
  ]
})
export class CategoryComponent implements OnInit {

  constructor(public service: CategotyServicesService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Category();
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }
  
  insertRecord(form: NgForm) {
    this.service.postCategory().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    )
  }
}
