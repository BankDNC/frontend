import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Models
import { UserDTO } from 'src/app/models/user.model';

// Services
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

// Others
import Swal from 'sweetalert2';

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
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

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
    this.userService.registerUser(this.mapUserDto()).subscribe({
        next: () => this.registerSuccess(),
        error: () => this.registerError()
      });
  }

  mapUserDto(): UserDTO {
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

  registerError() {
    Swal.fire({
      title: 'Error!',
      text: 'Datos incorrectos o servicio no esta disponible',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }

  registerSuccess() {
    let alert = Swal.fire({
      title: 'Register',
      text: 'Registro exitoso',
      icon: 'success',
      confirmButtonText: 'Ok'
    });

    alert.then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['']);
      }
    });
  }
}
