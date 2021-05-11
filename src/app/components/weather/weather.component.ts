import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm!: FormGroup;
  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.FormBuilder.group({
      location: ['']
    });
  }
  sendToAPIXU(formValues: any) {
    console.log(formValues);
  }

}
