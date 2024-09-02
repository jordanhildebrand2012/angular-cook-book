import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@codewithahsan/ng-cb-ui';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HeaderComponent, CommonModule, RouterModule, HeaderComponent],
})
export class AppComponent {
  tasks = signal<Task[]>([
    { title: 'Buy milk', completed: false },
    { title: 'Read a book', completed: true },
  ]);

  finishedTasksCout = computed(() => {
    return this.tasks().filter((task) => task.completed).length;
  });

  toggleTask(task: Task) {
    const updatedTasks = this.tasks().map((taskItem) =>
      taskItem.title === task.title
        ? { ...taskItem, completed: !taskItem.completed }
        : taskItem
    );
    this.tasks.set(updatedTasks);
  }
}
