import React from 'react'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Vibe Coding Platform</h1>
        <p className="mt-4 text-gray-600">Your AI-powered development environment</p>

        <div className="mt-10 grid gap-3 justify-center">
          <Link to="/steinteppich" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 font-semibold transition-colors">Steinteppich Seite ansehen</Link>
          <Link to="/test" className="inline-flex items-center justify-center rounded-lg bg-gray-900 hover:bg-gray-800 text-white px-5 py-3 font-semibold transition-colors">Backend/Test</Link>
        </div>
      </div>
    </div>
  )
}
