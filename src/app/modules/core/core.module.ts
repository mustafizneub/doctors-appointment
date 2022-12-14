import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonService } from './services/common.service';
import { CacheService } from './services/cache.service';
import { TokenInterceptor } from './interceptors/Http.interceptor';
import { HttpErrorInterceptor } from './interceptors/error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from './services/cookie.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
export function initConfigInfo(urlList: CommonService) {
	return () => urlList.getConfigFile();
}

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent
	],
	imports: [
		CommonModule,
		MatToolbarModule,
		MatButtonModule,
		MatDatepickerModule,
		MatDialogModule,
		MatFormFieldModule,
		MatGridListModule,
		MatInputModule,
		MatMenuModule,
		MatProgressSpinnerModule,
		MatSelectModule,
		MatCardModule,
		NgxMaterialTimepickerModule,
		FormsModule,
		ReactiveFormsModule,
		MatNativeDateModule,
		MatListModule
	],
	exports: [
		HeaderComponent,
		MatToolbarModule,
		MatButtonModule,
		MatDatepickerModule,
		MatDialogModule,
		MatFormFieldModule,
		MatGridListModule,
		MatInputModule,
		MatMenuModule,
		MatProgressSpinnerModule,
		MatSelectModule,
		MatCardModule,
		NgxMaterialTimepickerModule,
		FormsModule,
		ReactiveFormsModule,
		MatNativeDateModule,
		MatListModule
	],
	providers: [
		{ provide: APP_INITIALIZER, useFactory: initConfigInfo, deps: [CommonService], multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
		CommonService,
		CacheService,
		CookieService,
		MatDatepickerModule
	]
})
export class CoreModule { }
