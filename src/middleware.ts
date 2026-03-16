import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const host = context.request.headers.get("host") || "";
  
  if (host.includes("joannaperry.com")) {
    return Response.redirect("https://loanladyclub.com/joanna-perry", 301);
  }
  
  return next();
});
