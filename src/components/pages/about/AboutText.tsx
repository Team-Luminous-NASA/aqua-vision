import Image from "next/image";

const AboutText = () => {
  return (
    <section className="glassomorphic p-10 my-5 grid grid-cols-2 -z-10">
      <div className="p-5">
        <h2 className="text-2xl mb-3">Team Luminous</h2>
        <p className="text-justify">
          Hello there, we are a group of passionate multidisciplinary background
          students from Bangladesh who are fascinated by science, technology &
          space exploration. We are creating an interactive platform to help
          students around the world easily understand NASA&apos;s PACE satellite
          and its mission to study Earth&apos;s oceans and atmosphere in
          NASA&apos;s International Space Apps Challenge. Our goal is to
          contribute our skills and knowledge while inspiring students passion
          for the space.
        </p>
      </div>
      <div className="p-5 text-center grid place-content-center">
        <Image
          src="/team/team-logo.jpg"
          alt="Team Luminous"
          width={500}
          height={500}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default AboutText;
