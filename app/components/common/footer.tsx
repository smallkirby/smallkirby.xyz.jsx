export default function Footer() {
  return (
    <footer
      className="
        border-t
        fixed
        w-full
        text-center
        z-50
        h-6
        bottom-0
        border-skblack-light
        bg-skblack-dark
      "
    >
      <div className="flex justify-items-stretch justify-between">
        <div className="md:flex hidden justify-start w-1/5 text-lfet">
          <div className="mx-5">
            <p>NORMAL</p>
          </div>
          <div className="mx-5">
            <p>master*</p>
          </div>
        </div>

        <div className="md:w-auto w-2/5">
          <p>smallkirby few rights reserved.</p>
        </div>

        <div className="md:flex justify-end w-1/5 text-right">
          <div className="mx-5">
            <p>0% 1/152 ln:1</p>
          </div>
          <div className="mx-5">
            <p>utf-8[unix] LF</p>
          </div>
        </div>
      </div>
    </footer> );
};
