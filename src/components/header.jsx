import { Link } from "react-router-dom";
import { Button } from "./ui/button";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/clerk-react'


const Header = () => {
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
        <img src="public/logo.png" className="h-20"/>
        </Link>

        <Button variant="outline">Login</Button>
{/* 
        <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn> */}
      </nav>
    </>
  )
}

export default Header;