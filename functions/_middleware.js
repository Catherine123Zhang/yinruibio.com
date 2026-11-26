// 301 www → apex (canonical host is yinruibio.com)
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === 'www.yinruibio.com') {
    url.hostname = 'yinruibio.com';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
