import SlideCard from "@/components/common/card/slide/SlideCard";
import { TeamMembers } from "@/config/team";

const TeamMemberSection = () => {
  return (
    <section className="glassomorphic p-10 my-5 -z-10 mx-auto">
      <h2 className="text-2xl mb-3 text-center">Team Members</h2>
      <div className="p-5 grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center">
        {TeamMembers &&
          TeamMembers.map((member, index) => (
            <SlideCard member={member} key={member.role! + index} />
          ))}
      </div>
    </section>
  );
};

export default TeamMemberSection;
