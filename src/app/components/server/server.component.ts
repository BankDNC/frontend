import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  show: boolean = false;

  constructor(
    private service: ServerService
  ) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  checkHealt(){
    this.service.statusServer().subscribe({
      next: () => this.show = true,
      error: () => this.show = false
    });
  }

}
