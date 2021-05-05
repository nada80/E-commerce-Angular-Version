import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToLoginPage()
  {
    this.router.navigate(['/Login'],{relativeTo: this.activatedRouter});
  }

}