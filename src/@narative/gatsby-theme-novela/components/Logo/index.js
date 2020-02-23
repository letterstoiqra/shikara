import React from "react";
/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo({ fill }) {
  return (
    <>
      <h1 style={{ fontSize: "4rem", color: fill }}>شکارا</h1>
    </>
  );
}
