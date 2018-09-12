import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
	
	

  constructor() {
  	this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  ngOnInit() {
  }


  showText = false;
  showTextagain = false;
  serverStatus = "";
  serverName= "Testserver";
  servers = ['Testserver'];

  displayText() {
  	this.showText = true;
  }

  displayTextagain() {
  	this.showTextagain = true;
  }

  getServerStatus() {
  	this.serverStatus;
  }

  getColor() {
  	return this.serverStatus === "Online" ? 'green' : 'red';
  }

  addText() {
  	this.servers.push(this.serverName);
  }
}
