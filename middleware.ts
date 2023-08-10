// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({});

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };


import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // You can customize the options here if needed.
  // For now, we're leaving it empty.
});

export const config = {
  // This matcher will match the cart page and require authentication for it.
  matcher: ["/cart", "/(api|trpc)(.*)"],
};
