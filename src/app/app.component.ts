import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from 'src/app/components/register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bank-frontend';

  constructor(private modalService: NgbModal) { }

  openRegister() {
    const modalRef = this.modalService.open(RegisterComponent, { size: 'xl', centered: true });
  }
}
