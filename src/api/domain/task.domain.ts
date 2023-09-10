type TaskStatus = 'TODO' | 'DOING' | 'DONE' | 'ARCHIVED';

export type TaskDomain = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
};

export type TaskListDomain = Record<TaskStatus, TaskDomain[]>;
