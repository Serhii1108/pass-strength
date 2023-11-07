import { Component, EventEmitter, Output } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { Status, statusCodes } from 'src/app/shared/constance';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() status = new EventEmitter<Status>()

  public passForm: UntypedFormGroup = new UntypedFormGroup({
    passInput: new UntypedFormControl('')
  })

  public constructor(private authService: AuthService){
    this.status.emit('clear')
  }

  public checkPassword(): void {
    const password: string =  this.passForm.get('passInput')?.value.trim()
    
    if (!password.length){
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
