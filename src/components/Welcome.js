import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Sohbet Sitesine Hoşgeldiniz</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={300} height={150} />
      <p> Arkadaşlarınız ile sohbet etmek için Google ile oturum açın..</p>
      <button  className="sign-in">
        <img
          
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="Google İle Giriş Yapın"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
