export default function Contact() {
  return (
    <div
      className="max-w-4xl mx-auto p-8 shadow-lg dark:shadow-gray-700 rounded-lg
          mt-10"
    >
      <h1 className="text-3xl font-bold  mb-6 text-center">
        Contact Information
      </h1>
      <ul className="list-disc pl-5 mb-6 space-y-4 text-lg">
        <li>
          <strong>Address:</strong> Calgary, Alberta (Flexible to relocate
          within Canada)
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:armstrong.wang2000@gmail.com"
            className="text-blue-500 hover:underline"
          >
            armstrong.wang2000@gmail.com
          </a>
        </li>
        <li>
          <strong>Phone:</strong> 403-xxx-xxxx (Please email me first)
        </li>
      </ul>
    </div>
  );
}
