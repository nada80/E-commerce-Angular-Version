import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( private router:Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToRegisterPage()
  {
    this.router.navigate(['/Register'],{relativeTo: this.activatedRouter});
  }

}
