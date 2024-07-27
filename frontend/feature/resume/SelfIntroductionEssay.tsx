import React from "react";

const SelfIntroductionEssay: React.FC = () => {
  return (
    <article
      className="max-w-2xl mx-auto p-8 rounded-lg my-10
      dark:shadow-gray-700 shadow-lg animate-focusIn"
    >
      <h1 className="text-4xl font-bold  mb-6 decoration-2">Who Am I?</h1>
      <p className=" mb-6 leading-relaxed">
        My name is <strong className="font-semibold ">Mark Wang</strong>,
        currently living in Calgary, Canada, with permanent resident status.
      </p>
      <p className="mb-6 leading-relaxed">
        With 16 years of experience as a software developer, I have built a
        solid foundation across various technology stacks.
      </p>
      <p className="mb-6 leading-relaxed">
        I am a quick learner, always ready to embrace new technologies and
        advance my skills.
      </p>

      <h2 className="text-3xl font-semibold  mt-8 mb-4  decoration-2">
        My Origins and Purpose
      </h2>
      <p className="mb-6 leading-relaxed">
        I come from China. Experiencing the extreme lockdowns of 2022 gave me a
        new understanding of freedom and dignity. I spent 30 years from birth to
        becoming aware of the world, and another 13 years grasping the essence
        of modern civilization.
      </p>
      <p className="mb-6 leading-relaxed">
        I am deeply grateful to the Canadian people and government for their
        commitment to diversity and inclusiveness, which allow me to share and
        uphold these same values and way of life. I am dedicated to working
        hard, being self-sufficient, and contributing to the community in return
        for the opportunity to live here.
      </p>
      <p className="mb-6 leading-relaxed">
        I know where I come from, why I am here, and what I should do and enjoy.
        I will never forget this journey!
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4 decoration-2">
        My Career Goals
      </h2>
      <ul className="list-disc list-inside space-y-3 mb-6 leading-relaxed">
        <li>
          <strong>Master</strong> full-stack development with a strong emphasis
          on frontend frameworks like ReactJS.
        </li>
        <li>
          <strong>Explore and integrate</strong> diverse tech stacks beyond the
          Java ecosystem, including TypeScript with Node.js, Python with Django,
          C# with .NET Core, and Ruby on Rails, etc.
        </li>
        <li>
          <strong>Leverage and enhance</strong> my expertise in Java enterprise
          development to drive innovation and deliver high-quality solutions.
        </li>
        <li>
          <strong>Expand</strong> my proficiency with leading cloud platforms
          such as AWS and Azure.
        </li>
        <li>
          <strong>Embrace relocation opportunities</strong> within Canada as
          needed.
        </li>
      </ul>
    </article>
  );
};

export default SelfIntroductionEssay;
