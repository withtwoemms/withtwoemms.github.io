var exports = module.exports = {};


exports.getAPI = function() {
  var apiDict;
  console.log('api button clicked');
  apiDict = $.ajax({
    method: 'GET',
    global: false,
    async: false,
    //url: 'http://emmanuelobi.com/api'
    url: 'http://localhost:3333/api',
    success: function(response) {
      return response
    }
  }).responseText;
  return apiDict
}
