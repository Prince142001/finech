import Amazon from "../../assets/amazon.png";
import Loom from "../../assets/loom.png";
import DropBox from "../../assets/dropbox.png";
import Slack from "../../assets/slack.png";
import Mailchimp from "../../assets/mailchimp.png";
import Medium from "../../assets/medium.png";
import Twitch from "../../assets/twitch.png";
import Discord from "../../assets/discord.png";

function Company() {
  const companies = [
    { img: Slack, name: "Slack" },
    { img: Amazon, name: "Amazon" },
    { img: DropBox, name: "DropBox" },
    { img: Loom, name: "Loom" },
    { img: Mailchimp, name: "Mailchimp" },
    { img: Medium, name: "Medium" },
    { img: Twitch, name: "Twitch" },
    { img: Discord, name: "Discord" },
  ];

  return (
    <>
      {companies.map((value, index) => (
        <div key={index} className="mx-5">
          <img
            src={value.img}
            alt={value.name}
            className="w-full h-[39.09px] object-contain"
          />
        </div>
      ))}
    </>
  );
}

export default Company;
