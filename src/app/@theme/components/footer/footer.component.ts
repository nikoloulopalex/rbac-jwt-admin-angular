import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="https://github.com/nikoloulopalex" target="_blank">Nikoloulopalex</a></b> 2021</span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github" href="https://github.com/nikoloulopalex"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin" href="https://www.linkedin.com/in/alexandros-nikoloulopoulos-721809208/"></a>
    </div>
  `,
})
export class FooterComponent {
}
