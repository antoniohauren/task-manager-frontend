import { UpdateTaskStatusDto } from '../api/dto/update-task-status.dto';
import { useApiArchiveTask } from '../api/hooks/useApiArchiveTask';
import { useApiUpdateTaskStatus } from '../api/hooks/useApiUpdateTaskStatus';
import Button from './Button';

type TaskCardProps = {
  title: string;
  description: string;
  status: string;
  id: string;
};

export default function TaskCard({
  id,
  description,
  status,
  title,
}: TaskCardProps) {
  const { mutate: changeStatus } = useApiUpdateTaskStatus(id);
  const { mutate: archiveTask } = useApiArchiveTask(id);

  function handleUpdateStatus(status: UpdateTaskStatusDto['status']) {
    changeStatus({
      status,
    });
  }

  function handleArchiveTask() {
    archiveTask();
  }

  return (
    <div className="border-2 w-full">
      <div className="flex gap-2">
        <h1 className="text-lg font-semibold bg-gray-100 p-2 w-full">
          {title}
        </h1>
        <p onClick={() => handleArchiveTask()}>ARCHIVE</p>
      </div>
      <p className="p-2">{description}</p>

      {status === 'TODO' && (
        <Button onClick={() => handleUpdateStatus('DOING')}>DOING</Button>
      )}

      {status === 'DOING' && (
        <div className="flex">
          <Button onClick={() => handleUpdateStatus('TODO')}>TODO</Button>
          <Button onClick={() => handleUpdateStatus('DONE')}>DONE</Button>
        </div>
      )}
    </div>
  );
}
