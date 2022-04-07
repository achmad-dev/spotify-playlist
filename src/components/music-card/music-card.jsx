import SpotifyButton from "../button/button";
import Link from "../link/link";

//make music card component with selected function
const MusicCard = ({ data, isSelected, handleSelect }) => {
    // abstract out the data we want to use
    const { album, artists, external_urls, name } = data;
    //make artist text function from artists array
    const artistText = artists.map((artist, idx) => {
        return (
            <Link href={artist.external_urls.spotify} key={artist.id}>
                {text}
            </Link>
        );
    });

    //return the card
    return (
        //make the card with a classname of card
        <div className="card">
            {/* make the image container with a classname of imageContainer */}
            <div className="imageContainer">
                {/* make the link with the album art */}
                <Link href={album.external_urls.spotify}>
                    {/* make the image with the album art */}
                    <img
                        className="albumArt"
                        src={album.images[1].url}
                        alt={album.name}
                    />
                </Link>
            </div>
            {/* make the description with a classname of description */}
            <div className="description">
                {/* make the div with the title and artist text */}
                <div>
                    {/* make the h4 with the title and artist text */}
                    <h4 className="title">
                        {/* make the link with the title */}
                        <Link href={external_urls.spotify}>{name}</Link>
                        {/* make the artist text */}
                        - {artistText}
                    </h4>
                    {/* make the h5 with the album text */}
                    <h5 className="albumText">
                        {/* make the link with the album text */}
                        <Link href={album.external_urls.spotify}>
                            {album.name}
                        </Link>
                    </h5>
                </div>
                {/* make the div with the button */}
                <div>
                    {/* make the button with the selected function */}
                    <SpotifyButton
                        variant={isSelected ? "gray" : "default"}
                        onClick={() => handleSelect(data.uri)}
                    >
                        {/* if the card is selected, say selected, else say select */}
                        {isSelected ? "Selected" : "Select"}
                    </SpotifyButton>
                </div>
            </div>
        </div>
    );
};
//export the music card component
export default MusicCard;