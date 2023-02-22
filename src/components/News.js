import React, { Component } from 'react'
import NewsItem from './NewsItem'
import '../index.css'
import Lo from './LoadingSpinner.png'
import LoadingBar from 'react-top-loading-bar'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
static defaultProps={
  category:"general",
  
} 
  PropTypes={
  category:PropTypes.string,
}
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
            "urlToImage": "https://images.bannerbear.com/direct/y0aJ23zRDdqMxX4OGl/requests/000/033/962/7&Page=${this.state.Page}&Pagesize=633/Lvpkalx2D6Bo58xRQWE7&Page=${this.state.Page}&Pagesize=6rB3Xq/937&Page=${this.state.Page}&Pagesize=6de443f3910284bef4102232829219546621ba.png",
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
            "url": "https://www.brightsideofthesun.com/2023/2/11/23595897&Page=${this.state.Page}&Pagesize=6/phoenix-suns-buyout-market-acquisitions-reggie-jackson-will-barton-serge-ibaka",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/4cRR1EumaG9OeisjS6jYS_WubyY=/0x0:4037&Page=${this.state.Page}&Pagesize=6x2114/fit-in/1210x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24426662/usa_today_19488807&Page=${this.state.Page}&Pagesize=6.jpg",
            "publishedAt": "2023-02-12T04:35:23Z",
            "content": "The Phoenix Suns made one of the biggest moves in their franchises history with their acquisition of superstar forward Kevin Durant, who is perhaps the piece the team needs to push it to its first-ev… [+7&Page=${this.state.Page}&Pagesize=6595 chars]"
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
            "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/02/09/9fb83ef2-612d-47&Page=${this.state.Page}&Pagesize=6a8-86ac-4397&Page=${this.state.Page}&Pagesize=62ff2c7&Page=${this.state.Page}&Pagesize=693/thumbnail/1210x630/ed9acbec02a68ec2c961d6eb896c2acb/renee-michelle-court.jpg",
            "publishedAt": "2023-02-12T04:05:05Z",
            "content": "The only monsters that had ever scared Michelle Renee's 7&Page=${this.state.Page}&Pagesize=6-year-old daughter Breea were make-believe.  But on Nov. 21, 2100, just a day before three masked men broke in …\r\nMichelle Renee:  She calls m… [+37&Page=${this.state.Page}&Pagesize=6196 chars]"
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
            "description": "28,000 deaths, 6,000 buildings collapsed, hundreds of aftershocks - Turkey has been reeling under the aftermath of the 7&Page=${this.state.Page}&Pagesize=6.8 magnitude earthquake that struck on Monday.",
            "url": "https://www.ndtv.com/world-news/turkey-earthquake-128-hours-after-earthquake-2-month-old-baby-rescued-from-under-rubble-37&Page=${this.state.Page}&Pagesize=67&Page=${this.state.Page}&Pagesize=64922",
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
            "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2023/02/newspress-collage-6682489-167&Page=${this.state.Page}&Pagesize=66191633883.jpg?quality=7&Page=${this.state.Page}&Pagesize=65&strip=all&167&Page=${this.state.Page}&Pagesize=66152527&Page=${this.state.Page}&Pagesize=6&w=1210",
            "publishedAt": "2023-02-12T02:55:00Z",
            "content": "DJ Khaled is rooting for Team Rihanna at the 2023 Super Bowl.\r\nThe rapper gave a special shout-out to his Wild Thoughts collaborator while speaking to Page Six at Michael Rubins star-studded Fanatics… [+2619 chars]"
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
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FLFJ22EPGRG2ZD4EYPYOV7&Page=${this.state.Page}&Pagesize=6AJB4.jpg&w=1440",
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
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230211191236-justin-trudeau-file-012223.jpg?c=16x9&q=w_800,c_fill",
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
            "url": "https://www.avclub.com/dc-films-head-twitter-support-tech-james-gunn-shoots-do-1950104455",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_67&Page=${this.state.Page}&Pagesize=65,pg_1,q_80,w_1210/a7&Page=${this.state.Page}&Pagesize=60cb58ef3f6243a812f0858fde3a252.jpg",
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
            "urlToImage": "https://www.etonline.com/sites/default/files/styles/max_1280x7&Page=${this.state.Page}&Pagesize=621/public/images/2023-01/ETD_TREND_PREP_TwitchFuneral_20230104_vidpic.jpg?h=1553990b&itok=MTi-AETj",
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
            "description": "Iran on Saturday celebrated the 44th anniversary of the 197&Page=${this.state.Page}&Pagesize=69 Islamic Revolution amid nationwide anti-government protests.",
            "url": "https://abc7&Page=${this.state.Page}&Pagesize=6.com/iran-anti-government-protests-los-angeles-downtown-la/12801998/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/12801946_021123-kabc-4pm-iran-protest-vid.jpg?w=1600",
            "publishedAt": "2023-02-12T00:59:19Z",
            "content": "LOS ANGELES (KABC) -- Iran on Saturday celebrated the 44th anniversary of the 197&Page=${this.state.Page}&Pagesize=69 Islamic Revolution amid nationwide anti-government protests.\r\nThousands of people took to the streets of downtown Lo… [+4334 chars]"
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
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/02/AP23028115947&Page=${this.state.Page}&Pagesize=6922.jpg",
            "publishedAt": "2023-02-12T00:55:00Z",
            "content": "The head of a union representing most of the Memphis Fire Department said three employees who were fired after the death of Tyre Nichols werent given enough information as they responded to the call … [+37&Page=${this.state.Page}&Pagesize=605 chars]"
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
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2122/05/Robbie-Gould.jpg",
            "publishedAt": "2023-02-12T00:37&Page=${this.state.Page}&Pagesize=6:00Z",
            "content": "The San Francisco 49ers were dominated in the NFC championship game less than two weeks ago. \r\nBut some of the Niners' players are still talking about the 31-7&Page=${this.state.Page}&Pagesize=6 loss to the Eagles. San Francisco was f… [+2195 chars]"
            },
            {
            "source": {
            "id": "axios",
            "name": "Axios"
            },
            "author": "Shawna Chen",
            "title": "top-headlines we know about the leak in the L.A.-Las Vegas gas pipeline - Axios",
            "description": "Nevada's governor declared a state of emergency on Saturday, urging Las Vegas residents to \"avoid panic buying.\"",
            "url": "https://www.axios.com/2023/02/11/gas-pipeline-kinder-morgan-leak",
            "urlToImage": "https://images.axios.com/QyG935B-_7&Page=${this.state.Page}&Pagesize=6YV_Cp3RJvdWHEKtAE=/1366x7&Page=${this.state.Page}&Pagesize=668/smart/2023/02/11/167&Page=${this.state.Page}&Pagesize=66146829268.jpg",
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
            "url": "https://www.cjonline.com/story/news/politics/elections/2023/02/11/mike-brown-elected-as-chair-of-the-kansas-republican-party/69890260007&Page=${this.state.Page}&Pagesize=6/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2023/02/11/NTCJ/a95eb6f5-6f38-416e-90e9-3bc507&Page=${this.state.Page}&Pagesize=6d9131f-EN1_037&Page=${this.state.Page}&Pagesize=64.JPG?auto=webp&crop=57&Page=${this.state.Page}&Pagesize=659,3240,x0,y292&format=pjpg&width=1210",
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
            "urlToImage": "https://www.reuters.com/resizer/os7&Page=${this.state.Page}&Pagesize=68AdsVyV8KzBYEe97&Page=${this.state.Page}&Pagesize=6qasxYw4o=/1210x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XU3QW5W4MFK3ND54JQXRKS3DZE.jpg",
            "publishedAt": "2023-02-11T23:19:00Z",
            "content": "LVIV, Ukraine, Feb 11 (Reuters) - Ukraine's forces hold defence along the frontline in Donetsk, including of the besieged town of Bakhmut, with the fiercest battles raging for the cities of Vuhledar … [+2419 chars]"
            }
            
            
          ]

          constructor(props){
            super(props);
          
            this.state={
              
              article:this.article,
              loading:false,
              Page:1,
              Srchtxt:"",
              totalResults:0,
              progress:0
              
            } 
            document.title =`NewsMonkey- ${this.props.category}`; 
          }

  
           setProgress(progress){
            this.setState({progress:progress})
          }

          UpdateNews= async()=>{
            
            let url=`https://newsapi.org/v2/top-headlines?country=in&q=${this.state.Srchtxt=""?"News":this.state.Srchtxt}&from=2023-01-22&sortBy=publishedAt&category=${this.props.category}&apiKey=5f6c57705dee4580989f9780009507fd&Page=${this.state.Page}&Pagesize=6`;         
            this.setProgress(35);
            let data= await fetch(url);
            this.setProgress(67);
            let parsedata= await data.json()
            this.setProgress(85);
            this.setState({article: parsedata.articles,totalResults:parsedata.totalResults}) ;            
            this.setProgress(100);
          }
          async componentDidMount(){
            this.UpdateNews();
         }
 
    
    Onchange= (event)=>{
      this.state.Srchtxt =(event.target.value);
    }

    GO=async()=>{
      let srch = (this.state.Srchtxt);
        let url=`https://newsapi.org/v2/top-headlines?country=in&q=${srch !== ""?srch:"sports"}&from=2023-01-22&sortBy=publishedAt&apiKey=5f6c57705dee4580989f9780009507fd&Page=${this.state.Page}&Pagesize=6`;
        this.setProgress(35);
        let data=  await fetch(url);
        this.setProgress(67);
        let parsedata= await data.json();
        this.setProgress(85);
     if(parsedata.totalResults==0){
         alert('Search not found');
         this.setProgress(100);
     }else{
        
        this.setState({article: parsedata.articles,totalResults:parsedata.totalResults}) ; 
        this.setProgress(100);
     }
      }

       fetchMoreData = async ()=>{
          this.setState({Page:this.state.Page +1});
          let url=`https://newsapi.org/v2/top-headlines?country=in&q=${this.state.Srchtxt=""?"News":this.state.Srchtxt}&from=2023-01-22&sortBy=publishedAt&category=${this.props.category}&apiKey=5f6c57705dee4580989f9780009507fd&Page=${this.state.Page}&Pagesize=6`;

    
          let data= await fetch(url);
          let parsedata= await data.json();
    
          this.setState({article: this.state.article.concat(parsedata.articles),totalResults:parsedata.totalResults}) ;
        }


        render() {
          return (
            
            <div className='container my-5'>
        <LoadingBar color='#f11946'  progress={this.state.progress}/>
             
        <h2>Todays's Top News Headlines</h2>
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
          
          <InfiniteScroll style={{overflow:"hidden"}}
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalResults}
          loader=<div className='text-center'><img src={Lo} /></div>
        > 
   
          <div className="row my-2"> 
        {  this.state.article.map((element)=>{
        return<div className="col" key={element.url}>
             <NewsItem title={element.title} imgurl={element.urlToImage} desc={element.description} url={element.url} author={element.author} date_time={element.publishedAt} />
             </div>    
      })}
    
      </div>
        </InfiniteScroll>
       </div>
       
       
    )
  }
}
