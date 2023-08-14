import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPostRoutingModule } from './new-post-routing.module';
import { NewPostComponent } from './new-post.component';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';


@NgModule({
  declarations: [
    NewPostComponent,
    
  ],
  imports: [

    CommonModule,
    NewPostRoutingModule,
    FormsModule,
    AngularEditorModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireFunctionsModule,
    AngularFireStorageModule
 
  ],
  providers: []
})
export class NewPostModule { }
