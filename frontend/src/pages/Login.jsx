import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <main className="auth-page auth-page--login">
      <div className="auth-bg-orb auth-bg-orb--one" />
      <div className="auth-bg-orb auth-bg-orb--two" />
      <div className="auth-grid">
        <section className="auth-brand">
          <p className="auth-kicker">Welcome back</p>
          <h1 className="auth-title">Sign in to your Skillzza account</h1>
          <p className="auth-copy">
            Continue your learning and collaboration journey with a secure, modern workspace.
          </p>
          <ul className="auth-points">
            <li>Track your programs and applications</li>
            <li>Join curated councils and communities</li>
            <li>Unlock personalized growth recommendations</li>
          </ul>
        </section>

        <section className="auth-card-wrap">
          <div className="auth-card">
            <h2 className="auth-card-title">Log In</h2>
            <p className="auth-card-sub">Enter your credentials to continue</p>

            <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="login-email" className="auth-label">Email address</label>
              <input id="login-email" className="auth-input" type="email" placeholder="name@company.com" />

              <label htmlFor="login-password" className="auth-label">Password</label>
              <input id="login-password" className="auth-input" type="password" placeholder="Enter your password" />

              <div className="auth-meta-row">
                <label className="auth-check">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="auth-link">Forgot password?</a>
              </div>

              <button type="submit" className="auth-submit">Log In</button>
            </form>

            <p className="auth-switch">
              New here? <Link to="/signup">Create account</Link>
            </p>
          </div>
        </section>
      </div>

      <style>{`
        .auth-page {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background: radial-gradient(1200px 500px at 20% -5%, rgba(249, 115, 22, 0.2), transparent 60%),
            linear-gradient(135deg, #4f0a11 0%, #7e111e 55%, #9b1c2c 100%);
          display: grid;
          place-items: center;
          padding: 24px;
        }

        .auth-bg-orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(2px);
          opacity: 0.35;
          pointer-events: none;
          animation: authFloat 8s ease-in-out infinite;
        }

        .auth-bg-orb--one {
          width: 260px;
          height: 260px;
          top: 8%;
          left: 6%;
          background: radial-gradient(circle at 30% 30%, rgba(255, 184, 108, 0.95), rgba(255, 184, 108, 0.03));
        }

        .auth-bg-orb--two {
          width: 320px;
          height: 320px;
          right: 8%;
          bottom: 6%;
          background: radial-gradient(circle at 60% 40%, rgba(255, 99, 132, 0.8), rgba(255, 99, 132, 0.03));
          animation-delay: 1.6s;
        }

        .auth-grid {
          position: relative;
          z-index: 2;
          width: min(1180px, 100%);
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 28px;
          align-items: stretch;
        }

        .auth-brand {
          color: #fff;
          padding: 52px 40px;
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.03));
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(5px);
          box-shadow: 0 25px 60px rgba(15, 23, 42, 0.28);
          animation: authRise 0.7s ease both;
        }

        .auth-kicker {
          margin: 0 0 14px;
          color: #ffd39f;
          text-transform: uppercase;
          letter-spacing: 1.3px;
          font-weight: 700;
          font-size: 12px;
        }

        .auth-title {
          margin: 0;
          font-size: clamp(32px, 4.2vw, 52px);
          line-height: 1.08;
          letter-spacing: -0.02em;
          font-weight: 800;
        }

        .auth-copy {
          margin: 18px 0 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 17px;
          line-height: 1.6;
          max-width: 560px;
        }

        .auth-points {
          margin: 24px 0 0;
          padding-left: 22px;
          display: grid;
          gap: 10px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 15px;
          line-height: 1.5;
        }

        .auth-card-wrap {
          display: grid;
          align-items: center;
          animation: authRise 0.7s 0.08s ease both;
        }

        .auth-card {
          border-radius: 24px;
          background: linear-gradient(165deg, rgba(255, 255, 255, 0.97), rgba(255, 255, 255, 0.92));
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 30px 60px rgba(15, 23, 42, 0.25);
          padding: 34px 30px 28px;
          position: relative;
          overflow: hidden;
        }

        .auth-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, rgba(249, 115, 22, 0.22), transparent 44%);
          pointer-events: none;
        }

        .auth-card-title {
          position: relative;
          margin: 0;
          color: #0f172a;
          font-size: 34px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .auth-card-sub {
          position: relative;
          margin: 8px 0 0;
          color: #475569;
          font-size: 15px;
        }

        .auth-form {
          position: relative;
          margin-top: 24px;
          display: grid;
          gap: 10px;
        }

        .auth-label {
          margin-top: 8px;
          color: #334155;
          font-size: 13px;
          font-weight: 700;
        }

        .auth-input {
          height: 48px;
          border: 1px solid #dbe2ea;
          border-radius: 12px;
          padding: 0 14px;
          color: #0f172a;
          font-size: 15px;
          background: #fff;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }

        .auth-input:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.16);
          transform: translateY(-1px);
        }

        .auth-meta-row {
          margin-top: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .auth-check {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #475569;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
        }

        .auth-check input {
          width: 16px;
          height: 16px;
          accent-color: #dc2626;
        }

        .auth-link {
          color: #b91c1c;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }

        .auth-link:hover {
          text-decoration: underline;
        }

        .auth-submit {
          margin-top: 4px;
          height: 50px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #f97316, #dc2626);
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.2px;
          cursor: pointer;
          box-shadow: 0 12px 24px rgba(220, 38, 38, 0.24);
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
        }

        .auth-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 30px rgba(220, 38, 38, 0.3);
          filter: brightness(1.03);
        }

        .auth-switch {
          margin: 18px 0 0;
          color: #475569;
          font-size: 14px;
          font-weight: 600;
          text-align: center;
        }

        .auth-switch a {
          color: #b91c1c;
          font-weight: 700;
          text-decoration: none;
        }

        .auth-switch a:hover {
          text-decoration: underline;
        }

        @keyframes authRise {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes authFloat {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(16px, -12px); }
        }

        @media (max-width: 980px) {
          .auth-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .auth-brand {
            padding: 26px 22px;
          }
        }

        @media (max-width: 640px) {
          .auth-page {
            padding: 12px;
          }

          .auth-title {
            font-size: 32px;
          }

          .auth-card {
            border-radius: 18px;
            padding: 26px 18px 20px;
          }

          .auth-card-title {
            font-size: 28px;
          }
        }
      `}</style>
    </main>
  )
}

export default Login
