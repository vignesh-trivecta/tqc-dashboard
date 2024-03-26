import { useEffect } from 'react';
// import { FaFacebook } from "react-icons/fa";
import { Facebook } from 'lucide-react';

declare const window: any;

const FBbutton = () => {
  useEffect(() => {
    // Load the Facebook SDK asynchronously
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '277762014973347',
        cookie: true,
        xfbml: true,
        version: 'v19.0',
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode?.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  const launchWhatsAppSignup = () => {
    window.FB.login(
      function (response: { authResponse: { accessToken: any; }; }) {
        if (response.authResponse) {
          const accessToken = response.authResponse.accessToken;
          console.log(accessToken);
          //Use this token to call the debug_token API and get the shared WABA's ID
          window.FB.api(
            '/me',
            'GET',
            {"fields":"id,name"},
            function(response: any) {
              console.log(response);
            }
          );
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      },
      {
        config_id: import.meta.env.VITE_PUBLIC_CONFIG_ID,
        response_type: 'code',
        override_default_response_type: true,
        extras: {
          setup: {
            // Prefilled data can go here
          },
        },
      }
    );
  };

  return (
    <div 
      className='flex flex-col items-center space-y-2' 
    >
      <p className='text-base font-bold text-white'>Sign Up with Facebook</p>
      <button 
        type='button'
        onClick={launchWhatsAppSignup} 
        className='mr-2 hover:scale-110 transform transition duration-500 cursor-pointer'
      >
        {/* <FaFacebook className='h-12 w-12 bg-white text-blue-800 rounded-full' /> */}
        <div className='rounded-full p-2 bg-white'>
          <Facebook color='blue' width={40} height={40} />
        </div>
      </button>
    </div>
  );
};

export default FBbutton;
