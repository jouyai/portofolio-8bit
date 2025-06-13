import React from 'react';

export default function XPBar({ skill, level }) {
  return (
    <div className="mb-4">
      <div className="text-green-300 font-pixel text-sm mb-1">{skill}</div>
      <div className="w-full bg-green-900 border border-green-400 h-4 relative overflow-hidden">
        <div
          className="bg-green-300 h-full transition-all duration-700"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}
