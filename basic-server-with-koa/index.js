const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get("/", defaulPage)
      .get("/about-us", aboutPage)
      .get("/contact", contactPage)

      
     
let writeMessage = (pageName) => {
    return `Welcome to ${pageName} page`
}

function defaulPage(ctx){
    ctx.body = writeMessage("Home")
}
function aboutPage(ctx){
    ctx.body = writeMessage("About us")
}
function contactPage(ctx){
    ctx.body = writeMessage("Contact")
}

app.use(router.routes())

const port = 3000

  app.listen(port,() => {
      console.log(`Server is started at port: ${port}`)
  })