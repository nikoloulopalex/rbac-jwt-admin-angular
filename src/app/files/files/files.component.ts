import { Component, OnInit } from '@angular/core';
import { FilesService } from '../files.service';

@Component({
  selector: 'ngx-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  files = [];
  constructor(private filesService: FilesService) { }

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles() {
    this.filesService.getFiles({}).subscribe(data => {
      console.log(data);
      this.files = data;
    })
  }
}
