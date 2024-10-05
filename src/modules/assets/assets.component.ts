import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assets',
  standalone: true,
  imports: [],
  templateUrl: './assets.component.html',
})
export class AssetsComponent {
  constructor(private route: ActivatedRoute) { }


  folder!: string;
  fileUuid!: string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.folder = params['folder'];
      this.fileUuid = params['fileUuid'];
      console.log(this.folder, this.fileUuid);
      this.r2Value();
    });
  }

  r2Value() {

  }
}
