import React from "react";
import { RouteObject } from "react-router-dom";

const AnimatedBackground: React.FC = () => (
    <div className="animated-bg">
        <style>{`
            .animated-bg {
                position: fixed;
                top: 0; left: 0; right: 0; bottom: 0;
                z-index: -1;
                overflow: hidden;
                background: linear-gradient(120deg, #1e3c72, #2a5298, #6dd5ed, #2193b0);
                background-size: 400% 400%;
                animation: gradientMove 15s ease infinite;
            }
            @keyframes gradientMove {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .landing-content {
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                color: #fff;
                text-shadow: 0 2px 8px rgba(0,0,0,0.2);
            }
            .landing-title {
                font-size: 3rem;
                font-weight: bold;
                margin-bottom: 1rem;
            }
            .landing-subtitle {
                font-size: 1.5rem;
                margin-bottom: 2rem;
            }
            .landing-btn {
                padding: 0.75rem 2rem;
                font-size: 1.1rem;
                border: none;
                border-radius: 25px;
                background: #fff;
                color: #2a5298;
                cursor: pointer;
                transition: background 0.3s, color 0.3s;
                font-weight: 600;
            }
            .landing-btn:hover {
                background: #2a5298;
                color: #fff;
            }
        `}</style>
    </div>
);

const LandingPage: React.FC = () => (
    <>
        <AnimatedBackground />
        <div className="landing-content">
            <h1 className="landing-title">Welcome to DigiFalx</h1>
            <p className="landing-subtitle">
                Your digital transformation partner. Empowering businesses with innovative solutions.
            </p>
            <button className="landing-btn">Get Started</button>
        </div>
    </>
);

export default LandingPage;
export const landingPageRoute: RouteObject = {
    path: "/",
    element: <LandingPage />,
};