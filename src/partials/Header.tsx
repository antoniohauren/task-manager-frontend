import { useApiLogout } from '../api/hooks/useApiLogout';
import { useUserStore } from '../stores/userStore';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const setUser = useUserStore(({ setUser }) => setUser);
  const { mutate } = useApiLogout();
  const navigate = useNavigate();

  return (
    <div className="h-12 w-full bg-red-500 flex px-4">
      <button
        className="ml-auto"
        onClick={() =>
          mutate(undefined, {
            onSuccess: () => {
              setUser(null);
              navigate('/login');
            },
          })
        }
      >
        sair
      </button>
    </div>
  );
}
