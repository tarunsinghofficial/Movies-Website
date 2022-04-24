import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory()

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/")
    }, 3000);
    return () => clearTimeout(timer)

  }, [history])
  return (
    <div className="center">
      <h2><code>404 Page Not Found</code></h2>
      <h3>Redirecting...</h3>
    </div>
  );
}

export default NotFound;