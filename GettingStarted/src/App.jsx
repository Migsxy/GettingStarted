import React, { useState } from "react";
import "./App.css";


// FUNCTIONAL COMPONENT - Welcome Screen
function WelcomeScreen({ title, description, onNext }) {
  return (
    <main className="container">
      <section className="card">
        <div className="emoji">📚</div>

        <h1 className="title">{title}</h1>

        <p className="description">{description}</p>

        <button className="button" onClick={onNext}>
          <span className="buttonText">NEXT →</span>
        </button>
      </section>
    </main>
  );
}


// FUNCTIONAL COMPONENT - Features Screen
function FeaturesScreen({ onNext, onBack }) {
  return (
    <main className="container">
      <section className="card">
        <div className="emoji">✨</div>

        <h1 className="title">Useful Features</h1>

        <p className="description">
          Our app provides simple tools to help you learn, organize,
          and improve your study experience.
        </p>

        <div className="featureBox">
          <p className="feature">📖 Easy to Learn</p>
          <p className="feature">📝 Take Notes</p>
          <p className="feature">🎯 Track Your Progress</p>
        </div>

        <button className="button" onClick={onNext}>
          <span className="buttonText">NEXT →</span>
        </button>

        <button className="backButton" onClick={onBack}>
          <span className="backText">← BACK</span>
        </button>
      </section>
    </main>
  );
}


// CLASS COMPONENT - Get Started Screen
class GetStartedScreen extends React.Component {
  render() {
    const { onStart, onBack } = this.props;

    return (
      <main className="container">
        <section className="card">
          <div className="emoji">🚀</div>

          <h1 className="title">Ready to Start?</h1>

          <p className="description">
            You are all set! Start using the application and
            make your learning experience better.
          </p>

          <button className="startButton" onClick={onStart}>
            <span className="buttonText">GET STARTED</span>
          </button>

          <button className="backButton" onClick={onBack}>
            <span className="backText">← BACK</span>
          </button>
        </section>
      </main>
    );
  }
}


// MAIN APP
export default function App() {

  // HOOK: useState
  const [screen, setScreen] = useState(1);

  // EVENT FUNCTIONS
  const nextScreen = () => {
    setScreen(screen + 1);
  };

  const previousScreen = () => {
    setScreen(screen - 1);
  };

  const startApp = () => {
    setScreen(4);
  };

  // SCREEN 1
  if (screen === 1) {
    return (
      <WelcomeScreen
        title="Welcome!"
        description="Welcome to our learning application. Let's take a quick tour before you get started."
        onNext={nextScreen}
      />
    );
  }

  // SCREEN 2
  if (screen === 2) {
    return (
      <FeaturesScreen
        onNext={nextScreen}
        onBack={previousScreen}
      />
    );
  }

  // SCREEN 3
  if (screen === 3) {
    return (
      <GetStartedScreen
        onStart={startApp}
        onBack={previousScreen}
      />
    );
  }

  // FINAL SCREEN
  return (
    <main className="container">
      <section className="card">
        <div className="emoji">🎉</div>

        <h1 className="title">You're In!</h1>

        <p className="description">
          Welcome to the application. You can now begin
          exploring and learning.
        </p>

        <button
          className="startButton"
          onClick={() => setScreen(1)}
        >
          <span className="buttonText">START AGAIN</span>
        </button>
      </section>
    </main>
  );
}
