import Header from '../partials/Header';
import TaskForm from '../partials/TaskForm';

export default function NewTaskPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">New Task</h1>

        <TaskForm />
      </div>
    </div>
  );
}
