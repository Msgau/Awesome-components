import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatListModule, // liste des commentaires
    MatButtonModule, // boutons
    MatIconModule, // afficher les incones
    MatFormFieldModule, //
    MatInputModule // peremettent de profiter du système de formulaire matériel pour que l'utilisateur puisse laisser son commentaire.
  ]
})
export class MaterialModule {}