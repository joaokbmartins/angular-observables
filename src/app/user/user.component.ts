import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-component',
  template: 'User id: <span>{{id}}</span>',
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['id']) {
        this.id = +params['id'];
      }
    });
  }
}
