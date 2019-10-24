import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services';
import { AuthService } from 'src/app/services';
@Component({
  selector: 'app-modif-profile',
  templateUrl: './modif-profile.component.html',
  styleUrls: ['./modif-profile.component.css']
})
export class ModifProfileComponent implements OnInit {


    username1:string;
    email1:string;
    Telephone1:string;
    description1: string;

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

  constructor(private UserService : UserService, private AuthService : AuthService) {}

  ngOnInit() {
    this.username1 = this.AuthService.currUser.nomutilisateur;
    this.profileForm.controls['username'].setValue(this.username1);

    this.email1 = this.AuthService.currUser.email;
    this.profileForm.controls['email'].setValue(this.email1);

    this.Telephone1 = this.AuthService.currUser.Telephone;
    this.profileForm.controls['phone'].setValue(this.Telephone1);

    this.description1 = this.AuthService.currUser.description;
    this.profileForm.controls['description'].setValue(this.description1);
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
  onClickModifyProfile()
  {
    window.alert('Your profile was modified');
    let id = this.AuthService.currUser.iduser;
    this.UpdateUser(id,this.profileForm.controls.username.value,this.profileForm.controls.email.value,this.profileForm.controls.phone.value,this.profileForm.controls.description.value);

  }
  onClickChangePassword()
  {
    window.alert('Your password was changed');
  }
  UpdateUser(iduser:number,nomutilisateur:string,courriel:string,téléphone:string,description:string)
  {
      this.UserService.UpdateUser(iduser,nomutilisateur,courriel,téléphone,description).subscribe();
      // Copy the user
      let updatedUser = this.AuthService.currUser;

    // Modify the user
    updatedUser.nomutilisateur = nomutilisateur;
    updatedUser.email = courriel;
    updatedUser.Telephone = téléphone;
    updatedUser.description = description;
    // Update the user
   this.AuthService.updateCurrUser(updatedUser);
   this.AuthService.updateSessionStorage();
      console.log(this.AuthService.currUser.nomutilisateur);
      console.log("alo");
  }
  UpdatePassword(iduser:number,NouveauMotdePasse:number)
  {
      this.UserService.UpdatePassword(iduser,NouveauMotdePasse).subscribe();
  }
}
