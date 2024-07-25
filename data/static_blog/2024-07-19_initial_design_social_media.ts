export default {
  _id: "2024-07-19_initial_design_social_media",
  title: "Design a social media app",
  date: "2024-07-19T22:15:21Z",
  tags: [
    "Design",
    "Programming",
    "Social Media",
    "Django",
    "MySQL",
    "Redis",
    "Python",
  ],
  summary: "Design a social media app as a volunteer back-end developer.",
  content: `
### Can I design a social media app?

<div 
  className="dark:text-lime-100 text-lime-950 text-lg 
    shadow-xl shadow-gray-900 dark:shadow-gray-500 p-4"
>

About three weeks ago, I started working on a social media app as a
volunteer back-end developer. Yesterday, I completed some initial setup
and began taking on assignments.

This project is ambitious and aims to deliver a fully functional social
media application, with some features that even surpass those of Facebook
and Instagram. There are dozens of functional modules.

I felt a bit surprised but excited, as the project is still in its very early
stages. As a back-end developer, I am working with another volunteer
programmer, starting with understanding the requirements and designing
the database and REST API.

The backend of this project will use technologies such as Django Rest
Framework, MySQL, and Redis. We decided to use mainstream frameworks from
the community rather than inventing our own. This choice is due to limited
resources and the advantage of allowing future developers to leverage
existing experience and resources from the community.

We have outlined the use cases for the P2P messaging module and attempted
to design initial drafts for the data tables and REST API.

I plan to dedicate about 8 hours a week to this project in my spare time. I
am quite busy, and making a meaningful and high-quality impact is not an
easy task.

I cannot disclose more details because I am not authorized to do so. This
is my first time attempting to design such a large-scale system from scratch.

Let’s see how far I can go with this project. Wish me and this non-profit
organization good luck.

\`\`\`sql
Project *** {
    Note: '''
      Database schema for Full Social Media System
    '''
}

Table user {
  user_id integer [primary key]

  Note: '''
      Share 'user' table of ******,
      so omit other columns here.
  '''
}

Table message{
  id bigint [ pk ]
  sender_id bigint [ref: > user.user_id]
  receiever_id bigint [ref: > user.user_id]
  message_type varchar(32) [
          null,
          note: '''
            For normal friend messages, use null.
            Other types may include 'conn_request', 'feed_post', 'business_card', etc.
            The UI may rely on the type to display each message with a specific look and feel.
          '''
  ]

  message_text text [default: ""]
  external_res_link text [note: "URL to the external resource"]
  external_res_type varchar(32) [note: "MIME type of the resource (e.g., 'image/png', 'video/mp4', 'application/pdf'"]
  created_at timestamp [default: \`now()\`]
  updated_at timestamp [default: \`now()\`]
}

\`\`\`

</div>
`,
};
