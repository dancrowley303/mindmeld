EmailVerificationTokenController = RouteController.extend({
  verifyToken: function() {
    console.log("troe " + this.route.options.emailVerificationToken);
  }
});