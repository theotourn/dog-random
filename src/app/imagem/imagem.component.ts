import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css'],
})
export class ImagemComponent implements OnInit {
  public foto: any = '';

  constructor(private apiService: APIService) {}

  ngOnInit(): void {
    this.imagemDog();
  }

  imagemDog() {
    this.apiService.imagemDog().subscribe((res: any) => {
      this.foto = res;
      console.log(this.foto);
    });
  }
}
