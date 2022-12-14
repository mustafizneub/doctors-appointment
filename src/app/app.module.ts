import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { CommonPipe } from './modules/shared/common.pipe';
import { CommonDirective } from './modules/shared/directives/common.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './modules/shared/components/not-found/not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		CommonPipe,
		CommonDirective,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		CoreModule,
		BrowserAnimationsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
