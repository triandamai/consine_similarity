"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("welcome");

Route.group(() => {
  Route.get("/", "AdminViewController.index");
})
  .prefix("admin")
  .middleware("auth");
Route.group(() => {
  Route.get("/", "StudentViewController.index");
})
  .prefix("student")
  .middleware("auth");
Route.group(() => {
  Route.get("/", "TeacherViewController.index");
})
  .prefix("teacher")
  .middleware("auth");

Route.group(() => {
  Route.get("/", async ({ request, response }) => {
    return response.redirect("auth-signin");
  });
  Route.get("auth-signin", "AuthController.login_view");
  Route.get("auth-signup", "AuthController.register_view");
  Route.post("auth-signinproc", "AuthController.login_event");
  Route.post("auth-signupproc", "AuthController.register_event");
}).prefix("v1");
