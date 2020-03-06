import { Component, OnInit } from '@angular/core';
import {UserInfoModel} from '../models/userInfo';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'display-user-data',
  templateUrl: './display-user-data.component.html',
  styleUrls: ['./display-user-data.component.css']
})

export class DisplayUserDataComponent implements OnInit
{

	constructor(private http: HttpClient, private route: ActivatedRoute) {

	}

	private subscriber: any;

	ngOnInit()
	{
	}

}
