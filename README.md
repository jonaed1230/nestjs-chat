# Messenger Docs

This is a microservice based on redis, rabbitmq and nestjs.

### Required Softwares:

 - Docker
 ### Run Instructions:
 Grab .env file from the developer and run using these commands:
 

    sudo docker compose -f docker-compose.yml up --build

# API Requests Docs
All of the requests and their docs can be found at:
[Authentication Docs](http://localhost:4000/api-docs)
You need to save all the data from login response and send them as JSON.stringify as authorization header.
example: 

    authorization: '{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UiLCJlbWFpbCI6InRlc3RAbWFpbC5jb20ifSwiaWF0IjoxNzAzNDAzMzc0LCJleHAiOjE3MDM0MDY5NzR9.01G-luWKyYnZCr99eSTUIuExfe_DnBy5PfNBOY5i-Vg","user":{"id":1,"firstName":"John","lastName":"Doe","email":"test@mail.com"}}'



### Websocket Docs:

**Presence:**
url: http://localhost:6000
connection example:

    const presenceBaseUrl = 'http://localhost:6000';
    const presenceSocket = SocketIoClient(presenceBaseUrl, {
    	transportOptions: {
    			polling: {
	    			extraHeaders: {
		    			Authorization: jwtToken,
		    		},
	    		},
	    	},
	    }
	 )


events:
 - friendActive  -  Get Active friends
 - updateActiveStatus  - Update User Active Status
 example:
`presenceSocket.emit('updateActiveStatus', true)`

**Message**
url: http://localhost:7000
connection example:

    const chatBaseUrl = 'http://localhost:7000';
    const chatSocket = SocketIoClient(presenceBaseUrl, {
    	transportOptions: {
    			polling: {
        			extraHeaders: {
    	    			Authorization: jwtToken,
    	    		},
        		},
        	},
        }
     )
events:

 - getAllConversations - Get All Conversations with other users
 - newMessage - Get New Message from other users
 - sendMessage - Sends New Message to other users
 body params:

     `message: string,
     friendId: int,
     conversationId: int`
example:
`chatSocket.emit('sendMessage', {
      message: "Hi",
      friendId: 1,
      conversationId: 5,
    });`
 - ping - Check if Websocket is alive or not