import type { User } from "@clerk/backend";
import { UserResource } from "@clerk/types";

const isAdmin = (user: User | UserResource | null): boolean => {
  /*For real project, we need implement role setting function.
    For example, use user.id to check user's role against database*/

  // But for personal project, just hard code it
  const email = user?.emailAddresses[0].emailAddress;

  console.log(`Current user's email: ${email}`);

  const adminEmails = new Set([
    "armstrong.wang2000@gmail.com",
    "armstrong_wang@hotmail.com",
  ]);

  return !!email && adminEmails.has(email);
};

export { isAdmin };
