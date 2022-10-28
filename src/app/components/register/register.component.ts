import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDTO } from 'src/app/models/user.model';
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
      lastName: ['', Validators.required],
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
    this.userService.registerUser(this.mapUserDto()).subscribe(
      (data) => {
        console.log('created',data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  mapUserDto() : UserDTO{
    let userDto: UserDTO = {
      name: this.user.value.name,
      lastName: this.user.value.lastName,
      email: this.user.value.email,
      password: this.user.value.password,
      phone: this.user.value.phone,
      typeNit: this.user.value.typeNit,
      nit: this.user.value.nit
    }
    return userDto;
  }

  checked() {
    this.isChecked = !this.isChecked;
  }
}
