"use client";

import React from "react";

export default function DemoBtn() {
  return (
    <div
      className="w-full flex flex-col items-center justify-center py-10"
      style={{ gap: 23 }}
    >
      {/* Tagline */}
      <div
        style={{
          width: 786,
          height: 42,
          fontFamily: 'Segoe UI',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: 32,
          lineHeight: '42px',
          textAlign: 'center',
          color: '#141A46',
        }}
      >
        Let Your Furnace Think. Let Your Factory Breathe.
      </div>
      {/* Description */}
      <div
        style={{
          width: 763,
          height: 21,
          fontFamily: 'Segoe UI',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: 16,
          lineHeight: '21px',
          textAlign: 'center',
          color: '#737373',
        }}
      >
        Ignis AI turns heat into thought, and thought into action. It is not an upgrade — it is a transformation.
      </div>
      {/* Call to Action Button */}
      <button
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          gap: 10,
          width: 179,
          height: 44,
          border: '1px solid rgba(20, 26, 70, 0.38)',
          borderRadius: 22,
          background: 'white',
          color: '#141A46',
          fontFamily: 'Segoe UI',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: 18,
          lineHeight: '24px',
          cursor: 'pointer',
          marginTop: 0,
        }}
      >
        Book a Demo
      </button>
    </div>
  );
}
