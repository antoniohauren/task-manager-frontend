import { useApiSignOut } from '../api/hooks/useApiSignOut';
import { useUserStore } from '../stores/userStore';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const setUser = useUserStore(({ setUser }) => setUser);
  const { mutate } = useApiSignOut();
  const navigate = useNavigate();

  return (
    <div className="h-12 w-full bg-gray-400 flex px-4">
      <div className="w-full max-w-[1200px] mx-auto flex px-2">
        <div className="flex gap-2 items-center">
          <Link to="/">Tasks</Link>
          <Link to="/archived-tasks">Archived</Link>
          <Link to="/new-task">New</Link>
        </div>

        <button
          className="ml-auto"
          onClick={() =>
            mutate(undefined, {
              onSuccess: () => {
                setUser(null);
                navigate('/sign-in');
              },
            })
          }
        >
          sair
        </button>
      </div>
    </div>
  );
}
