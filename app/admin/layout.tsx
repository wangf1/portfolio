import "@/css/tailwind.css";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <header>
          There should be a 'User' button, but it's missing. I haven’t yet
          identified the root cause.
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
      </div>
      {children}
    </div>
  );
}
