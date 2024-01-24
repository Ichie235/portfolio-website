import { HeadText } from "@/animations/HeadText";
import { TextReveal } from "@/animations/TextReveal";
import Link from "next/link";

export default function AboutMe() {
  const title = [
    "I'd be splicing cells,\nbut understanding 1s and 0s\n look better",
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
    <div className="w-[50%] max-md:w-full flex flex-col gap-7">
      <HeadText el="h1" text={title} className="hidden md:block text-2xl font-taruno" once />
      <HeadText el="h2" text={smallerTitle} className=" w-fit text-base  font-taruno md:hidden" once />
      <TextReveal
        text={p1}
        className="font-varuna text-[#5e5f69] dark:text-white"
      />

      <TextReveal
        text={p2}
        className="font-varuna text-[#5e5f69] dark:text-white"
      />

      <TextReveal
        text={p3}
        className="font-varuna text-[#5e5f69] dark:text-white"
      />

      <TextReveal
        text={p4}
        className="font-varuna text-[#5e5f69] dark:text-white"
      />

      <TextReveal
        text={p5}
        className="font-varuna text-[#5e5f69] dark:text-white"
      />
      <h2
        id="soft-skills"
        className="font-incognito before:content-['#'] before:hidden hover:before:sm:inline-block hover:before:hidden before:absolute lg:before:-left-5 before:-left-4 lg:before:text-2xl before:text-xl block before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-white relative font-bold tracking-tight dark:text-white lg:text-4xl text-3xl text-[#5e5f69] mt-8 mb-4"
      >
        <a href="#soft-skills">Soft Skills</a>
      </h2>

      <p className="">
        Certain skills I have picked along the way that deserves mentioning:
      </p>
      <ul className="list-[square] mt-2 ml-5">
        <li className="mb-4">
          <strong className="font-bold dark:text-zinc-300 text-zinc-700">
            Attention to detail
          </strong>
          : I take pleasure in creating designs and UIs with careful precision,
          emphasizing quality over quantity.
        </li>
        <li className="mb-4">
          <strong className="font-bold dark:text-zinc-300 text-zinc-700">
            Open-source/Collaboration:
          </strong>{" "}
          I founded a community on GitHub called{" "}
          <Link
            className="dark:text-blue-400 text-blue-500 hover:underline"
            href="https://github.com/CommunityPro"
            rel="noreferrer noopener"
            target="_blank"
          >
            Communitypro{" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="inline"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z" />
              <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z" />
            </svg>
          </Link>{" "}
          that helps newbie developers learn how to contribute to open-source
          projects and collaborate in building together. Currently we are over{" "}
          <Link
            className="dark:text-blue-400 text-blue-500 hover:underline"
            href="https://github.com/orgs/CommunityPro/people"
            rel="noreferrer noopener"
            target="_blank"
          >
            400{" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="inline"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z" />
              <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z" />
            </svg>
          </Link>{" "}
          people strong with room for growth.
        </li>
        <li className="mb-4">
          <strong className="font-bold dark:text-zinc-300 text-zinc-700">
            Ability to work with little supervision:{" "}
          </strong>
          I understand people are busy and would love to get things done timely,
          so I do my best in delivering assignments and projects with little
          supervision, sparing you the need to closely manage/oversee my work.
        </li>
      </ul>
    </div>
  );
}
