import { ITeamMember } from "@/config/team";
import styles from "@/styles/components/cards/slide.module.css";

const SlideCard = ({ member }: { member: ITeamMember }) => {
  if (member) {
    return (
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div
            className={`${styles.frontContent} bg-${member.bgClassName} bg-cover bg-no-repeat  bg-black/65 bg-blend-overlay`}
          >
            <p>{member.role}</p>
          </div>
          <div className={styles.content}>
            <p className={styles.heading}>
              <a
                href={"https://aqua-vision.vercel.app"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {member.name}
              </a>
            </p>
            <p className="text-xl text-black">{member.role}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default SlideCard;
