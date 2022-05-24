import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-goal123',
  templateUrl: './goal123.component.html',
  styleUrls: ['./goal123.component.css']
})
export class Goal123Component implements OnInit {
  validity = '';
  apiCalled = false;
  error = false;
  pasted = false;
  pastedValue? = '';
  hidePassword = false;

  inputForm = new FormGroup({
    inputValue: new FormControl('', [
      Validators.required,
      Validators.maxLength(6),
      Validators.minLength(6),
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

  // Goal 3: Pasting and automatically running the API call
  onPaste(event: ClipboardEvent) {
    this.pasted = true;
    let clipboard = event.clipboardData;
    this.pastedValue = clipboard?.getData('text');

    
    this.onSubmit();
  }

  isChecked(event: any) {
    if (event.target.checked) {
      this.hidePassword = true;
      console.log("Checked");
    }
    else {
      this.hidePassword = false;
      console.log("Unchecked");
    }
  }

  onSubmit() {
    //console.log(this.inputForm.value.inputValue);
    let mfaToken = this.inputForm.value.inputValue;

    // if statement for Goal 3 pasting; since pasting doesnt get the value after the paste, I have this to ensure it does
    if (this.pasted) {
      mfaToken = this.pastedValue;
    }

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
