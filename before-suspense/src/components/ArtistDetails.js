import React from 'react';
import { Spinner } from './Spinner';
import { fetchArtistJSON } from '../api';

class ArtistDetails extends React.Component {
  state = {
    artist: null,
    isLoading: true,
  };

  componentDidMount() {
    fetchArtistJSON(this.props.id).then(
      artist => this.setState({ isLoading: false, artist }),
      error => this.setState({ isLoading: false, error })
    );
  }

  render() {
    const { artist, isLoading } = this.state;
    if (isLoading) {
      return <Spinner className="center" />;
    }
    return <ArtistHeader artist={artist} />;
  }
}

function ArtistHeader({ artist }) {
  return (
    <div className="heading">
      <img
        className="artist-image"
        src={artist.images[0].url}
        alt={artist.name}
      />
      <div>
        <h1>{artist.name}</h1>
        <div className="meta">
          {artist.followers.total.toLocaleString()} followers
        </div>
      </div>
    </div>
  );
}

export default ArtistDetails;

// class ArtistConcerts extends React.Component {
//   handleClick = () => {
//     window.FakeStripe.charge();
//   };

//   render() {
//     const { concert } = this.props.artist;
//     return concert ? (
//       <div className="artist-concerts">
//         <h3>Next Concert</h3>
//         <div className="row ">
//           <div>
//             <h4>{concert.venue}</h4>
//             <div>
//               {concert.cityState}, {concert.date}
//             </div>
//           </div>
//           <button onClick={this.handleClick}>Buy Tickets</button>
//         </div>
//       </div>
//     ) : null;
//   }
// }
