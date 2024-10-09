import React from "react"
import { createRoot } from "react-dom/client"
import Options from "./options"

// This file serves as the entry point for the Chrome extension's options page.
// It's responsible for setting up the React environment and rendering the Options component.

const container = document.createElement("div")
document.body.appendChild(container)
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>
)

// Note: This file should be specified as the entry point in your build configuration
// and in the extension's manifest file for the options page.
