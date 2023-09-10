import { useApiArchivedTasks } from '../api/hooks/useApiArchivedTasks';
import { TaskColumn } from './TaskColumn';

export default function ArchivedTaskList() {
  const { data } = useApiArchivedTasks();

  return (
    <div className="flex gap-2">
      <TaskColumn title="ARCHIVED" items={data || []} />
    </div>
  );
}
