import { ComponentProps } from 'react';
import TaskCard from '../components/TaskCard';

type TaskColumnProps = {
  title: string;
  items: ComponentProps<typeof TaskCard>[];
};

export function TaskColumn({ items, title }: TaskColumnProps) {
  return (
    <div className="max-w-[500px] w-full">
      <h1>{title}</h1>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <TaskCard
            key={item.id}
            {...item}
            archived={item.status === 'ARCHIVED'}
          />
        ))}
      </div>
    </div>
  );
}
