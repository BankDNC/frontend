import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

//models
import { msgError } from '../../models/error.model';

// Others
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
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
    this.authService.login(this.user.value.email, this.user.value.password)
      .subscribe({
        next: () => this.loginSuccess(),
        error: (error) => this.loginError(error.error)
      });
  }

  loginSuccess() {
    let alert = Swal.fire({
      title: 'Login',
      text: 'Login success',
      icon: 'success',
      confirmButtonText: 'Ok'
    });

    alert.then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/home']);
      }
    });
  }

  loginError(error : msgError) {
    Swal.fire({
      title: 'Error!',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }

}
