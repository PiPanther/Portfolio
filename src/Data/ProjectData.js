
import TextEditzy from "../assets/TextEditor.png"
import notes from "../assets/notesapp.png"
import stocks from "../assets/stocks.png"
import news from "../assets/news.jpg"
import doclab from "../assets/doclab.png"




 const ProjectdataFlutter = [
    {
        name: "Doclab",
        desc: "Developed a collaborative Flutter web and Android app with Google Authentication, leveraging Node.js for the backend, MongoDB for database management, and Riverpod for state management.",
        github_link : "https://github.com/PiPanther/Doclab",
        img : doclab,
    },
        {
            name: "CommunityX",
            desc: "Developed CommunityX, a responsive social media app with features like user authentication (Google Sign-In and guest login), community management (creation, editing, profile updates), and post interactions (sharing, upvoting, downvoting, commenting, deleting). The app supports dark and light mode toggling and ensures accessibility across platforms. ",
            github_link : "https://github.com/PiPanther/CommunityX",
            img : notes,
        },
        {
            name: " Zoom Play ",
            desc: "Utilized Firebase, Firestore, and Firebase Storage, with Dart, for a TikTok clone. Integrated GetX for state management and Firebase for authentication, ensuring seamless user interaction. Implemented MVC architecture for scalable code organization.",
            github_link : "https://github.com/PiPanther/ZoomPlay",
            img : TextEditzy,
         },
         {
            name : "StockN - Stock Quote App",
            desc : "Developed a web app for real estate investment analysis in Japanese prefectures, utilizing machine learning models for accurate plot price predictions till 2030 and valuable insights and visualization.  ",
            github_link : "https://github.com/PiPanther/stockQuote",
            img : stocks
        },
      {
          name : "News App",
          desc : "Built a real time news summariser app using the https://newsapi.org/ API. Utilised the HTTP for fetching data from API asynchronously with efficient error handling both in app and the user dsplay page",
          github_link : "https://github.com/PiPanther/NewsApp",
          
          img : news
      },
      
      {
        name: "QNotes : A Notes App",
        desc: "Developed a note-taking app that uses Firebase Firestore for storing images and individual user information. Users can access their notes on any device by logging in with their email.",
        github_link : "https://github.com/PiPanther/QuickNotes/tree/main/quicknotes",
        img : notes,
      },

      {
          name :"TODO App",
          desc : "Developed a TODO app that uses Firebase Firestore to store tasks and user information. Integrated Authentication using Firebase and RiverPod for state management ",
          github_link : "https://github.com/PiPanther/TODO_APP",
          img : notes,
    
      },
]
    
export default ProjectdataFlutter