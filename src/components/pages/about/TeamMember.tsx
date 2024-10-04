import SlideCard from "@/components/common/card/slide/SlideCard";
import { TeamMembers } from "@/config/team";

const TeamMemberSection = () => {
  return (
    <section className="glassomorphic p-10 my-5 -z-10">
      <h2 className="text-2xl mb-3 text-center">Team Members</h2>
      <div className="p-5 grid grid-cols-3 gap-5">
        {TeamMembers &&
          TeamMembers.map((member) => (
            <SlideCard member={member} key={member.role} />
          ))}
      </div>
    </section>
  );
};

export default TeamMemberSection;
