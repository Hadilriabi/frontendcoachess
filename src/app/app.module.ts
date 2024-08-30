import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNeedsComponent } from './components/add-needs/add-needs.component';
import { AddResponse1Component } from './components/add-response1/add-response1.component';
import { AddResponse2Component } from './components/add-response2/add-response2.component';
import { AddResponse3Component } from './components/add-response3/add-response3.component';
import { AddResponse4Component } from './components/add-response4/add-response4.component';
import { AddResponse5Component } from './components/add-response5/add-response5.component';
import { ChatComponent } from './components/chat/chat.component';
import { HomeComponent } from './components/home/home.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import * as moment from 'moment';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { AddCommentToPostComponent } from './components/add-comment-to-post/add-comment-to-post.component';
import { PostCommentsComponentComponent } from './components/post-comments-component/post-comments-component.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdminComponent } from './components/admin/admin.component';
import { ListNeedsComponent } from './components/list-needs/list-needs.component';
import { RetrieveFormsComponent } from './components/retrieve-forms/retrieve-forms.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AllAppointmentsComponent } from './components/all-appointments/all-appointments.component';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    AddNeedsComponent,
    AddResponse1Component,
    AddResponse2Component,
    AddResponse3Component,
    AddResponse4Component,
    AddResponse5Component,
    ChatComponent,
    HomeComponent,
    AddPostComponent,
    AllPostsComponent,
    AllCommentsComponent,
    AddCommentToPostComponent,
    PostCommentsComponentComponent,
    LoginComponent,
    SignUpComponent,
    AdminComponent,
    ListNeedsComponent,
    RetrieveFormsComponent,
    AppointmentListComponent,
    AllAppointmentsComponent,
    AddAppointmentComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FullCalendarModule,
    


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
