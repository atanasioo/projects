import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from'@angular/fire/compat'
import {AngularFireAuthModule} from '@angular/fire/compat/auth'
import { environment } from 'src/environments/environment.development';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { authGuard } from './services/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseconfig),
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule, 
    
  ],
  providers: [authGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
