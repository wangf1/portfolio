export default function Resume() {
  return (
    <div
      className="max-w-4xl mx-auto p-6 rounded-lg mt-10
        dark:shadow-gray-700 shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <ul className="list-disc pl-5 mb-6">
        <li>
          <strong>Software Development:</strong> 16 years
        </li>
        <li>
          <strong>Programming Languages:</strong> Java (16 years), JavaScript (5
          years), TypeScript (2 years), Python (2 years), SQL (10+ years),
          Rust/C++/Go/C#/Kotlin (0.1 Year)
        </li>
        <li>
          <strong>Frameworks and Libraries:</strong> Spring Boot (10+ years),
          React (2 years), Node.js (2 years), Django (1 year), Next.js (0.5
          years)
        </li>
        <li>
          <strong>Tools:</strong> Git (10+ years), IDEA (10+ Years), VS Code (5+
          Years)
        </li>
        <li>
          <strong>Methodologies, Cloud, Database, Testing, CI/CD, etc.:</strong>
          Scrum, SAP Cloud Platform, Cloud Foundry, SAP HANA, PostgreSQL,
          MongoDB, Mockito, Jenkins
        </li>
      </ul>
      <hr className="my-6" />
      <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
      <p className="text-lg font-semibold">
        Expert Software Engineer - SAP SuccessFactors, June 2019 to May 2024
      </p>
      <ul className="list-disc pl-5 mb-6">
        <li>
          Key Contributor for SuccessFactors Employee Central: The world’s
          leading Core HR solution.
        </li>
        <li>
          Implemented Complex Features:
          <ul className="list-disc pl-5">
            <li>
              Developed an event-driven system that exposed existing
              functionalities, adopted by two new microservices.
            </li>
            <li>
              Created APIs for batch jobs, achieving a 95% performance
              improvement.
            </li>
            <li>
              Refactored existing complex business logic to utilize design
              patterns, improving maintainability and extensibility.
            </li>
          </ul>
        </li>
        <li>
          Key Technologies: Java, Spring, Kafka, Redis, Docker, REST, SaaS and
          Cloud
        </li>
      </ul>
      <p className="text-lg font-semibold">
        Senior Software Engineer - SAP, July 2013 to June 2019
      </p>
      <ul className="list-disc pl-5 mb-6">
        <li>
          Key developer for SAP Cloud Platform Mobile Services, a set of
          cloud-native microservices.
        </li>
        <li>
          Developed Key Features:
          <ul className="list-disc pl-5">
            <li>
              Platform admin tooling using the SAP UI5 JavaScript framework.
            </li>
            <li>Two cloud-native microservices based on Spring Boot.</li>
            <li>
              Node.js service to pull and aggregate health statuses from
              multiple microservices.
            </li>
            <li>
              Refactored synchronized proxy service into an asynchronous
              responsibility chain inspired by the Java Servlet Filter chain,
              improving performance by 40%.
            </li>
          </ul>
        </li>
        <li>
          Key Technologies: Java, Spring Boot, JavaScript and SAP UI5, Node.js,
          Cloud Native
        </li>
      </ul>
      <p className="text-lg font-semibold">
        Software Engineer - SAP Sybase, April 2008 to July 2013
      </p>
      <ul className="list-disc pl-5 mb-6">
        <li>
          Key developer for Sybase Unwired Platform: An end-to-end mobile
          platform for enterprise application development.
        </li>
        <li>
          Implemented Key Features:
          <ul className="list-disc pl-5">
            <li>Flex UI and Java API for platform management.</li>
            <li>Advanced relay server outbound enabler management.</li>
            <li>Admin configuration changes auditing using AspectJ AOP.</li>
          </ul>
        </li>
        <li>
          Key Technologies: Java, JEE, AspectJ AOP, Eclipse Plug-in Development
        </li>
      </ul>
      <hr className="my-6" />
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <ul className="list-disc pl-5 mb-6">
        <li>
          <strong>Master&apos;s Degree</strong> in Software Engineering,
          Shanghai Jiao Tong University, Shanghai, China, September 2005 - April
          2008
        </li>
        <li>
          <strong>Bachelor&apos;s Degree</strong> in Electronics and
          Communications Engineering, Tianjin University, Tianjin, China,
          September 1999 - June 2003
        </li>
      </ul>
      <hr className="my-6" />
      <h2 className="text-2xl font-semibold mb-4">Links</h2>
      <ul className="list-disc pl-5 mb-6">
        <li>
          <a
            href="https://www.linkedin.com/in/feng-wang-ba3736033"
            className="text-blue-600 underline"
          >
            LinkedIn Profile
          </a>
        </li>
        <li>
          <a
            href="https://github.com/wangf1"
            className="text-blue-600 underline"
          >
            GitHub Profile
          </a>
        </li>
      </ul>
    </div>
  );
}
