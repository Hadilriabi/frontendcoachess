import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNeedsComponent } from './components/add-needs/add-needs.component';
import { AddResponse1Component } from './components/add-response1/add-response1.component';
import { AddResponse2Component } from './components/add-response2/add-response2.component';
import { AddResponse3Component } from './components/add-response3/add-response3.component';
import { AddResponse4Component } from './components/add-response4/add-response4.component';
import { AddResponse5Component } from './components/add-response5/add-response5.component';
import { ChatComponent } from './components/chat/chat.component';
import { HomeComponent } from './components/home/home.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { AddCommentToPostComponent } from './components/add-comment-to-post/add-comment-to-post.component';
import { PostCommentsComponentComponent } from './components/post-comments-component/post-comments-component.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ListNeedsComponent } from './components/list-needs/list-needs.component';
import { AdminComponent } from './components/admin/admin.component';
import { RetrieveFormsComponent } from './components/retrieve-forms/retrieve-forms.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AllAppointmentsComponent } from './components/all-appointments/all-appointments.component';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';

const routes: Routes = [
  { path: 'addNeeds', component: AddNeedsComponent },
  { path: 'addresponse1', component: AddResponse1Component },
  { path: 'addresponse2', component: AddResponse2Component },
  { path: 'addresponse3', component: AddResponse3Component },
  { path: 'addresponse4', component: AddResponse4Component },

  { path: 'addresponse5', component: AddResponse5Component },
  { path: 'chat', component: ChatComponent },
  { path: 'home', component: HomeComponent },
  { path: 'post', component: AddPostComponent },
  { path: 'Allposts', component: AllPostsComponent },
  { path: 'AllCmnts', component: AllCommentsComponent },
  { path: 'add-comment-to-post/:postId', component: AddCommentToPostComponent },


  { path: 'commentsdupost/:postId', component: PostCommentsComponentComponent }, // Nouvelle route pour les commentaires du post


  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } ,
  { path: 'needs', component: ListNeedsComponent },
  { path: 'forms', component: RetrieveFormsComponent },
  { path: 'app', component: AppointmentListComponent },
  { path: 'allapp', component: AllAppointmentsComponent },
  { path: 'addapp', component: AddAppointmentComponent },

  




  { path: 'admin', component: AdminComponent },













  









  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
