import { LinkedinIcon, SquareArrowOutUpRightIcon } from "lucide-react";

export default function Contact() {
  return (
    <div
      className="max-w-4xl mx-auto p-8 shadow-lg dark:shadow-gray-700 rounded-lg
          mt-10 animate-slipIn"
    >
      <h1 className="text-3xl font-bold  mb-6 text-center">
        Contact Information
      </h1>
      <ul className="list-disc pl-5 mb-6 space-y-4 text-lg">
        <li>
          <strong>Address:</strong> Toronto, Ontario (Flexible to relocate
          within Canada)
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:*@gmail.com"
            className="text-blue-500 dark:text-blue-300 hover:underline 
            pointer-events-none"
          >
            *@gmail.com
          </a>
        </li>
        <li>
          <strong>Phone:</strong> 403-xxx-xxxx (Please email me first)
        </li>
        <li>
          <div className="flex space-x-2 w-fit">
            <strong>Social Media:</strong>
            <a
              href="https://www.linkedin.com/in/*"
              target="_blank"
              rel="noopener noreferrer"
              className=" flex text-blue-500 dark:text-blue-300 hover:underline
                  pointer-events-none"
            >
              <LinkedinIcon />
              (Hidden)
              <SquareArrowOutUpRightIcon size={15} />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
