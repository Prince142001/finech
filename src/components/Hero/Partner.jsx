import Amazon from "../../assets/amazon.png";
import Loom from "../../assets/loom.png";
import DropBox from "../../assets/dropbox.png";
import Slack from "../../assets/slack.png";

function Partner() {
  const partners = [
    {
      img: Slack,
      name: "Slack",
    },
    {
      img: Amazon,
      name: "Amazon",
    },
    {
      img: DropBox,
      name: "DropBox",
    },
    {
      img: Loom,
      name: "Loom",
    },
  ];
  return (
    <div className="absolute bottom-8">
      <p className="text-white text-lg leading-5 font-medium">
        Partners in Financial Success
      </p>
      <ul className="mt-5 flex items-center gap-14">
        {partners.map((value, index) => {
          return (
            <li key={index}>
              <img
                src={value.img}
                alt={value.name}
                className="w-full h-10 object-contain"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Partner;
