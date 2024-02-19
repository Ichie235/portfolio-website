import { HeadText } from "@/animations/HeadText";
import { TextReveal } from "@/animations/TextReveal";
import Link from "next/link";

export default function AboutMe() {
  const title = [
    "I'd be splicing cells,\nbut understanding 1s and \n0s look better",
  ];
  const smallerTitle = [
    "I'd be splicing cells \nbut understanding \n1s and 0s look better",
  ];
  const p1 = [
    "I'm Ichie Chinemerem Richard, a graduate of the University of Nigeria with a BSc degree in Medical Laboratory Sciences. Transitioning into the dynamic realm of technology, I've since thrived as a Full Stack Engineer.",
  ];
  const p2 = [
    "My professional journey is defined by a commitment to readability, best practices, and the elegance of simplicity over complexity. As a developer, I prioritize crafting solutions that not only work efficiently but are also easily comprehensible.",
  ];
  const p3 = [
    "In my role as a collaborator, I bring a holistic approach. I value thorough code reviews, emphasizing not only issue identification but also knowledge sharing and mentorship. I believe in enhancing the team's overall coding standards and am adaptable to different work styles. Actively participating in team discussions, I contribute ideas and provide constructive feedback, fostering an environment of continual improvement.",
  ];
  const p4 = [
    "Beyond coding, I find joy in the harmonies of music, particularly electric, rock and roll, and the captivating beats of amapiano. I also revel in the world of cinema, appreciating the art of storytelling through movies.",
  ];
  const p5 = [
    "My professional journey is rooted in merging technical prowess with a friendly and welcoming approach to create impactful solutions. Let's connect and explore the endless possibilities of tech together. I firmly believe in the value of continuous learning and development, always staying abreast of industry trends and embracing new challenges.",
  ];

  return (
    <div className="w-full mx-auto md:mx-0  md:w-full lg:w-[75%] max-md:w-full flex flex-col gap-7">
      <HeadText
        el="h1"
        text={title}
        className="hidden md:block text-2xl font-taruno"
        once
      />
      <HeadText
        el="h2"
        text={smallerTitle}
        className="custom-about-head w-fit text-base  font-taruno md:hidden"
        once
      />
      <TextReveal
        text={p1}
        className="custom-about-text font-varuna text-[#5e5f69] dark:text-white"
      />

      <TextReveal
        text={p2}
        className=" custom-about-text font-varuna text-[#5e5f69] dark:text-white"
      />

      <TextReveal
        text={p3}
        className="custom-about-text font-varuna text-[#5e5f69] dark:text-white"
      />

      <TextReveal
        text={p4}
        className="custom-about-text font-varuna text-[#5e5f69] dark:text-white"
      />

      <TextReveal
        text={p5}
        className="custom-about-text font-varuna text-[#5e5f69] dark:text-white"
      />
      <h2
        id="soft-skills"
        className="font-incognito before:content-['#'] before:hidden hover:before:sm:inline-block hover:before:hidden before:absolute lg:before:-left-5 before:-left-4 lg:before:text-2xl before:text-xl block before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-white relative font-bold tracking-tight dark:text-white lg:text-4xl text-3xl text-[#5e5f69] mt-8 mb-4"
      >
        <a
          href="#soft-skills"
          className="custom-about-text text-black dark:text-white"
        >
          Soft Skills
        </a>
      </h2>

      <p className="custom-about-text text-[#5e5f69] dark:text-white">
        There are specific skills I&apos;ve acquired along my journey that merit
        recognition:
      </p>
      <ul className=" list-[square] mt-2 ml-5  text-[#5e5f69] dark:text-white">
        <li className="mb-4">
          <strong className="font-bold ">Growth Mindset:</strong> I thrive on
          delivering tasks independently, driven by a commitment to efficiency.
          Similarly, my embrace of a growth mindset propels my journey of
          self-directed growth, where challenges are opportunities for learning
          and setbacks fuel resilience. With a dedication to continuous
          improvement, I contribute autonomously while fostering innovation
          within the team.
        </li>
        <li className="mb-4">
          <strong className="font-bold">
            Ability to work with little supervision:{" "}
          </strong>
          I&apos;m all about rocking tasks with minimal hand-holding. From start
          to finish. No need for micromanaging here – I&apos;ve got it covered!
        </li>
        <li className="mb-4">
          <strong className="font-bold">Team Work: </strong>I excel in
          collaborative environments, leveraging diverse perspectives to achieve
          shared goals effectively. With a strong belief in the power of
          teamwork, I actively foster open communication, trust, and synergy
          within the team. By embracing collective success over individual
          achievements, I contribute wholeheartedly to a positive team culture,
          driving innovation and achieving remarkable outcomes together.
        </li>
      </ul>
    </div>
  );
}
