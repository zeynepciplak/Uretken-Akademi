import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";

const Welcome = () => {
  const googleSignIn = () => {
  };

  return (
    <main className="welcome">
      <h2>Sohbet Sitesine Hoşgeldiniz</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Arkadaşlarınız ile sohbet etmek için Google ile oturum açın.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;
