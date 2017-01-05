// namespace random {
//
//     angular.module('random', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
//         $stateProvider: ng.ui.IStateProvider,
//         $urlRouterProvider: ng.ui.IUrlRouterProvider,
//         $locationProvider: ng.ILocationProvider
//     ) => {
//         // Define routes
//         $stateProvider
//             .state('home', {
//                 url: '/',
//                 templateUrl: '/ngApp/views/home.html',
//                 controller: random.Controllers.HomeController,
//                 controllerAs: 'controller'
//             })
//             .state('about', {
//                 url: '/about',
//                 templateUrl: '/ngApp/views/about.html',
//                 controller: random.Controllers.AboutController,
//                 controllerAs: 'controller'
//             })
//             .state('notFound', {
//                 url: '/notFound',
//                 templateUrl: '/ngApp/views/notFound.html'
//             });
//
//         // Handle request for non-existent route
//         $urlRouterProvider.otherwise('/notFound');
//
//         // Enable HTML5 navigation
//         $locationProvider.html5Mode(true);
//     });
//
//
//
// }
namespace random{
  angular.module('MoviesApp', ['ui.router', 'ngResource']).config(($stateProvider: ng.ui.IStateProvider, $locationProvider: ng.ILocationProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
       $stateProvider
           .state('Home', {
               url: '/',
               templateUrl: '/ngApp/views/list.html',
               controller: random.Controllers.MoviesListController,
               controllerAs: 'controller'
           })
           .state('Add', {
               url: '/add',
               templateUrl: '/ngApp/views/add.html',
               controller: random.Controllers.MoviesAddController,
               controllerAs: 'controller'
           })
           .state('Edit', {
               url: '/edit/:id',
               templateUrl: '/ngApp/views/edit.html',
               controller: random.Controllers.MoviesEditController,
               controllerAs: 'controller'
           })
           .state('Delete', {
               url: '/delete/:id',
               templateUrl: '/ngApp/views/delete.html',
               controller: random.Controllers.MoviesDeleteController,
               controllerAs: 'controller'
           });


       $urlRouterProvider.otherwise('/');
       $locationProvider.html5Mode(true);
   });
}
