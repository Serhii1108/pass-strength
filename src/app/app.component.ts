import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

type Status = "easy" | "medium" | "strong" | "warn" | "clear"
const statusCodes: Record<number, Status> = {
  0: "warn",
  1: "easy",
  2: "medium",
  3: "strong"
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public status: Status = "clear"
  public passForm: UntypedFormGroup = new UntypedFormGroup({
    passInput: new UntypedFormControl('')
  })

  public checkPassword(): void {
    const password: string =  this.passForm.get('passInput')?.value.trim()
    if (!password.length){
      this.status = 'clear'
      return
    }
    if (password.length < 8) {
      this.status = "warn"
      return
    }

    const strength: number = this.testPass(password)
    this.status = statusCodes[strength]
  }

  private testPass(password: string): number {
    const symbolsRegex: RegExp = /[^A-Za-z0-9 ]+/g
    const lettersRegex: RegExp = /[A-Za-z]+/g
    const numbersRegex: RegExp = /[0-9]+/g
    
    let strength: number = 0

    if (symbolsRegex.test(password)) {
      strength+=1
    }
    if (lettersRegex.test(password)) {
      strength+=1
    }
    if (numbersRegex.test(password)) {
      strength+=1
    } 
    return strength
  }
}
