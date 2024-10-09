import React from "react"
import "../styles/tailwind.css"
import {
  SignedIn,
  SignedOut,
  ClerkProvider,
  UserButton,
  SignInButton,
} from "@clerk/chrome-extension"
import { useNavigate, MemoryRouter } from "react-router-dom"

const Options: React.FC = () => {
  const navigate = useNavigate()
  console.log()
  return (
    <MemoryRouter>
      <ClerkProvider
        publishableKey={"pk_test_cGxlYXNlZC1qYWd1YXItMjYuY2xlcmsuYWNjb3VudHMuZGV2JA"}
        navigate={(to) => navigate(to)}
      >
        <div className="App">
          <header className="App-header">
            <p>Welcome to Clerk Chrome Extension Starter!</p>
            <a
              className="App-link"
              href="https://clerk.dev/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more about Clerk
            </a>
          </header>
          <main className="App-main">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </main>
        </div>

        <div>Hello</div>
      </ClerkProvider>
    </MemoryRouter>
  )
}

export default Options
