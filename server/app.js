var app = angular.module('myApp', []);
app.controller('myData', function ($scope) {
    console.log('aa');
    $scope.products = 'sdfsd'; 
});

ReactDOM.render(<App searchYouTube={window.searchYouTube} />, document.getElementById('app'));