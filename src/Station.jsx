export default function Station(props) {
  const { channel } = props;

  return (
    <div className="bg-red-500">
      <img src={channel.image} width={100} height={100} />
      {channel.name}
      <audio controls src={channel.liveaudio.url} type="audio/mpeg" />
    </div>
  );
}
