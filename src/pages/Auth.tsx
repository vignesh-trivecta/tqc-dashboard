import { Link, useLocation } from "react-router-dom";
import ServiceList from "../components/MainSite/ServiceList";

interface IpLabel {
  label: string;
}

const Auth = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col lg:flex-row justify-around items-center p-4 lg:p-0 space-y-6">
      {/* <div className='w-1/2 flex flex-col justify-center items-center gap-4'>
        <p className='font-bold text-2xl'>Welcome to Trivecta Qucik Connect</p>
        <img src='tqc.png' alt='Trivecta Quick Connect' width={150} height={150} />
      </div> */}
      <div className="">
        <ServiceList />
      </div>
      <div className="flex justify-center">
        <form className="border border-1 border-gray-300 p-10 rounded-lg shadow-lg mt-12 w-80">
          <div className="font-bold text-xl mb-4">
            {pathname == "/sign-in" ? (
              <div>
                <p className="text-center">Sign In</p>
                <p className="text-center">to your account</p>
              </div>
            ) : (
              <div>
                <p className="text-center">Sign Up</p>
                <p className="text-center">to create account</p>
              </div>
            )}
          </div>
          <InputWithLabel label={"Email Id"} />
          <InputWithLabel label={"Password"} />
          <div className="flex justify-center items-center mt-4">
            <button className="border p-2 rounded-lg bg-green-500 text-white hover:bg-green-700 w-1/2">
              {pathname == "/sign-in" ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <p className="mt-4">
            {pathname == "/sign-in" ? (
              <>
                <span>Don't have an account? </span>
                <Link to={"/sign-up"} className="underline">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <span>Already have an account? </span>
                <Link to={"/sign-in"} className="underline">
                  Sign In
                </Link>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

const InputWithLabel: React.FC<IpLabel> = ({ label }) => {
  return (
    <div className="flex flex-col gap-1 mt-4">
      <label className="">{label}:</label>
      <input className="border border-gray-300 rounded-lg p-1" />
    </div>
  );
};

export default Auth;
