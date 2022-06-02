import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/login.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  handleLogout(){
    this.auth.logout()
  }
}
