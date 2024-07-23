import type { User } from "@clerk/backend";

const isAdmin = (user: User | null): boolean => {
  /*For real project, we need implement role setting function.
    For example, use user.id to check user's role against database*/

  // But for personal project, just hard code it
  const email = user?.emailAddresses[0].emailAddress;

  const adminEmails = new Set(["armstrong.wang2000@gmail.com"]);

  return !!email && adminEmails.has(email);
};

export { isAdmin };
