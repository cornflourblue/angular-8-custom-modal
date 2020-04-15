import { ModalService } from './_modal/modal.service';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { TestPageComponent } from './test-page';
import { ModalModule } from './_modal/modal.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ModalModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        TestPageComponent,
        HomeComponent
    ],
    providers: [ModalService],
    bootstrap: [AppComponent]
})

export class AppModule { }