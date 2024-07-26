import { randomMongoDocId } from "@/lib/utils";
import { Blog } from "@/src/blog/blogTypes";

const blog: Blog = {
  _id: randomMongoDocId(),
  readableId: "2024-07-25_some_thoughts",
  title: "Some thoughts",
  date: "2024-07-25T16:28:17Z",
  tags: ["Philosophy", "Politics", "Justice", "Stories", "MongoDB"],
  summary: "A mix of recent thoughts",
  content: `    
### Reflections on Recent Events:

#### Comparing Calgary’s Water Restrictions and Fire Ban with Shanghai’s Extreme Lockdown in 2022

The water pipe burst in Calgary happened quite some time ago, and the
water restrictions are gradually being lifted. It is said that some
garden maintenance companies were significantly impacted. Does the city
government have the right to restrict residents' water usage? Do
residents have an obligation to conserve water? I agree with both the
government's and the residents' approaches in this matter. The
government has the right, and residents have the obligation.

What about Shanghai’s extreme lockdown in 2022? Why do I oppose it so
resolutely? Theoretically, the Calgary city government is elected and
derives its authority from the people. The people delegate the
management of public affairs to the government. This is the source of
their policy legitimacy. Since their decisions are legitimate, the
people have an obligation to comply. The Shanghai case is the opposite.

I prefer to explain this with conscience. My conscience tells me that
one of these situations is just and the other is unjust.

However, managing a large group of people with a small group is
inherently problematic. We should be skeptical and cautious about any
unconventional decisions. For issues that are not immediately apparent,
how do we judge what is fair and just? We must follow our conscience and
common sense. But how do we ensure our conscience is truly ethical? Is
it possible for a society to lose its conscience? It is possible. Thus,
people with a conscience not only maintain their own but also work to
preserve the societal conscience: they value education, imparting good
knowledge to students; they volunteer to help communities and vulnerable
groups; they form strong groups to oppose unethical behavior. Good
education and social norms heal more people, giving society a conscience.

In a society devoid of conscience, being aware becomes a sin. So, I
choose to escape.

### A Mix of Recent Thoughts

With ChatGPT's help, my productivity has likely doubled. Problems that
used to take me a long time to solve can now be resolved instantly.
Most of the time, I don’t need to read documentation in detail; I just
need a general concept, and the details are handled by ChatGPT. Simple
tasks can be entirely delegated to ChatGPT, such as almost completely
avoiding manually writing DB schema scripts—just make requests to
ChatGPT. This might be why finding work has been challenging lately.

<img
  src="/static/images/blog-images/Girl_programmer_and_robot.jpeg"
  alt="LeetCode Problem 909"
  className="rotate-[2deg] w-96 h-auto
    shadow-xl shadow-gray-900 dark:shadow-gray-500
    opacity-90"
/>

I have no concept of race or homeland. Regardless of
who a person is, they are first and foremost a person, and only then
someone from a specific country or ethnicity. I am very averse to
nationalism, racism, and ethnonationalism. I am an independent person
and don’t need any other labels. Such a simple principle is misunderstood
by many who indulge in grand narratives and illusory communities,
self-congratulating.
A small group of bad guys misled a large group of fools,
dragging along a small number of good people, causing what a humanitarian disaster!
Your actions have ruined the first half of my life. Go ahead and continue
stewing in that pressure cooker, I'm not sticking around.
I don't forgive any of them.😡😡😡

I feel I owe the Canadian people. Without such a good country advocating
diversity and inclusion, where else could I go? Therefore, I must find a
job, avoid relying on welfare, and strive to find a good job, pay taxes,
and give back to this society.

My wife and daughter have volunteered at Foodbank and were deeply
impressed. The quality of food provided by Foodbank far exceeds what we
buy daily. This is unimaginable in China. The survival threshold here is
much higher than in China. Meanwhile, all we see in the Chinese news is
chaos abroad: this one peed their pants, that one shot themselves in the
foot, only the scenery here is the best.😅😅😅

As mentioned, I am working as a volunteer programmer designing a social
media app for a non-profit organization. I am collaborating with a fellow
new immigrant programmer from Israel, and we have had productive
discussions. This is very different from working on a small part of a
large project in a big company. To be honest, working 8 hours a week is
more efficient than working 40 hours in a big company because we only
have two or three people discussing, not twelve or thirteen.

Recently, I haven’t had time to stroll in the park, let my mind wander,
browse news, or participate in activities. Being a programmer means
sacrificing many opportunities to understand society. After a while, I
plan to take a break. I haven’t been to Banff yet and want to catch
crayfish in a distant lake.

My blog previously used a ready-made template for quick launch. That
template used a file system to store the blog, which now seems like a
bad idea. It’s clearly more appropriate to store the blog in MongoDB. I’m
working on changing this, mainly adjusting the pages to match the
original user experience, which is quite troublesome. In a few days, I
plan to completely remove that blog template from my codebase.

### 旧闻的思考：卡尔加里水管爆裂导致的禁火和限水令，跟上海 2022 年的极端封控，有何异同？

卡尔加里水管爆裂的事件已经过去了一段时间，限水令也在逐步解除。据说，一些从事花园养护的
公司受到了较大影响。市政府是否有权限制居民用水？居民是否有节约用水的义务？我认为政府和
居民的做法都是合理的。政府有权制定限制措施，居民有义务遵守。

那么，2022 年上海的极端封控呢？为什么我如此坚决反对？理论上，卡尔加里市政府是由选民选举
产生的，其权力来源于人民。人民委托政府管理公共事务，这也是政策合法性的来源。既然政府的
决策是合法的，人民就有义务执行。而上海的情况则完全不同。

我更愿意用良心来解释，因为我的良心告诉我，这两件事的性质截然不同，一件是正义的，另一件则
是不正义的。

然而，小群体管理大群体本身就存在问题。我们对任何非常规决策都应该保持怀疑和警惕。
对于一些不显而易见的问题，我们该如何判断公平和正义？我们必须依靠良心和常识。然而，
如何保证我们的良心是真正的良心？一个社会是否可能失去良心？这确实可能。所以，除了维护
个人良心外，有良心的人还需要维护社会的良心：他们重视教育，传授善良的知识；他们做志愿者，
帮助社区和弱势群体；他们汇聚力量，敢于反对不道德的行为。好的教育和社会风气能够治愈更多
的人，使社会充满良知。

在一个缺乏良知的社会中，清醒成了一种罪过。所以我选择逃跑。

### 大杂烩

有了 ChatGPT 的帮助，我的生产力大大提高。过去花很长时间才找到的解决方案，现在瞬间就
能解决。大多数时候，我不需要详细阅读文档，只需了解大概念，细节部分都可以问 ChatGPT
。一些简单的工作完全可以交给 ChatGPT，比如几乎不需要自己手动编写 DB Schema 脚本，
只需向 ChatGPT 提出要求。这也许是最近找工作难的原因。

我对种族和祖国没有特别的概念。无论一个人来自
哪个国家或民族，首先他是一个人。我对国家主义、种族主义和民族主义非常反感。
我是独立自主的人，不需要其他任何标签。这样简单的道理很多人却不懂，沉迷于宏大的叙事
和虚幻的共同体，自我感动。一小群坏货忽悠着一大群蠢货，裹挟着一小部分好人，
造成了怎样的人道灾难！
你的行为毁了我前半生的生活，你们接着在高压锅里炖吧, 我不陪着了。我一个都不原谅。

我觉得我欠加拿大人民。如果没有这样一个倡导多元和包容的好国家，我还能去哪里？因此，
我一定要找到工作，不吃福利，争取找到好的工作，多交税，回报这个社会。

我的妻子和女儿参与了 Foodbank 的志愿者服务，深受震撼。Foodbank 提供的食物质量远超
我们自己购买的日常食物。这在中国是无法想象的。这里的生存底线比中国高得多。而
我们在中国看到的新闻永远是国外各种糟心，这个吓尿了, 那个搬石砸脚了, 只有这边的风景独好。

如前所述，我正在作为志愿者程序员，设计一个非盈利组织的社交媒体应用。我与一位来自以
色列的同样是新移民的程序员合作，我们的讨论效很有成效。这与在大公司做一小块项目的体验
非常不同。实话说，每周工作 8 小时比在大公司工作 40 小时更高效，因为我们只有两三个
人讨论，而不是十二三个人。

最近我没时间去公园散步，脑子也没时间闲想，也没时间浏览新闻或参加活动。作为程序员，
意味着放弃了很多了解社会的机会。过一段时间我计划休息一下，我还没去过班芙，还想去
远处的湖里抓小龙虾。

我的博客之前为了快速上线使用了一个现成的模板。那个模板使用文件系统来存储博客，现在看
来并不是一个好主意。显然，将博客存储到 MongoDB 中更合适。我正在进行修改，主要是调整
页面以匹配原来的用户体验，有点麻烦。几天后，我计划彻底将那个博客模板从我的
代码库中移除。

  `,
};

export default blog;
