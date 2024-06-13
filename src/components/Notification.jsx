import { gihub } from "../assets";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5 `}
    >
      <a
        className="flex flex-row justify-between items-center text-xl"
        href="https://github.com/Dungha125"
      >
        <img
          className="mx-2 "
          src={gihub}
          width={20}
          height={20}
          alt="github"
        />{" "}
        {title}
      </a>
    </div>
  );
};

export default Notification;
