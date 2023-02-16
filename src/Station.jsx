export default function Station(props) {
  const { channel } = props;

  return (
    <div style={{ backgroundColor: `#${channel.color}` }}>
      <img src={channel.image} width={100} height={100} />
      {channel.name}
      <audio controls src={channel.liveaudio.url} type="audio/mpeg" />
    </div>
  );
}
