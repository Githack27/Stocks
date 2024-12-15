import { Component } from '@angular/core';
import { KnowUsComponent } from "../know-us/know-us.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [KnowUsComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
