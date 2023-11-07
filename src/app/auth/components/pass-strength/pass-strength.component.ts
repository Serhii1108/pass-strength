import { Component, Input } from '@angular/core';
import { Status, passStrengthAmount } from 'src/app/shared/constance';

@Component({
  selector: 'app-pass-strength',
  templateUrl: './pass-strength.component.html',
  styleUrls: ['./pass-strength.component.scss']
})
export class PassStrengthComponent {
  @Input() status: Status = "clear";

  public strengthAmount: number[] = new Array(passStrengthAmount);
}
