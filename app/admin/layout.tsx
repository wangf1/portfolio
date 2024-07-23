import "@/css/tailwind.css";
import { isAdmin } from "@/lib/auth/authorization";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();
  if (!isAdmin(user)) {
    return (
      <div className="text-red-500">Need Admin role to view this page.</div>
    );
  }

  return (
    <div>
      <div>
        <header className="text-red-500">
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
