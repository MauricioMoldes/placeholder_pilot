import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-md border border-sky-100 p-8 text-center">
        
        {/* Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Rigshospitalet_logo.svg/960px-Rigshospitalet_logo.svg.png?_=20171103201311"
          alt="Rigshospitalet logo"
          className="h-16 mx-auto mb-6"
        />

        {/* Title */}
        <h1 className="text-2xl font-semibold text-sky-900 mb-2">
          Pilot launching soon
        </h1>

        <p className="text-sky-700 mb-6">
          MDxCore Unit
        </p>

        
      </div>
    </div>
  );
}

