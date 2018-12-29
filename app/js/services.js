/**
 * Created by efraindx on 29/12/2018.
 */

angular.module('movieApp.services',[]).factory('Movie',function($resource){
    return $resource('http://localhost:3000/movies/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});