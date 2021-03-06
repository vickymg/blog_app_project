angular.module('starter.services', [])
.factory('api', function() {
  return {
    url: function(path) {
      return this.base() + path;
    },
    base: function() {
      if ( this.isTestMode() ) {
        return "http://localhost:4321/"
      } else if ( this.isLocalhost() ) {
        return "http://localhost:4444/"
      } else {
        return "https://production-url.com/"
      }
    },
    isLocalhost: function() {
      return ionic.Platform.platform() === "macintel" && !this.isHttps();
    },
    isTestMode: function() {
      return location.port && location.port == "5000";
    },
    isHttps: function() {
      return window.location.origin.split(':')[2] == "https";
    }
  }
})
.factory('BlogEntry', function($resource, api) {
  return $resource(api.url("blog_entries/:id.json");
})

.factory("UserSession", function($resource) {
  return $resource("http://localhost:3000/users/sign_in.json");
})
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
