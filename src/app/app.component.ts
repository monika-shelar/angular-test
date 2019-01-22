import { DataSource } from '@angular/cdk/collections';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppComponentService } from './app.component.service';

export interface TagStoryModel {
  title: string;
  url: number;
  created_at: number;
  author: string;
}

@Component({
  selector: 'app-data-modal',
  templateUrl: './data-modal/data-modal.html',
  styleUrls: ['./data-modal/data-modal.css'],
})
export class PostDataDialogComponent {
  public data: any;
  constructor(
    public dialogRef: MatDialogRef<PostDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public info: any) {
    this.data = info;
  }
  close(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['title', 'url', 'created_at', 'author'];
  public storyDataSource = [];

  constructor(public storyModel: MatDialog, public appService: AppComponentService) { }

  ngOnInit() {
    this.getPosts();
    setInterval(() => {
      this.getPosts();
    }, 10000
    );
  }

  getPosts() {
    this.appService.getPosts('story').subscribe(
      (response) => {
        this.storyDataSource = [...response.hits];
      },
      (error) => {
        console.log(JSON.stringify(error));
      }
    );
  }

  openDialog(data): void {
    const dialogRef = this.storyModel.open(PostDataDialogComponent, {
      width: '50%',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => { });
  }
}
