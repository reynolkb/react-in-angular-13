import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomReactComponentWrapperComponent } from 'src/components/custom-react-component/CustomReactComponentWrapper';

@NgModule({
  declarations: [AppComponent, CustomReactComponentWrapperComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
