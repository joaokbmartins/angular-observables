import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-component',
  template: ` <hr />
    User id: <span>{{ id }}</span>
    <br />
    <button class="btn btn-primary" (click)="onActivate()">Activate</button>`,
})
export class UserComponent implements OnInit {
  id: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['id']) {
        this.id = +params['id'];
      }
    });
  }

  onActivate() {
    this.userService.switchActivate();
  }
}
