import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostItemComponent } from './post-item/post-item.component';
import { HistoryComponent } from './history/history.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DirectoryComponent } from './directory/directory/directory.component';
import { BookmarksComponent } from './bookmarks/bookmarks/bookmarks.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreatePostComponent } from './create-post/create-post.component';
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostItemComponent,
    HistoryComponent,
    NavbarComponent,
    DirectoryComponent,
    BookmarksComponent,
    CreatePostComponent,
    
  ],
  imports: [
    BrowserModule,
    [ FlexLayoutModule ],
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
