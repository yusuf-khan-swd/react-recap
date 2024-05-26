import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { logout, user } = useAuth();

  const { displayName, email } = user;

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <div className="hero bg-base-200 p-8">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={email}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                value={displayName}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                onClick={handleLogout}
                className="btn btn-error text-white"
              >
                Logout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
