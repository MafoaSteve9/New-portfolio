import { Component } from '@angular/core';
import { ThemesComponent } from './components/themes/themes.component';
import { ContactComponent } from "./components/contact/contact.component";
import { AboutComponent } from "./components/about/about.component";
import { ProjetComponent } from "./components/projet/projet.component";
import { WorkComponent } from "./components/work/work.component";
import { CertificatComponent } from "./components/certificat/certificat.component";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactComponent, AboutComponent, ProjetComponent, WorkComponent, CertificatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-portfolio';
}
