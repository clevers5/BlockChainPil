import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShowAlertMessage } from 'src/app/helpers/showAlertMessage';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  public registerForm!: FormGroup;
  private showMessage = new ShowAlertMessage();

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        name: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.required,
        Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$')
        ]),
        lastname: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.required,
        Validators.pattern('^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$')
        ]),
        email: new FormControl('', [
        Validators.required,
        Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)
        ])
      },
    );
  }

  public save(): void {
    this.showMessage.showSuccessAlert(
      'Usuario registrado exitosamente'
    );
  }

  public cancel(): void {
    this.showMessage.showCancelAlert(
      "¿Esta seguro que desea cancelar su registro?",
      ""
    );
  }

  public hasErrorControl(formControlName: any, errorType: any) {
    return this.registerForm.controls[formControlName].errors?.[errorType];
  }

  public isInvalid(formControlName: string) {
    const control = this.registerForm.controls[formControlName];
    return !control.valid && (control.dirty || control.touched);
  }

}
