import { HeadText } from "@/animations/HeadText";
import { TextReveal } from "@/animations/TextReveal";

export default function AboutMe() {
    const title = ["I'd be splicing cells,\nbut understanding 1s and 0s\nlook better"]
    const p1 = ["I'm Ichie Chinemerem Richard, a graduate of the University of Nigeria with a BSc degree in Medical Laboratory Sciences. Transitioning into the dynamic realm of technology, I've since thrived as a Full Stack Engineer."]
    const p2 = ["My professional journey is defined by a commitment to readability, best practices, and the elegance of simplicity over complexity. As a developer, I prioritize crafting solutions that not only work efficiently but are also easily comprehensible."]
    const p3 = ["In my role as a collaborator, I bring a holistic approach. I value thorough code reviews, emphasizing not only issue identification but also knowledge sharing and mentorship. I believe in enhancing the team's overall coding standards and am adaptable to different work styles. Actively participating in team discussions, I contribute ideas and provide constructive feedback, fostering an environment of continual improvement."]
    const p4 = ["Beyond coding, I find joy in the harmonies of music, particularly electric, rock and roll, and the captivating beats of amapiano. I also revel in the world of cinema, appreciating the art of storytelling through movies."]
    const p5 = ["My professional journey is rooted in merging technical prowess with a friendly and welcoming approach to create impactful solutions. Let's connect and explore the endless possibilities of tech together. I firmly believe in the value of continuous learning and development, always staying abreast of industry trends and embracing new challenges."]

    return(
        <div className="w-[50%] max-md:w-full flex flex-col gap-7">
            <HeadText
                el="h1"
                text={title}
                className="text-2xl font-taruno"
                once
            />

            <TextReveal
                text={p1}
                className="font-varuna text-tr-black dark:text-tr-white"
            />

            <TextReveal
                text={p2}
                className="font-varuna text-tr-black dark:text-tr-white"
            />

            <TextReveal
                text={p3}
                className="font-varuna text-tr-black dark:text-tr-white"
            />

            <TextReveal
                text={p4}
                className="font-varuna text-tr-black dark:text-tr-white"
            />

            <TextReveal
                text={p5}
                className="font-varuna text-tr-black dark:text-tr-white"
            />
        </div>
    )
}