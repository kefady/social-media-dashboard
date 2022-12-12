import instagram from './../images/instagram.svg'
import tiktok from './../images/tiktok.svg'
import youtube from './../images/youtube.svg'
import twitter from './../images/twitter.svg'
import facebook from './../images/facebook.svg'

function ExtraInfo({ instagramData, tiktokData, youtubeData, twitterData, facebookData }) {
	return (
		<>
			<div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10 max-w-sm sm:max-w-none mx-auto">
					<div className="flex flex-col bg-slate-200 shadow-lg p-4 rounded-md dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 ease-in-out">
						<div className="flex justify-between mb-1">
							<h1 className="text-xl font-bold text-slate-900 dark:text-white">{instagramData == null ? 'Fullname' : instagramData[0].full_name === "" ? "No data" : instagramData[0].full_name}</h1>
							<img className="w-6" src={instagram} alt='' />
						</div>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Biography:</span> {instagramData == null ? 'no data' : instagramData[0].biography === "" ? "The user doesn't have a biography" : instagramData[0].biography}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Verification:</span> {instagramData == null ? 'no data' : instagramData[0].is_verified === true ? 'verified' : 'not verified'}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Privacy:</span> {instagramData == null ? 'no data' : instagramData[0].is_private === true ? 'private account' : 'open account'}.</p>
					</div>

					<div className="flex flex-col bg-slate-200 shadow-lg p-4 rounded-md dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 ease-in-out">
						<div className="flex justify-between mb-1">
							<h1 className="text-xl font-bold text-slate-900 dark:text-white">{tiktokData == null ? 'Fullname' : tiktokData.data.user.nickname}</h1>
							<img className="w-6" src={tiktok} alt='' />
						</div>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Signature:</span> {tiktokData == null ? 'no data' : tiktokData.data.user.signature === "" ? "The user doesn't have a signature" : tiktokData.data.user.signature}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Verification:</span> {tiktokData == null ? 'no data' : tiktokData.data.user.verified === true ? 'verified' : 'not verified'}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Privacy:</span> {tiktokData == null ? 'no data' : tiktokData.data.user.privateAccount === true ? 'private account' : 'open account'}.</p>
					</div>

					<div className="flex flex-col bg-slate-200 shadow-lg p-4 rounded-md dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 ease-in-out">
						<div className="flex justify-between mb-1">
							<h1 className="text-xl font-bold text-slate-900 dark:text-white">{youtubeData == null ? 'Fullname' : youtubeData.items[0].snippet.title}</h1>
							<img className="w-6" src={youtube} alt='' />
						</div>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Description:</span> {youtubeData == null ? 'no data' : youtubeData.items[0].snippet.description.replace(/\s/g, '') === "" ? "The user doesn't have a description" : youtubeData.items[0].snippet.description}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Country:</span> {youtubeData == null ? 'no data' : youtubeData.items[0].snippet.country}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Registrated:</span> {youtubeData == null ? 'no data' : youtubeData.items[0].snippet.publishedAt.slice(0, -10)}.</p>
					</div>

					<div className="flex flex-col bg-slate-200 shadow-lg p-4 rounded-md dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 ease-in-out">
						<div className="flex justify-between mb-1">
							<h1 className="text-xl font-bold text-slate-900 dark:text-white">{twitterData == null ? 'Fullname' : twitterData.name}</h1>
							<img className="w-6" src={twitter} alt='' />
						</div>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Description:</span> {twitterData == null ? 'no data' : twitterData.description === "" ? "The user doesn't have a description" : twitterData.description}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Verification:</span> {twitterData == null ? 'no data' :twitterData.is_verified === true ? 'verified' : 'not verified'}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Privacy:</span> {twitterData == null ? 'no data' : twitterData.is_private === true ? 'private account' : 'open account'}.</p>
					</div>

					<div className="flex flex-col bg-slate-200 shadow-lg p-4 rounded-md dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 ease-in-out">
						<div className="flex justify-between mb-1">
							<h1 className="text-xl font-bold text-slate-900 dark:text-white">{facebookData == null ? 'Fullname' : facebookData.data.name}</h1>
							<img className="w-6" src={facebook} alt='' />
						</div>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Description:</span> {facebookData == null ? 'no data' : facebookData.data.description === "" ? "The user doesn't have a description" : facebookData.data.description}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Privacy:</span> {facebookData == null ? 'no data' : facebookData.data.isClosed === true ? ' private account' : ' open account'}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Blocked:</span> {facebookData == null ? 'no data' : facebookData.data.isBlocked === true ? ' yes' : ' no'}.</p>
					</div>
				</div>
			</div>

			<div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10 max-w-sm sm:max-w-none mx-auto">
					<div className="flex flex-col bg-slate-200 shadow-lg p-4 rounded-md dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 ease-in-out">
						<div className="flex justify-between mb-1">
							<h1 className="text-xl font-bold text-slate-900 dark:text-white">More info</h1>
							<img className="w-6" src={instagram} alt='' />
						</div>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Category:</span> {instagramData == null ? 'no data' : instagramData[0].category == null ? 'no category' : instagramData[0].category}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Followers:</span> {instagramData == null ? 'no data' : instagramData[0].follower_count + ' users'}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Following:</span> {instagramData == null ? 'no data' : instagramData[0].following_count + ' users'}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Media:</span> {instagramData == null ? 'no data' : instagramData[0].media_count + ' media'}.</p>
					</div>

					<div className="flex flex-col bg-slate-200 shadow-lg p-4 rounded-md dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 ease-in-out">
						<div className="flex justify-between mb-1">
							<h1 className="text-xl font-bold text-slate-900 dark:text-white">More info</h1>
							<img className="w-6" src={tiktok} alt='' />
						</div>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Likes:</span> {tiktokData == null ? 'no data' : tiktokData.data.stats.heartCount + ' likes'}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Followers:</span> {tiktokData == null ? 'no data' : tiktokData.data.stats.followerCount + ' users'}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Following:</span> {tiktokData == null ? 'no data' : tiktokData.data.stats.followingCount + ' users'}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Video:</span> {tiktokData == null ? 'no data' : tiktokData.data.stats.videoCount + ' videos'}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Open favorite:</span> {tiktokData == null ? 'no data' : tiktokData.data.user.openFavorite === true ? ' yes' : ' no'}.</p>
					</div>

					<div className="flex flex-col bg-slate-200 shadow-lg p-4 rounded-md dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 ease-in-out">
						<div className="flex justify-between mb-1">
							<h1 className="text-xl font-bold text-slate-900 dark:text-white">More info</h1>
							<img className="w-6" src={youtube} alt='' />
						</div>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Views:</span> {youtubeData == null ? 'no data' : youtubeData.items[0].statistics.viewCount + ' views'}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Subscribers:</span> {youtubeData == null ? 'no data' : youtubeData.items[0].statistics.subscriberCount + ' subscribers'}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Video:</span> {youtubeData == null ? 'no data' : youtubeData.items[0].statistics.videoCount + ' videos'}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Custom URL:</span> {youtubeData == null ? 'no data' : youtubeData.items[0].snippet.customUrl}.</p>
					</div>

					<div className="flex flex-col bg-slate-200 shadow-lg p-4 rounded-md dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 ease-in-out">
						<div className="flex justify-between mb-1">
							<h1 className="text-xl font-bold text-slate-900 dark:text-white">More info</h1>
							<img className="w-6" src={twitter} alt='' />
						</div>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Tweets:</span> {twitterData == null ? 'no data' : twitterData.number_of_tweets + ' twers'}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Followers:</span> {twitterData == null ? 'no data' : twitterData.follower_count + ' users'}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Following:</span> {twitterData == null ? 'no data' : twitterData.following_count + ' users'}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Location:</span> {twitterData == null ? 'no data' : twitterData.location === '' ? 'no data' : twitterData.location}.</p>
						<p className="text-md text-slate-900 dark:text-white"><span className="font-bold">Registrated:</span> {twitterData == null ? 'no data' : twitterData.creation_date.slice(4, 7) + '-' + twitterData.creation_date.slice(8, 10) + '-' + twitterData.creation_date.slice(26, 30)}.</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default ExtraInfo;