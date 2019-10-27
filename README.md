# footprint
*A personalized eco friendly chatbot*
![homescreen](https://github.com/jollyjerr/footprints-backend/blob/master/github/homepage.png)

footprint is a digital assistant to help users make sustainable decisions. You can save information about yourself - such as vehicles, homes, and diet - and footprint will reccomend lifestyle choices that reduce your environmental impact! 

Users can also ask common questions such as "Can I recycle this #4 plastic?" and footprint will provide quick answers. If you want to talk about anything else, footprint is also a witty conversationalist! 

### Links to all repos:

[Frontend](https://github.com/jollyjerr/footprints-frontend)

[Backend](https://github.com/jollyjerr/footprints-backend)

[Bot](https://github.com/jollyjerr/footprint)

### Technologies Used
![techstack](https://github.com/jollyjerr/footprints-backend/blob/master/github/techstack.png)

##### [Frontend](https://github.com/jollyjerr/footprints-frontend)
- React
- React Hooks
- React Router
- Redux
- Sass
- Firebase

##### [Backend](https://github.com/jollyjerr/footprints-backend)
- C#
- .NET Core
- Entity Framework
- MsSQL
- Docker
- Azure

##### [Bot](https://github.com/jollyjerr/footprint)
- Node.js
- Azure

*This README is specific to the projects frontend*

## Features

This website uses React and Redux to store multiple variables in a global state - including the chatbot instance, user authentication information, and the current user's footprint profile.

Users are guided through a signup funnel that implements react-hooks for efficient temporary state managment
![login](https://github.com/jollyjerr/footprints-backend/blob/master/github/signup.gif)

Users can then chat with footprint through the web application. - Their specific conversation will be maintained in a global Redux state so that footprint can remember the flow of the conversation.
![chatting](https://github.com/jollyjerr/footprints-backend/blob/master/github/chat.gif)

## License
[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)
