import React, { Component } from 'react'
import NewsItem from './NewsItem'


export default class News extends Component {
 
    article=[
        {
            // "status": "ok",
            // "totalResults": 38,
            // "articles": [
            // {
            "source": {
            "id": null,
            "name": "YouTube"
            },
            "author": null,
            "title": "Alexander Volkanovski Octagon Interview | UFC 284 - UFC - Ultimate Fighting Championship",
            "description": "Alexander Volkanovski chats with Michael Bisping at UFC 284 after his loss to Islam Makhachev. Subscribe to get all the latest UFC content: https://ufc.ac/3u...",
            "url": "https://www.youtube.com/watch?v=w-P1co1HSYc",
            "urlToImage": "https://i.ytimg.com/vi/w-P1co1HSYc/maxresdefault.jpg",
            "publishedAt": "2023-02-12T06:05:34Z",
            "content": null
            },
            {
            "source": {
            "id": null,
            "name": "Food Safety News"
            },
            "author": "News Desk",
            "title": "Health officials warn of norovirus spike in England; 66 percent more cases - Food Safety News",
            "description": "Health officials in the United Kingdom have warned about a sharp increase in confirmed cases of norovirus. National surveillance data shows laboratory",
            "url": "https://www.foodsafetynews.com/2023/02/health-officials-warn-of-norovirus-spike-in-england-66-percent-more-cases/",
            "urlToImage": "https://images.bannerbear.com/direct/y0aJ23zRDdqMxX4OGl/requests/000/033/962/733/Lvpkalx2D6Bo58xRQWE7rB3Xq/937de443f3910284bef4102232829219546620ba.png",
            "publishedAt": "2023-02-12T05:09:51Z",
            "content": "Health officials in the United Kingdom have warned about a sharp increase in confirmed cases of norovirus.\r\nNational surveillance data shows laboratory reports of the virus in England are 66 percent … [+2829 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Bright Side of the Sun"
            },
            "author": "Trevor_Booth",
            "title": "Seven potential targets for the Phoenix Suns in the buyout market - Bright Side Of The Sun",
            "description": "Here’s how the Suns could boost their depth after their acquisition of Kevin Durant.",
            "url": "https://www.brightsideofthesun.com/2023/2/11/23595897/phoenix-suns-buyout-market-acquisitions-reggie-jackson-will-barton-serge-ibaka",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/4cRR1EumaG9OeisjS6jYS_WubyY=/0x0:4037x2114/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24426662/usa_today_19488807.jpg",
            "publishedAt": "2023-02-12T04:35:23Z",
            "content": "The Phoenix Suns made one of the biggest moves in their franchises history with their acquisition of superstar forward Kevin Durant, who is perhaps the piece the team needs to push it to its first-ev… [+7595 chars]"
            },
            {
            "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
            },
            "author": "Dan Rosenzweig-Ziff",
            "title": "Syrian animals found days after earthquake killed over 2,000 people - The Washington Post",
            "description": "As the White Helmets ended their search-and-rescue operations for people in opposition-held Syria, animal sanctuary workers found battered animals, alive.",
            "url": "https://www.washingtonpost.com/world/2023/02/11/syria-earthquake-animal-rescue-sanctuary/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PPOOACOULFCDTKMHUOQ2ILFMAM.jpg&w=1440",
            "publishedAt": "2023-02-12T04:21:00Z",
            "content": "Comment on this story\r\nAn animal sanctuary in rebel-held Syria rescued a cat trapped inside its humans shop for three days, a chicken stuck in the middle of a flooding river and a dog bleeding profus… [+6868 chars]"
            },
            {
            "source": {
            "id": "cbs-news",
            "name": "CBS News"
            },
            "author": "Tracy Smith",
            "title": "Michelle Renee, California mother who was kidnapped and forced to rob a bank, falsely painted as a criminal in court - CBS News",
            "description": "Three masked gunmen break into a bank manager's home, hold her and her young daughter hostage, before forcing her to rob her own bank. But in court, the defense would try to pin the plot on the victim.",
            "url": "https://www.cbsnews.com/news/michelle-renee-kidnapped-forced-to-rob-bank-falsely-painted-as-a-criminal-in-court/",
            "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/02/09/9fb83ef2-612d-47a8-86ac-43972ff2c793/thumbnail/1200x630/ed9acbec02a68ec2c961d6eb896c2acb/renee-michelle-court.jpg",
            "publishedAt": "2023-02-12T04:05:05Z",
            "content": "The only monsters that had ever scared Michelle Renee's 7-year-old daughter Breea were make-believe.  But on Nov. 20, 2000, just a day before three masked men broke in …\r\nMichelle Renee:  She calls m… [+37186 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "SciTechDaily"
            },
            "author": null,
            "title": "New Species Discovered: The Largest Penguin That Ever Lived - SciTechDaily",
            "description": "Fossil bones from two newly-described penguin species, one of them thought to be the largest penguin to ever live – weighing more than 340 pounds, more than three times the size of the largest living penguins – have been unearthed in New Zealand. An internati…",
            "url": "https://scitechdaily.com/new-species-discovered-the-largest-penguin-that-ever-lived/",
            "urlToImage": "https://scitechdaily.com/images/Largest-Penguin.jpg",
            "publishedAt": "2023-02-12T03:30:34Z",
            "content": "ByUniversity of CambridgeFebruary 11, 2023\r\nAn artists concept of Kumimanu and Petradyptes penguins on an ancient New Zealand beach. Kumimanu, the larger of the two, weighed around 340 pounds and is … [+6225 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "NDTV News"
            },
            "author": null,
            "title": "Miraculous Rescue In Turkey, Baby Found Alive In Rubble After 128 Hours - NDTV",
            "description": "28,000 deaths, 6,000 buildings collapsed, hundreds of aftershocks - Turkey has been reeling under the aftermath of the 7.8 magnitude earthquake that struck on Monday.",
            "url": "https://www.ndtv.com/world-news/turkey-earthquake-128-hours-after-earthquake-2-month-old-baby-rescued-from-under-rubble-3774922",
            "urlToImage": "https://c.ndtvimg.com/2023-02/4og3o43o_turkey-baby-rescued_625x300_12_February_23.jpg",
            "publishedAt": "2023-02-12T03:15:00Z",
            "content": "A two-month-old baby was yesterday rescued from under the rubble in Turkey's Hatay.\r\nHatay: 28,000 deaths, 6,000 buildings collapsed, hundreds of aftershocks - Turkey has been reeling under the after… [+1089 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Page Six"
            },
            "author": "Desiree Murphy",
            "title": "DJ Khaled shares sweet message for Rihanna ahead of Super Bowl halftime show - Page Six",
            "description": "“RiRi, I love you so much,” the record producer told Page Six on the red carpet at Michael Rubin’s star-studded Super Bowl Fanatics party on Saturday.",
            "url": "https://pagesix.com/2023/02/11/dj-khaled-shares-message-for-rihanna-ahead-of-super-bowl-halftime-show/",
            "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2023/02/newspress-collage-6682489-1676171633883.jpg?quality=75&strip=all&1676152527&w=1200",
            "publishedAt": "2023-02-12T02:55:00Z",
            "content": "DJ Khaled is rooting for Team Rihanna at the 2023 Super Bowl.\r\nThe rapper gave a special shout-out to his Wild Thoughts collaborator while speaking to Page Six at Michael Rubins star-studded Fanatics… [+2618 chars]"
            },
            {
            "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
            },
            "author": "Greg Porter",
            "title": "PM Update: A wet and cold Super Bowl Sunday - The Washington Post",
            "description": "Rain, temperatures in the low 40s and a chilly northeast wind will all add up to some pretty bleak weather on Sunday.",
            "url": "https://www.washingtonpost.com/weather/2023/02/11/pm-update-cold-rain/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FLFJ22EPGRG2ZD4EYPYOV7AJB4.jpg&w=1440",
            "publishedAt": "2023-02-12T02:38:45Z",
            "content": "Comment on this story\r\nIn a typical winter season, wed be talking about a significant snowfall with the type of storm setup thats coming tomorrow. However, this is no typical winter season. With no c… [+1225 chars]"
            },
            {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "Paula Newton, Haley Britzky",
            "title": "US jet shoots down 'unidentified object' over northern Canada - CNN",
            "description": "Canadian Prime Minister Justin Trudeau said Saturday that an \"unidentified object\" had been shot down by a US fighter jet over Canadian airspace on his orders.",
            "url": "https://www.cnn.com/2023/02/11/politics/norad-additional-object-northern-canada/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230211171236-justin-trudeau-file-012223.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-02-12T02:34:00Z",
            "content": "Canadian Prime Minister Justin Trudeau said Saturday that an unidentified object had been shot down by a US fighter jet over Canadian airspace on his orders.\r\nI ordered the take down of an unidentifi… [+5980 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "YouTube"
            },
            "author": null,
            "title": "FAA investigates low-speed collision at LAX | WNT - ABC News",
            "description": "An American Airlines plane and a shuttle bus were involved in a collision as the plane was being towed from a gate to a parking area. WATCH THE FULL EPISODE ...",
            "url": "https://www.youtube.com/watch?v=hVkppmZl5NE",
            "urlToImage": "https://i.ytimg.com/vi/hVkppmZl5NE/maxresdefault.jpg",
            "publishedAt": "2023-02-12T02:31:21Z",
            "content": null
            },
            {
            "source": {
            "id": null,
            "name": "Spaceflight Now"
            },
            "author": null,
            "title": "Watch live: SpaceX poised for overnight launch with more Starlink satellites – Spaceflight Now - Spaceflight Now",
            "description": null,
            "url": "https://spaceflightnow.com/2023/02/11/falcon-9-starlink-5-4-coverage/",
            "urlToImage": null,
            "publishedAt": "2023-02-12T01:48:19Z",
            "content": "“Our action will allow SpaceX to begin deployment of Gen2 Starlink, which will bring next generation satellite broadband to Americans nationwide, including those living and working in areas tradition… [+6952 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "The A.V. Club"
            },
            "author": "William Hughes",
            "title": "DC Films head/Twitter support tech James Gunn shoots down George Clooney Batman rumors - The A.V. Club",
            "description": "Who knew the role of studio head could be so glamorous?",
            "url": "https://www.avclub.com/dc-films-head-twitter-support-tech-james-gunn-shoots-do-1850104455",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a70cb58ef3f6243a812f0858fde3a252.jpg",
            "publishedAt": "2023-02-12T01:29:00Z",
            "content": "When contemplating the role of a studio heada position that precious few people, even in the upper echelons of Hollywood power, have ever attainedtheres a certain amount of mystique that tends to cro… [+1956 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Entertainment Tonight"
            },
            "author": "Miguel A. Melendez",
            "title": "Stephen 'tWitch' Boss Remembered By Wife Alison Holker, Ellen DeGeneres and More at Celebration of Life - Entertainment Tonight",
            "description": "Approximately 500 friends and family members attended Saturday's service in Los Angeles.",
            "url": "https://www.etonline.com/stephen-twitch-boss-remembered-by-wife-alllison-holker-ellen-degeneres-and-more-at-celebration-of",
            "urlToImage": "https://www.etonline.com/sites/default/files/styles/max_1280x720/public/images/2023-01/ETD_TREND_PREP_TwitchFuneral_20230104_vidpic.jpg?h=1553990b&itok=MTi-AETj",
            "publishedAt": "2023-02-12T01:00:01Z",
            "content": "Allison Holker, Ellen DeGeneres, Wayne Brady and approximately 500 friends and family members gathered Saturday in Los Angeles for Stephen \"tWitch\" Boss' Celebration of Life, ET has learned.\r\nThere w… [+2859 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "KABC-TV"
            },
            "author": null,
            "title": "Iran marks anniversary of Islamic Revolution amid protests across US, including LA - KABC-TV",
            "description": "Iran on Saturday celebrated the 44th anniversary of the 1979 Islamic Revolution amid nationwide anti-government protests.",
            "url": "https://abc7.com/iran-anti-government-protests-los-angeles-downtown-la/12801898/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/12801946_021123-kabc-4pm-iran-protest-vid.jpg?w=1600",
            "publishedAt": "2023-02-12T00:59:18Z",
            "content": "LOS ANGELES (KABC) -- Iran on Saturday celebrated the 44th anniversary of the 1979 Islamic Revolution amid nationwide anti-government protests.\r\nThousands of people took to the streets of downtown Lo… [+4334 chars]"
            },
            {
            "source": {
            "id": "fox-news",
            "name": "Fox News"
            },
            "author": "Associated Press",
            "title": "Union: Fired EMTs didn't get enough info in Nichols response - Fox News",
            "description": "The head of a union representing the three fired Memphis Fire Department EMTs said that responding officers did not receive enough information about Tyre Nichols as they responded.",
            "url": "https://www.foxnews.com/us/union-fired-emts-didnt-get-enough-info-nichols-response",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/02/AP23028115947922.jpg",
            "publishedAt": "2023-02-12T00:55:00Z",
            "content": "The head of a union representing most of the Memphis Fire Department said three employees who were fired after the death of Tyre Nichols werent given enough information as they responded to the call … [+3705 chars]"
            },
            {
            "source": {
            "id": "fox-news",
            "name": "Fox News"
            },
            "author": "Chantz Martin",
            "title": "49ers kicker Robbie Gould takes a shot at Eagles’ Jalen Hurts, questions QB’s ability to throw - Fox News",
            "description": "As San Francisco 49ers kicker Robbie Gould gave his take on the Super Bowl, he took a shot at Jalen Hurts, a dual-threat quarterback, for his ability as a passer.",
            "url": "https://www.foxnews.com/sports/49ers-kicker-robbie-gould-takes-shot-eagles-jalen-hurts-questions-qbs-ability-throw",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Robbie-Gould.jpg",
            "publishedAt": "2023-02-12T00:37:00Z",
            "content": "The San Francisco 49ers were dominated in the NFC championship game less than two weeks ago. \r\nBut some of the Niners' players are still talking about the 31-7 loss to the Eagles. San Francisco was f… [+2175 chars]"
            },
            {
            "source": {
            "id": "axios",
            "name": "Axios"
            },
            "author": "Shawna Chen",
            "title": "Everything we know about the leak in the L.A.-Las Vegas gas pipeline - Axios",
            "description": "Nevada's governor declared a state of emergency on Saturday, urging Las Vegas residents to \"avoid panic buying.\"",
            "url": "https://www.axios.com/2023/02/11/gas-pipeline-kinder-morgan-leak",
            "urlToImage": "https://images.axios.com/QyG935B-_7YV_Cp3RJvdWHEKtAE=/1366x768/smart/2023/02/11/1676146829268.jpg",
            "publishedAt": "2023-02-12T00:14:31Z",
            "content": "A leak discovered in a gas pipeline that runs between Los Angeles and Las Vegas has led to a state of emergency in Nevada as state and local officials rush to stem possible shortages. \r\nDriving the n… [+2315 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "The Topeka Capital-Journal"
            },
            "author": ", The Topeka Capital-Journal",
            "title": "Mike Brown elected as chair of the Kansas Republican Party - The Topeka Capital-Journal",
            "description": "Former Johnson County commissioner Mike Brown was elected Kansas Republican Party chairman Saturday over a longtime party leader and activist.",
            "url": "https://www.cjonline.com/story/news/politics/elections/2023/02/11/mike-brown-elected-as-chair-of-the-kansas-republican-party/69890260007/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2023/02/11/NTCJ/a95eb6f5-6f38-416e-90e9-3bc507d9131f-EN1_0374.JPG?auto=webp&crop=5759,3240,x0,y292&format=pjpg&width=1200",
            "publishedAt": "2023-02-12T00:12:03Z",
            "content": "In a move that will signal a new direction for conservative politics in the state, the Kansas Republican Party tapped Mike Brown, a former Johnson County commissioner and election conspiracy theorist… [+8195 chars]"
            },
            {
            "source": {
            "id": "reuters",
            "name": "Reuters"
            },
            "author": null,
            "title": "Ukraine holds defence as battles rage in Donetsk region, top commander says - Reuters",
            "description": "Ukraine's forces hold defence along the frontline in Donetsk, including of the besieged town of Bakhmut, with the fiercest battles raging for the cities of Vuhledar and Maryinka, Kyiv's top military commander said on Saturday.",
            "url": "https://www.reuters.com/world/europe/ukraine-holds-defence-battles-rage-donetsk-region-top-commander-says-2023-02-11/",
            "urlToImage": "https://www.reuters.com/resizer/os78AdsVyV8KzBYEe97qasxYw4o=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XU3QW5W4MFK3ND54JQXRKS3DZE.jpg",
            "publishedAt": "2023-02-11T23:17:00Z",
            "content": "LVIV, Ukraine, Feb 11 (Reuters) - Ukraine's forces hold defence along the frontline in Donetsk, including of the besieged town of Bakhmut, with the fiercest battles raging for the cities of Vuhledar … [+2418 chars]"
            }
            
            
    ]

    constructor(){
       super();
       this.state={
        article:this.article,
        loading:false,
        Page:1,
        Srchtxt:""
       } 

       
    }
    
    async componentDidMount(){
      
      
      let url=`https://newsapi.org/v2/everything?q=tesla&from=2023-01-15&sortBy=publishedAt&apiKey=694fe824ffbc4e43bf8fed052d2c9bd7&Page=1`;
      let data= await fetch(url);
      let parsedata= await data.json();
      this.setState({article: parsedata.articles}) ;    
    }
 
    NextPage=async()=>{
      let url=`https://newsapi.org/v2/everything?q=${this.state.Srchtxt}&from=2023-01-15&sortBy=publishedAt&apiKey=694fe824ffbc4e43bf8fed052d2c9bd7&Page=${this.state.Page=(this.state.Page+1)}`;
      let data= await fetch(url);
      let parsedata= await data.json();
      this.setState({article: parsedata.articles}) ;    
    }
    PreviousPage=async()=>{
      let url=`https://newsapi.org/v2/everything?q=tesla&from=2023-01-15&sortBy=publishedAt&apiKey=694fe824ffbc4e43bf8fed052d2c9bd7&Page=${this.state.Page=(this.state.Page-1)}`;
      let data= await fetch(url);
      let parsedata= await data.json();
      this.setState({article: parsedata.articles}) ;    
    }
    Onchange= (event)=>{
        this.state.Srchtxt =(event.target.value);
    }
  GO=async()=>{
    let srch=(this.state.Srchtxt);
       let url=`https://newsapi.org/v2/everything?q=${srch}&from=2023-01-15&sortBy=publishedAt&apiKey=694fe824ffbc4e43bf8fed052d2c9bd7`;
        let data=  await fetch(url);
        let parsedata= await data.json();
        this.setState({article: parsedata.articles}) ;   
  }
  render() {


    return (
      <div className='container my-4'>
        <h2>Today's Top News Headlines</h2>
        <div className="d-flex">
        <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="1"
            placeholder='Search Topics here...'
             onChange={this.Onchange}
          ></textarea>
          <button type="button" className="btn btn-primary mx-2" onClick={this.GO}>Search</button>
          </div>
        
        <div className="row">  
      {  this.state.article.map((element)=>{
        return<div className="col" key={element.url}>
             <NewsItem title={element.title} imgurl={element.urlToImage} desc={element.description} url={element.url}/>
             </div>    
      })}
      </div>
      <div className="d-flex justify-content-between">
      <button type="button" className="btn btn-secondary " onClick={this.PreviousPage}>&larr;Prevoius</button>
      <button type="button" className="btn btn-secondary " onClick={this.NextPage}>Next&rarr;</button>

       </div>
       </div>
       
    )
  }
}
