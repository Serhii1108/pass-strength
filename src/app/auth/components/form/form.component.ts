import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { Status, statusCodes } from 'src/app/shared/constance';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() status = new EventEmitter<Status>()

  public passForm!: FormGroup

  public constructor(private authService: AuthService, private fb: FormBuilder) {
    this.status.emit('clear')
  }

  ngOnInit(): void {
    this.passForm = this.fb.group({
      passInput: ['']
    })
  }

  public checkPassword(password: string): void {
    if (!password.length) {
      this.status.emit('clear')
      return
    }
    if (password.length < 8) {
      this.status.emit("warn")
      return
    }

    const strength: number = this.authService.testPass(password)
    this.status.emit(statusCodes[strength])
  }
}
