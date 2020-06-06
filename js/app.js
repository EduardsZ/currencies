var app = angular.module('app', []);

app.directive("w3TestDirective", function() {
  return {
    template : "<h1>Currencies exchange app</h1>"
  };
});

app.directive("anotherDirective", function() {
    return {
        restrict : "C",
        template : "<h2>Shows selected currency rate.</h2>"
    };
});