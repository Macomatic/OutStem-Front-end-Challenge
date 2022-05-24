import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-goal456',
  templateUrl: './goal456.component.html',
  styleUrls: ['./goal456.component.css']
})
export class Goal456Component implements OnInit {
  validity = '';
  apiCalled = false;
  error = false;
  pasted = false;
  pastedValue? = '';

  individualDigitForm = new FormGroup({
    firstDigit: new FormControl('', [
      Validators.required,
      Validators.maxLength(1),
      Validators.minLength(1),
    ]),
    secondDigit: new FormControl('', [
      Validators.required,
      Validators.maxLength(1),
      Validators.minLength(1),
    ]),
    thirdDigit: new FormControl('', [
      Validators.required,
      Validators.maxLength(1),
      Validators.minLength(1),
    ]),
    fourthDigit: new FormControl('', [
      Validators.required,
      Validators.maxLength(1),
      Validators.minLength(1),
    ]),
    fifthDigit: new FormControl('', [
      Validators.required,
      Validators.maxLength(1),
      Validators.minLength(1),
    ]),
    sixthDigit: new FormControl('', [
      Validators.required,
      Validators.maxLength(1),
      Validators.minLength(1),
    ]),
  })

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  // Function to restrict non-numerical inputs using regex, event, and keypress
  numbersOnlyInput(event: any) {
    const regex = /[0-9]/;
    let keyboardInput = event.key;
    //console.log(keyboardInput);
    if (!regex.test(keyboardInput)) {
      event.preventDefault();
    }

  }

  // Goal 5 and 6: Pasting and automatically running the API call
  onPaste(event: ClipboardEvent) {
    this.pasted = true;
    let clipboard = event.clipboardData;
    this.pastedValue = clipboard?.getData('text');
    let firstDigit = this.pastedValue?.substring(0,1);
    let secondDigit = this.pastedValue?.substring(1,2);
    let thirdDigit = this.pastedValue?.substring(2,3);
    let fourthDigit = this.pastedValue?.substring(3,4);
    let fifthDigit = this.pastedValue?.substring(4,5);
    let sixthDigit = this.pastedValue?.substring(5,6);
    this.individualDigitForm.controls['firstDigit'].setValue(firstDigit);
    this.individualDigitForm.controls['secondDigit'].setValue(secondDigit);
    this.individualDigitForm.controls['thirdDigit'].setValue(thirdDigit);
    this.individualDigitForm.controls['fourthDigit'].setValue(fourthDigit);
    this.individualDigitForm.controls['fifthDigit'].setValue(fifthDigit);
    this.individualDigitForm.controls['sixthDigit'].setValue(sixthDigit);


    
    this.onSubmit();
  }

  onSubmit() {
    let mfaToken = '';
    mfaToken = mfaToken.concat(this.individualDigitForm.value.firstDigit,this.individualDigitForm.value.secondDigit,this.individualDigitForm.value.thirdDigit,this.individualDigitForm.value.fourthDigit,this.individualDigitForm.value.fifthDigit,this.individualDigitForm.value.sixthDigit);
    console.log(mfaToken);

    // if statement for Goal 3 pasting; since pasting doesnt get the value after the paste, I have this to ensure it does
    // if (this.pasted) {
    //   mfaToken = this.pastedValue;
    // }

    this.http.post<any>('/validate', {code: mfaToken}).subscribe(data => {
      this.validity = data.valid;
      if (this.validity) {
        this.validity = 'Correct MFA Token';
      }
      else {
        this.validity = 'Incorrect MFA Token';
      }
      this.apiCalled = true;
  },
  // calling 000000 as MFA token from API didn't give me an error, but this is the handling of errors for goal 2
  (error) => {
    error = true;
    console.error('500 Error');
  })
  }

}
