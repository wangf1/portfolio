import { Blog } from "@/common/types/blog/blogTypes";
import { randomMongoDocId } from "@/frontend/lib/utils";

const blog: Blog = {
  _id: randomMongoDocId(),
  readableId: "2024-07-16_my-immigration-story",
  title: "Immigration Is Not an Easy Journey",
  date: "2024-07-16T14:41:08Z",
  tags: ["Personal", "Stories", "Immigration"],
  isPinned: true,
  summary:
    "The challenges and choices of immigration. Why I decided to immigrate to Canada and what I went through. Do I Regret It?",
  content: `
## Immigration Is Not an Easy Journey

Immigration is not an easy thing, especially for middle-aged people with
families and children. A rational adult who decides to give up a stable and
comfortable life for half of their life must have gone through inner struggles
and deep contemplation.

## Why I Immigrated

After experiencing the extreme lockdown policies in China in 2022, I gained a
deeper understanding of what freedom and dignity mean. I realized that my
previous thoughts were terribly wrong, and I was far from modern civilization
and universal values, both physically and mentally.

Firstly, I had to discard the ideas I was indoctrinated with in the past. This
was a painful process of self-denial and sublimation, like a caterpillar
transforming into a butterfly. Aligning knowledge with action, since I abandoned
the thoughts of my past life, I had to abandon my past life as well. After
experiencing various setbacks, deceptions, and betrayals, I finally arrived at
my dream place: Canada, a promised land flowing with milk and honey.

> **"Choose a place and give yourself a new beginning."**

## The Difficult Start

It took me two months in Canada to realize that finding a job was quite
challenging. For every position, there were over a hundred applicants. I still
wanted to find a job through my own efforts.

I didn’t want to ask friends or classmates for recommendations: firstly,
I wanted to see if I could get a job on my own through applications; secondly,
many classmates didn’t even know I had immigrated. I didn’t want to explain this
seemingly crazy decision of mid-life immigration to them.

\`\`\`python
import random
from typing import List

def job_search() -> List[str]:
applications: int = 100 # Number of job applications
responses: List[str] = []
for i in range(1, applications + 1):
if random.random() < 0.01: # 1% chance of getting a positive response
responses.append(f"Received response for application {i}")

print(responses)
return responses

\`\`\`

## Do I Regret It?

I do not regret it at all because I have a strong internal drive. I know where
I come from, why I came, what I should do, and what I should enjoy.
I will never forget it!
`,
};

export default blog;
