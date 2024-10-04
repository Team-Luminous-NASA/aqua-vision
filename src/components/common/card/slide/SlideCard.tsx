import { ITeamMember } from "@/config/team";
import styles from "@/styles/components/cards/slide.module.css";
import React from "react";

const SlideCard = ({ member }: { member: ITeamMember }) => {
  if (member.bgClassName) {
    return (
      <a
        href={member.socialLinks?.[0]?.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={`${styles.cardContainer}`}>
          <div className={styles.card}>
            {member.bgClassName && (
              <div
                className={`${styles.frontContent} bg-${member.bgClassName} bg-cover bg-no-repeat  bg-black/65 bg-blend-overlay text-2xl`}
              >
                <div>{member.role}</div>
              </div>
            )}
            <div className={styles.content}>
              <p className={styles.heading}>{member.name}</p>
              <p className="text-xl text-black">{member.role}</p>
              <div className="flex items-center justify-around">
                {member.socialLinks &&
                  member.socialLinks.map(
                    (link) =>
                      link.icon &&
                      React.createElement(link.icon, {
                        key: link.link,
                        className: "w-5 h-5",
                      })
                  )}
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }
};

export default SlideCard;
