import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { PagesComponent } from './pages/pages.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './shared/menu/menu.component';
import { AuthlinkComponent } from './shared/authlink/authlink.component';
import { SocialComponent } from './shared/social/social.component';
import { PhoneComponent } from './shared/phone/phone.component';
import { EmailComponent } from './shared/email/email.component';
import { ButtonComponent } from './shared/button/button.component';
import { TestComponent } from './test/test.component';
import { RatingComponent } from './shared/rating/rating.component';
import { CardComponent } from './shared/card/card.component';
import { CourseFooterComponent } from './shared/card/course-footer/course-footer.component';
import { BlogFooterComponent } from './shared/card/blog-footer/blog-footer.component';
import { HeroComponent } from './home/hero/hero.component';
import { CoursesComponent } from './home/courses/courses.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogsComponent } from './home/blogs/blogs.component';
import { HeadingComponent } from './shared/heading/heading.component';
import { HowWorksComponent } from './home/how-works/how-works.component';
import { SliderComponent } from './shared/slider/slider.component';
import { JointusComponent } from './home/jointus/jointus.component';
import { AppstoreComponent } from './home/appstore/appstore.component';
import { FeedbacksComponent } from './home/feedbacks/feedbacks.component';
import { FeedbacksCardComponent } from './shared/feedbacks-card/feedbacks-card.component';
import { ClientsComponent } from './home/clients/clients.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SubscribeFormComponent } from './shared/subscribe-form/subscribe-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCourseComponent,
    PagesComponent,
    BlogComponent,
    ContactComponent,
    MenuComponent,
    AuthlinkComponent,
    SocialComponent,
    PhoneComponent,
    EmailComponent,
    ButtonComponent,
    TestComponent,
    RatingComponent,
    CardComponent,
    CourseFooterComponent,
    BlogFooterComponent,
    HeroComponent,
    CoursesComponent,
    BlogsComponent,
    HeadingComponent,
    HowWorksComponent,
    SliderComponent,
    JointusComponent,
    AppstoreComponent,
    FeedbacksComponent,
    FeedbacksCardComponent,
    ClientsComponent,
    FooterComponent,
    SubscribeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
