import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const handleGoogleSignIn = () => {};

  return (
    <button onClick={handleGoogleSignIn} className="btn w-full">
      <div className="flex items-center gap-2">
        <FcGoogle size={24} />
        <p>Google</p>
      </div>
    </button>
  );
};

export default GoogleLogin;
