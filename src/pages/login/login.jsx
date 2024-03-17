import React from 'react';
import './login.css'

const Login = () => {
    return (
        <html lang='en'>
          <head>
            <meta charSet='UTF-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <title>Document</title>
            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
            <link rel='stylesheet' href='index.css' />
          </head>
          <body>
            <section>
              <div className="form-box">
                <div className="form-value">
                  <form>
                    <h2>Login</h2>
                    <div className="inputbox">
                      <ion-icon name="mail-outline"></ion-icon>
                      <input type="email" required />
                      <label>Email</label>
                    </div>
                    <div className="inputbox">
                      <ion-icon name="lock-closed-outline"></ion-icon>
                      <input type="password" required />
                      <label>Password</label>
                    </div>
                    <div className="forget">
                      <label><input type="checkbox" />Remember Me</label>
                      <a href="#">Forgot Password</a>
                    </div>
                    <button>Log In</button>
                    <div className="register">
                      <p>Don't have an account? <a href="#">Sign Up</a></p>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </body>
        </html>
      );
}

export default Login;
