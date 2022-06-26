export default function ProfileBox() {
  return (
    <div className="center-normal w-full content-center flex justify-center">
      <div>
        <img
          src="/img/simple-transparent.png" width="300" height="300" alt='smallkirby' className="mx-auto"
        />
        <div className="text-center">
          <div className="mb-2">
            <p>Master's course student of University of Tokyo</p>
            <p>major in electronics and photonics (undergraduate)</p>
            <p>major in OS, virtualization, and security (graduate)</p>
            <p>interested in <em>undefined</em></p>
          </div>
          <div className="mt-4">
            <p>blog: <a href="https://smallkirby.hatenablog.com">newbie dive into binary</a></p>
            <p>github: <a href="https://github.com/smallkirby">smallkirby</a></p>
            <p>twitter: <a href="https://twitter.com/smallkirby">@smallkirby</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};
