import styles from "./Team.module.css";
import TeamMemberCard from "../../../Components/TeamMemberCard/TeamMemberCard";
import Adnan from "../../../Assets/Images/Team/Adnan.png";
import Jessica from "../../../Assets/Images/Team/Jessica.jpg";
import Ethan from "../../../Assets/Images/Team/Ethan.jpg";
import Pratik from "../../../Assets/Images/Team/Pratik.jpg";
import Pamela from "../../../Assets/Images/Team/Pamela.jpg";
import Suarez from "../../../Assets/Images/Team/Suarez.jpg";
import Sania from "../../../Assets/Images/Team/Sania.jpg";
import Tara from "../../../Assets/Images/Team/Tara.jpg";

const TEAM_CARDS = [
  {
    id: "card-1",
    name: "Adnan Haider",
    imgSrc: Adnan,
    jobDescription: "Founder",
    altText: "Team member image",
  },
  {
    id: "card-2",
    name: "Jessica Riley",
    imgSrc: Jessica,
    jobDescription: "General Manager",
    altText: "Team member image",
  },
  {
    id: "card-3",
    name: "Ethan Turner",
    imgSrc: Ethan,
    jobDescription: "Senior Editor",
    altText: "Team member image",
  },
  {
    id: "card-4",
    name: "Pratik Agarwal",
    imgSrc: Pratik,
    jobDescription: "Editor",
    altText: "Team member image",
  },
  {
    id: "card-5",
    name: "Pamela Avery",
    imgSrc: Pamela,
    jobDescription: "Tech Lead",
    altText: "Team member image",
  },
  {
    id: "card-6",
    name: "Suarez Navarro",
    imgSrc: Suarez,
    jobDescription: "Senior Developer",
    altText: "Team member image",
  },
  {
    id: "card-7",
    name: "Sania Sheikh",
    imgSrc: Sania,
    jobDescription: "Developer and Designer",
    altText: "Team member image",
  },
  {
    id: "card-8",
    name: "Tara Davidson",
    imgSrc: Tara,
    jobDescription: "Developer and Designer",
    altText: "Team member image",
  },
];
const Team = () => {
  const teamMemberInfo = TEAM_CARDS.map((teamMember) => (
    <TeamMemberCard
      id={teamMember.id}
      key={teamMember.key}
      name={teamMember.name}
      imgSrc={teamMember.imgSrc}
      jobDesc={teamMember.jobDescription}
      altText={teamMember.altText}
    />
  ));
  return (
    <div className={styles.lgScrBackground}>
      <section id="team" className={styles.sectionContainer}>
        <div className={styles.contentContainer}>
          <h2 className={styles.heading}>Meet the Team</h2>
          <div className={styles.teamMemberCardWrapper}>{teamMemberInfo}</div>
        </div>
      </section>
    </div>
  );
};

export default Team;
