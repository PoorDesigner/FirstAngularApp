import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { HighlightDirective } from './highlight.directive';
import { FormGroupDemoComponent } from './form-group-demo/form-group-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    HighlightDirective,
    FormGroupDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
