import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const self = this;
    // tslint:disable-next-line: typedef
    // tslint:disable-next-line: only-arrow-functions
    setTimeout(function() {
      self.router.navigateByUrl('/welcome');
    }, 3000);
  }

}
