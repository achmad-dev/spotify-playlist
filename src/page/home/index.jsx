
// import React, { useEffect,useState }from 'react'
// import Card from '../../Component/Card';
// import Search from '../../Component/Search';
// import config from '../../lib/config/index'
// import { getUserProfile } from '../../lib/fetchApi/index';
// import Form from '../../Component/Form';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../../reducer/authReducer';

// const Home=()=>{

// const[tracks,setTracks]=useState([]);
// const [selectedTracksUri, setSelectedTracksUri] = useState([]);
// const [selectedTracks, setSelectedTracks] = useState([]);
// const [isInSearch, setIsInSearch] = useState(false);
// const [user, setUser] = useState({});
// const isLogin = useSelector((state)=>state.auth.isLogin);
// const dispatch = useDispatch();

//   useEffect(() => {
//     const accessTokenParams = new URLSearchParams(window.location.hash).get('#access_token');

//     if (accessTokenParams !== null) {
//       dispatch(login(accessTokenParams))
      

//       const setUserProfile = async () => {
//         try {
//           const response = await getUserProfile(accessTokenParams);
//           //called getUserProfile function from fetch
//           setUser(response);
//         } catch (e) {
//           alert ('error');
//         }
//       }

//       setUserProfile();
//     }
//   }, []); 

//   useEffect(() => {
//     if (!isInSearch) {
//       setTracks(selectedTracks);
//     }
//   }, [selectedTracksUri, selectedTracks, isInSearch]);

  
//   const onSuccessSearch = (searchTracks) => {
//     setIsInSearch(true);

//     const selectedSearchTracks = searchTracks.filter((track) => selectedTracksUri.includes(track.uri));

//     setTracks([...new Set([...selectedSearchTracks, ...searchTracks])])
//   }

//   const clearSearch = () => {
//     setTracks(selectedTracks);
//     setIsInSearch(false);
//   }

//  const generateSpotifyLinkAuthorize=()=>{
   
//     const state = Date.now().toString()
//     const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
//     return`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000&state=${state}&scope=${config.SPOTIFY_SCOPE}`
//   }
//   const toggleSelect = (track) => {
//     const uri = track.uri;

//     if (selectedTracksUri.includes(uri)) {
//       setSelectedTracksUri(selectedTracksUri.filter(item => item !== uri));
//       setSelectedTracks(selectedTracks.filter((item) => item.uri !== uri));
//     } else {
//       setSelectedTracksUri([...selectedTracksUri, uri]);
//       setSelectedTracks([...selectedTracks, track]);
//     }
//   }
 
  
//   return (
//     <div className="home">
//       {!isLogin && (
//         <main className="center">
//           <div>
//             <p>Login to Spotify</p>
//             <a href={generateSpotifyLinkAuthorize()} className="authorize">
//               Login
//             </a>
//           </div>
//         </main>
//       )}

//       {isLogin && (
//         <main className="container">
//           <div className="form">
//             <Form 
//               // accessToken={accessToken}
//               userId={user.id}
//               uriTracks={selectedTracksUri}
//             />
//           </div>
//           <div className="search__playlist">
//             <Search
//               // accessToken={accessToken}
//               onSuccess={onSuccessSearch}
//               onClearSearch={clearSearch}
//             />

//             <div className="">
//               {tracks.length === 0 && <p></p>}

//               <div className="cards">
               
//                    {tracks.map((item)=>(
//                     <Card key={item.id} title= {item.name} artist={item.artists[0].name} img={item.album.images[0].url} toggleSelect={() => toggleSelect(item)} />
//                 ))}
               
//               </div>
//             </div>
//           </div>
//         </main>
//       )}
//     </div>
//   );
// };

// export default Home

