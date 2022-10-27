import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//models

//services
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user!: FormGroup;
  submitted = false;
  isChecked = true;
  listTypeNit: string[] = ['CC', 'CE', 'TI'];

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.user = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phone: ['', [Validators.required]],
      typeNit: ['', Validators.required],
      nit: ['', Validators.required]
    });
  }

  get f() {
    return this.user.controls;
  }

  onSubmit() {
    this.submitted = true;
    

    if (this.user.invalid) {
      return;
    }

    console.log(this.user.value);
    this.userService.registerUser(this.user.value);
  }

  checked() {
    this.isChecked = !this.isChecked;
  }
}
