import MusicCard from '../MusicCard';

const PlayList = ({ data }) => {
  return (
    <div className='list-container'>
      {data.map((list) => (
        <MusicCard key={list.id} data={list} />
      ))}
    </div>
  );
};

export default PlayList;
