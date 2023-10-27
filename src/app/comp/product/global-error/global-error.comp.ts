import { Component, OnInit } from '@angular/core';
import {ErrorServices} from '../../../services/error.services';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.comp.html'
})
export class GlobalErrorComponent implements OnInit {

  constructor(public errorService: ErrorServices) { }

  ngOnInit(): void {
  }

}
