/////////////////////
// SOCKETS MANAGER //
/////////////////////

module.exports = function(io) 
{
  
   /**
     * Listens to user connection and sets listeners
     * @param  {obj} socket 
     */
    io.on('connection', function (socket) 
    {
        console.log('Client connected');

        socket.on('disconnect', function() 
        {
            console.log('client disconnected');          
        });
    });

    var _somePrivateFunction = function() {
        console.log("I'm private");
    }

    var somePublicFunction = function() {
        console.log("I'm public");
    }


    return {
        somePublicFunction: somePublicFunction
    };
};
