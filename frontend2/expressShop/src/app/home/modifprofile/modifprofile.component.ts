import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-modifprofile',
  templateUrl: './modifprofile.component.html',
  styleUrls: ['./modifprofile.component.css']
})
export class ModifprofileComponent implements OnInit {

  profileForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(14)]),
    logo: new FormControl('', Validators.required),
    description: new FormControl(''),
    tags: new FormControl('')
  })

  passwordForm = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', [Validators.required]),
    confirm: new FormControl('', [Validators.required])
  }, this.checkPasswords)

  public phoneMask = {
    guide: false,
    showMask: true,
    keepCharPositions: true,
    mask: ['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  };

  constructor() {}

  ngOnInit() {
  }

  get username() { return this.profileForm.get('username'); }
  get email() { return this.profileForm.get('email'); }
  get phone() { return this.profileForm.get('phone'); }
  get logo() { return this.profileForm.get('logo'); }
  get description() { return this.profileForm.get('description'); }
  get tags() { return this.profileForm.get('tags'); }

  get oldPassword() { return this.passwordForm.get('oldPassword'); }
  get newPassword() { return this.passwordForm.get('newPassword'); }
  get confirm() { return this.passwordForm.get('confirm'); }

  checkPasswords(group: FormGroup) {
    let newPasswordValue = group.get('newPassword').value;
    let confirm = group.get('confirm');
    let confirmMatches = newPasswordValue === confirm.value;

    if (!confirmMatches) {
      confirm.setErrors({notMatching: true});
    }
    
    return null;
  }

  onClickModifyProfile() {
    window.alert('Your profile was modified');
  }

  onClickChangePassword() {
    window.alert('Your password was changed');
  }

}