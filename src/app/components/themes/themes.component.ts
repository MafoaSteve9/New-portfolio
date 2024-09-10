import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.css'
})
export class ThemesComponent implements OnInit {
 buttonText: string = "Thème sombre";

 ngOnInit(): void {
     if (localStorage.getItem('theme') === 'sombre') {
      this.enableDarkMode();
     }
 }

 toggleTheme() {
  if (document.body.classList.contains('dark')) {
    this.disableDarkMode();
  } else {
    this.enableDarkMode();
  }
}

 private enableDarkMode() {
  document.body.classList.add('dark');
  this.buttonText = 'Thème clair';
  localStorage.setItem('theme', 'sombre');
}

private disableDarkMode() {
  document.body.classList.remove('dark');
  this.buttonText = 'Thème sombre';
  localStorage.setItem('theme', 'clair');
}

}
