import { useState } from "react";
import Header from "./components/Header";
import ExtraInfo from "./components/ExtraInfo";
import { OPTION_INSTAGRAM, OPTION_TIKTOK, OPTION_YOUTUBE, OPTION_TWITTER, OPTION_FACEBOOK } from "./components/Config";
import instagram from './images/instagram.svg'
import tiktok from './images/tiktok.svg'
import youtube from './images/youtube.svg'
import twitter from './images/twitter.svg'
import facebook from './images/facebook.svg'

function App() {
  const [usernameInstagram, setUsernameInstagram] = useState('');
  const [usernameTiktok, setUsernameTiktok] = useState('');
  const [usernameYoutube, setUsernameYoutube] = useState('');
  const [usernameTwitter, setUsernameTwitter] = useState('');
  const [usernameFacebook, setUsernameFacebook] = useState('');
  const [instagramData, setInstagramData] = useState(null);
  const [tiktokData, setTiktokData] = useState(null);
  const [youtubeData, setYoutubeData] = useState(null);
  const [twitterData, setTwitterData] = useState(null);
  const [facebokData, setFacebokData] = useState(null);

  const getInstagramData = event => {
    fetch(`https://instagram210.p.rapidapi.com/ig_profile?ig=${usernameInstagram}`, OPTION_INSTAGRAM)
      .then(response => response.json())
      .then(data => {
        if (data[0].error_code == null) {
          setInstagramData(data);
        } else {
          setInstagramData(null);
          alert("Username is wrong!");
        }
        setUsernameInstagram('');
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong...");
      });
  }

  const getTiktokData = event => {
    fetch(`https://tiktok-video-no-watermark2.p.rapidapi.com/user/info?unique_id=%40${usernameTiktok}`, OPTION_TIKTOK)
      .then(response => response.json())
      .then(data => {
        if (data.msg === 'success') {
          setTiktokData(data);
        } else {
          setTiktokData(null);
          alert("Username is wrong!");
        }
        setUsernameTiktok('');
      })
      .catch(err => {
        alert("Something went wrong...");
      });
  }

  const getYoutubeData = event => {
    fetch(`https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${usernameYoutube}`, OPTION_YOUTUBE)
      .then(response => response.json())
      .then(data => {
        if (data.pageInfo.totalResults > 0) {
          setYoutubeData(data);
        } else {
          setYoutubeData(null);
          alert("Id is wrong!");
        }
        setUsernameYoutube('');
      })
      .catch(err => {
        alert("Something went wrong...");
      });
  }

  const getTwitterData = event => {
    fetch(`https://twitter154.p.rapidapi.com/user/details?username=${usernameTwitter}`, OPTION_TWITTER)
      .then(response => response.json())
      .then(data => {
        if (data.detail == null) {
          setTwitterData(data);
        } else {
          setTwitterData(null);
          alert("Username is wrong!");
        }
        setUsernameTwitter('');
      })
      .catch(err => {
        alert("Something went wrong...");
      });
  }

  const getFacebookData = event => {
    fetch(`https://instagram-statistics-api.p.rapidapi.com/community?url=https%3A%2F%2Fwww.facebook.com%2F${usernameFacebook}`, OPTION_FACEBOOK)
      .then(response => response.json())
      .then(data => {
        if (data.meta.message === 'OK') {
          setFacebokData(data);
        } else {
          setFacebokData(null);
          alert("Username is wrong!");
        }
        setUsernameFacebook('');
      })
      .catch(err => {
        alert("Something went wrong...");
      });
  }

  return (
    <div className="container mx-auto px-4 ">
      <Header />
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10 max-w-sm sm:max-w-none mx-auto">
        <div className="shadow-lg pt-2 rounded-lg bg-gradient-to-r from-yellow-400 to-pink-600">
          <div className="flex flex-col bg-slate-200 rounded-b-lg p-4 w-full h-full dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 ease-in-out">
            <img className='w-6 mx-auto mb-2' src={instagram} alt="" />
            <input className="text-2xl md:text-lg text-center px-2 py-1 mx-2 focus:outline-none bg-transparent border-b-2 border-blue-300 focus:border-blue-500 transition-colors ease-in-out duration-200 mb-4 dark:text-white"
              type="search"
              placeholder="@username"
              value={usernameInstagram}
              onChange={event => setUsernameInstagram(event.target.value)}
              onKeyDown={event => {
                if (event.keyCode === 13) {
                  getInstagramData();
                }
              }}
            />
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 text-center mb-1 dark:text-white">{instagramData == null ? 0 : instagramData[0].follower_count}</h1>
            <h2 className="uppercase text-md mb-2 text-center dark:text-slate-300">Followers</h2>
            <button className="text-xl font-bold text-white h-10 bg-slate-400 rounded-lg md:hidden hover:opacity-50 transition-opacity ease-in-out duration-300" type="submit" onClick={getInstagramData}>Enter</button>
          </div>
        </div>

        <div className="flex flex-col bg-slate-200 shadow-lg p-4 rounded-lg border-t-8 border-slate-700 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 ease-in-out">
          <img className='w-6 mx-auto mb-2' src={tiktok} alt="" />
          <input className="text-2xl md:text-lg text-center px-2 py-1 mx-2 focus:outline-none bg-transparent border-b-2 border-blue-300 focus:border-blue-500 transition-colors ease-in-out duration-200 mb-4 dark:text-white" type="search"
            placeholder="@username"
            value={usernameTiktok}
            onChange={event => setUsernameTiktok(event.target.value)}
            onKeyDown={event => {
              if (event.keyCode === 13) {
                getTiktokData();
              }
            }} />
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 text-center mb-1 dark:text-white">{tiktokData === null ? 0 : tiktokData.data.stats.followerCount}</h1>
          <h2 className="uppercase text-md text-center dark:text-slate-300">Followers</h2>
          <button className="text-xl font-bold text-white h-10 bg-slate-400 rounded-lg md:hidden hover:opacity-50 transition-opacity ease-in-out duration-300" type="submit" onClick={getTiktokData}>Enter</button>
        </div>

        <div className="flex flex-col bg-slate-200 shadow-lg p-4 rounded-lg border-t-8 border-red-600 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 ease-in-out">
          <img className='w-6 mx-auto mb-2' src={youtube} alt="" />
          <input className="text-2xl md:text-lg text-center px-2 py-1 mx-2 focus:outline-none bg-transparent border-b-2 border-blue-300 focus:border-blue-500 transition-colors ease-in-out duration-200 mb-4 dark:text-white" type="search"
            placeholder="@id"
            value={usernameYoutube}
            onChange={event => setUsernameYoutube(event.target.value)}
            onKeyDown={event => {
              if (event.keyCode === 13) {
                getYoutubeData();
              }
            }} />
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 text-center mb-1 dark:text-white">{youtubeData == null ? 0 : youtubeData.items[0].statistics.subscriberCount}</h1>
          <h2 className="uppercase text-md text-center dark:text-slate-300">Subscribers</h2>
          <button className="text-xl font-bold text-white h-10 bg-slate-400 rounded-lg md:hidden hover:opacity-50 transition-opacity ease-in-out duration-300" type="submit" onClick={getYoutubeData}>Enter</button>
        </div>

        <div className="flex flex-col bg-slate-200 shadow-lg p-4 rounded-lg border-t-8 border-blue-400 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 ease-in-out">
          <img className='w-6 mx-auto mb-2' src={twitter} alt="" />
          <input className="text-2xl md:text-lg text-center px-2 py-1 mx-2 focus:outline-none bg-transparent border-b-2 border-blue-300 focus:border-blue-500 transition-colors ease-in-out duration-200 mb-4 dark:text-white" type="search"
            placeholder="@username"
            value={usernameTwitter}
            onChange={event => setUsernameTwitter(event.target.value)}
            onKeyDown={event => {
              if (event.keyCode === 13) {
                getTwitterData();
              }
            }} />
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 text-center mb-1 dark:text-white">{twitterData == null ? 0 : twitterData.follower_count}</h1>
          <h2 className="uppercase text-md text-center dark:text-slate-300">Followers</h2>
          <button className="text-xl font-bold text-white h-10 bg-slate-400 rounded-lg md:hidden hover:opacity-50 transition-opacity ease-in-out duration-300" type="submit" onClick={getTwitterData}>Enter</button>
        </div>

        <div className="flex flex-col bg-slate-200 shadow-lg p-4 rounded-lg border-t-8 border-blue-500 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 ease-in-out">
          <img className='w-6 mx-auto mb-2' src={facebook} alt="" />
          <input className="text-2xl md:text-lg text-center px-2 py-1 mx-2 focus:outline-none bg-transparent border-b-2 border-blue-300 focus:border-blue-500 transition-colors ease-in-out duration-200 mb-4 dark:text-white" type="search"
            placeholder="@username"
            value={usernameFacebook}
            onChange={event => setUsernameFacebook(event.target.value)}
            onKeyDown={event => {
              if (event.keyCode === 13) {
                getFacebookData();
              }
            }} />
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 text-center mb-1 dark:text-white">{facebokData == null ? 0 : facebokData.data.usersCount}</h1>
          <h2 className="uppercase text-md text-center dark:text-slate-300">Followers</h2>
          <button className="text-xl font-bold text-white h-10 bg-slate-400 rounded-lg md:hidden hover:opacity-50 transition-opacity ease-in-out duration-300" type="submit" onClick={getFacebookData}>Enter</button>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-slate-600 mt-20 mb-6 dark:text-slate-400">Additional Information</h1>
      <ExtraInfo instagramData={instagramData} tiktokData={tiktokData} youtubeData={youtubeData} twitterData={twitterData} facebookData={facebokData} />
    </div>
  );
}

export default App;
