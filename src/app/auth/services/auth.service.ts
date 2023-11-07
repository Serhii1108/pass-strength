import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  public testPass(password: string): number {
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
