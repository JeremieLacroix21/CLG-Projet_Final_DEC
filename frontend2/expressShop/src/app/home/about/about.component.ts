import { Component, OnInit} from '@angular/core';
import { AboutService} from '../../services//about.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class Aboutcomponent implements OnInit {

  form = new FormGroup({
    Nom: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    message: new FormControl ('', Validators.required),
    })

    get Nom() { return this.form.get('Nom'); }
    get email() { return this.form.get('email'); }
    get message() { return this.form.get('message'); }

  constructor(private AboutService: AboutService,  private loader: LoaderService) { }

  ngOnInit() {
  }

  onSubmit()
  {
    this.loader.show("Envoi de votre message...")
        this.AboutService.SendMessageToAdmin(this.form.controls.Nom.value, this.form.controls.email.value, 
          this.form.controls.message.value).subscribe( res =>{
            this.loader.hide();
          });
  }
}