import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@codewithahsan/ng-cb-ui';
import { Task, TasksFilter } from './task.model';

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
  filter = signal(TasksFilter.All);
  filters = TasksFilter;
  filteredTasks = computed(() => {
    switch (this.filter()) {
      case TasksFilter.All:
        return this.tasks();
      case TasksFilter.Active:
        return this.tasks().filter((taskItem) => {
          return !taskItem.completed;
        });
      case TasksFilter.Complete:
        return this.tasks().filter((taskItem) => {
          return taskItem.completed;
        });
    }
  });

  changeFilter(filter: TasksFilter) {
    this.filter.set(filter);
  }

  addTask(titleInput: HTMLInputElement) {
    if (titleInput.value) {
      const newTask = {
        title: titleInput.value,
        completed: false,
      };
      this.tasks.set([...this.tasks(), newTask]);
    }
    titleInput.value = '';
  }

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
