export default function Station(props) {
  const { channel } = props;

  return (
    <div className="flex flex-col mb-4 border border-black rounded-m w-fit mt-4 ml-4">
      <div style={{ backgroundColor: `#${channel.color}` }}>
        <div className="flex flex-row">
          <img className="h-32 w-32" src={channel.image} />
          <audio
            className="mt-8"
            controls
            src={channel.liveaudio.url}
            type="audio/mpeg"
          />
        </div>
      </div>
    </div>
  );
}
