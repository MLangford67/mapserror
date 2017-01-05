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
namespace random.Controllers {

  export class MoviesListController {
          public movies;

          constructor(movieService: random.Services.MovieService) {
              this.movies = movieService.listMovies();
          }
      }


      export class MoviesAddController {
          public movieToCreate;

          addMovie() {
              this.movieService.save(this.movieToCreate).then(
                  () => this.$state.go('Home')
              );
          }

          constructor(private movieService: random.Services.MovieService, private $state: ng.ui.IStateService) { }
      }


      export class MoviesEditController {
          public movieToEdit;

          editMovie() {
              this.movieService.save(this.movieToEdit).then(
                  () => this.$state.go('Home')
              );
          }

          constructor(private movieService: random.Services.MovieService, private $state: ng.ui.IStateService, $stateParams: ng.ui.IStateParamsService) {
              this.movieToEdit = movieService.getMovie($stateParams['id'])
          }
      }


      export class MoviesDeleteController {
          public movieToDelete;

          deleteMovie() {
              this.movieService.deleteMovie(this.movieToDelete.id).then(
                  () => this.$state.go('Home')
              );
          }

          constructor(private movieService: random.Services.MovieService, private $state: ng.ui.IStateService, $stateParams: ng.ui.IStateParamsService) {
              this.movieToDelete = movieService.getMovie($stateParams['id'])
          }
      }

}
