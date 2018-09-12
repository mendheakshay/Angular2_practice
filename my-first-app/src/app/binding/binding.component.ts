import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() {
  	setTimeout(() => {
			this.allowNewServer = true;
		}, 2000);
  }

  ngOnInit() {
  }
  serverId = 10;
	serverStatus = "Offline";
	allowNewServer = false;
	serverCreationStatus = "No server was created!";
	name="Akshay"
	userName="";

	getServerStatus() {
		return this.serverStatus;
	}

	onCreateServer() {
		return this.serverCreationStatus = "Server is created!";
	}

	resetUserName() {
		return this.userName="";
	}
}
