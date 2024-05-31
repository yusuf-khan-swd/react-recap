import { useLoaderData } from "react-router-dom";

const EditProfile = () => {
  const userInfo = useLoaderData();
  console.log(userInfo);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mb-4">
        Update Profile Information
      </h1>
      <div className="hero bg-base-200 p-8">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                value={userInfo?.name}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={userInfo?.email}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent text-white">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
