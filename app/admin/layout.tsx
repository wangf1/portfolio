import { isAdmin } from "@/frontend/lib/auth/authorization";
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
    <>
      <header className="flex justify-end mx-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      {children}
    </>
  );
}
