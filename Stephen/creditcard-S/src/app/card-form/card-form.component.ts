import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

//form group para trabajar con la forma
//form control es para cada uno de los campos
@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      cardNumber: new FormControl('',
      [Validators.required, Validators.maxLength(16), Validators.minLength(16)]),
      expiration: new FormControl('',[
        Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
      ]),
      securityCode: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3)
      ])
  })
  constructor() {
    console.log(this.cardForm.get('name'))
   }

  ngOnInit(): void {
  }
  onReset(){
    this.cardForm.reset()
  }
  onSubmit(){
    console.log(this.cardForm.value.name)
    this.onReset()
  }
}
