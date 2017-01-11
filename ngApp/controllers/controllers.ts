// namespace random.Controllers {

    // const apiUrl = '/api/movies/search/';
    //
    // export class HomeController {
    //     public message = 'Hello from the home page!';
    //     public search;
    //     public movies;
    //
    //     fetch(){
    //       if (this.search){
    //         console.log('searching');
    //         this.$http.get(apiUrl + this.search)
    //         .then((results) => {
    //           this.movies = results.data;
    //         })
    //
    //       }
    //     }
        // constructor(private $http: ng.IHttpService, movieService:random.Services.MovieService) {
        //     this.movies = movieService.listMovies();
        //
        // }
        // export class AboutController {
        //     public message = 'Hello from the about page!';
        // }

    // }
// namespace random.Controllers {
//
//   export class MoviesListController {
//           public movies;
//
//           constructor(movieService: random.Services.MovieService) {
//               this.movies = movieService.listMovies();
//           }
//       }
//
//
//       export class MoviesAddController {
//           public movieToCreate;
//
//           addMovie() {
//               this.movieService.save(this.movieToCreate).then(
//                   () => this.$state.go('Home')
//               );
//           }
//
//           constructor(private movieService: random.Services.MovieService, private $state: ng.ui.IStateService) { }
//       }
//
//
//       export class MoviesEditController {
//           public movieToEdit;
//
//           editMovie() {
//               this.movieService.save(this.movieToEdit).then(
//                   () => this.$state.go('Home')
//               );
//           }
//
//           constructor(private movieService: random.Services.MovieService, private $state: ng.ui.IStateService, $stateParams: ng.ui.IStateParamsService) {
//               this.movieToEdit = movieService.getMovie($stateParams['id'])
//           }
//       }
//
//
//       export class MoviesDeleteController {
//           public movieToDelete;
//
//           deleteMovie() {
//               this.movieService.deleteMovie(this.movieToDelete.id).then(
//                   () => this.$state.go('Home')
//               );
//           }
//
//           constructor(private movieService: random.Services.MovieService, private $state: ng.ui.IStateService, $stateParams: ng.ui.IStateParamsService) {
//               this.movieToDelete = movieService.getMovie($stateParams['id'])
//           }
//       }
//
// }



// namespace random.Controllers {
//
//     export class HomeController {
//
//         public showModal(animalName: string) {
//             this.$uibModal.open({
//                 templateUrl: '/ngApp/views/dialog.html',
//                 controller: 'DialogController',
//                 controllerAs: 'modal',
//                 resolve: {
//                     animalName: () => animalName
//                 },
//                 size: 'sm'
//             });
//         }
//
//         constructor(private $uibModal: angular.ui.bootstrap.IModalService) { }
//     }
//
//     angular.module('random').controller('HomeController', HomeController);
//
//     class DialogController {
//
//         public ok() {
//             this.$uibModalInstance.close();
//         }
//
//         constructor(public animalName: string, private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) { }
//     }
//
//     angular.module('random').controller('DialogController', DialogController);
// }

//animation controller logic

// namespace random.TaskList {
//   export class TasksController {
//         constructor(public tasks, public newTask){
//             this.tasks = [
//                 { name: 'Feed dog' },
//                 { name: 'Take out garbage' },
//                 { name: 'Water lawn' },
//             ];
//         }
//
//         addTask() {
//             this.tasks.push({ name: this.newTask });
//             this.newTask = '';
//         };
//     }
//
//     angular.module("random").controller('TasksController', TasksController);
// }

// loding status bar logic

// namespace random.Controllers {
//
//
//   export class AnswerController {
//         public answer;
//         private resource;
//
//         public getAnswer() {
//             this.answer = this.resource.get();
//             // console.log("hit");
//         }
//         constructor($resource: ng.resource.IResourceService) {
//             this.resource = $resource('/api/deepThought/getAnswer');
//         }
//     }
//
//     angular.module('random').controller('AnswerController', AnswerController);
//
// }


namespace random.Controllers {

    class HomeController {
        public center = {latitude: 47.671853, longitude: -122.121328};
        public zoom = 15;
    }

    angular.module('random').controller('HomeController', HomeController);

}
