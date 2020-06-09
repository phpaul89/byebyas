const mongoose = require("mongoose");
const Newspaper = require("../models/Newspaper");
const Article = require("../models/Article");

const articleSeeds = [
  {
    source: {
      id: "fox-news",
      name: "Fox News",
    },
    author: "Fox News",
    title:
      "Distraught Chicago officials heard on tape fuming over looting, riots: 'My ward is a s--t show'",
    description:
      "Distraught Chicago officials complained to Mayor Lori Lightfoot -- as looting and rioting in response to George Floyd’s death swept through the Windy City -- pleading for help and warning that the vulnerable had lost access to food and medicine.",
    url: "https://www.foxnews.com/politics/chicago-officials-looting-riots",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/cc3ad46b-56d3-4867-b2bb-aff44c940ea3/69ad7446-06fb-4c8c-b679-23421a98a0f7/1280x720/match/image.jpg",
    publishedAt: "2020-06-09T14:37:20.8755907Z",
    content:
      "Distraught Chicago officials complained to Mayor Lori Lightfoot -- as looting and rioting in response to George Floyd’s death swept through the Windy City -- pleading for help and warning that the vu… [+2386 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Medha Singh",
    title: "Wall Street retreats after rally; Fed meeting in focus",
    description:
      "U.S. stocks fell on Tuesday as investors paused ahead of a Federal Reserve meeting that could offer views on the recent signs of economic recovery that drove the tech-heavy Nasdaq to an all-time high in the previous session.",
    url:
      "http://feeds.reuters.com/~r/reuters/topNews/~3/u2xFHh-Gz1g/wall-street-retreats-after-rally-fed-meeting-in-focus-idUSKBN23G1FC",
    urlToImage:
      "https://s2.reutersmedia.net/resources/r/?m=02&d=20200609&t=2&i=1521622873&w=1200&r=LYNXMPEG580TF",
    publishedAt: "2020-06-09T14:33:53Z",
    content:
      "(Reuters) - U.S. stocks fell on Tuesday as investors paused ahead of a Federal Reserve meeting that could offer views on the recent signs of economic recovery that drove the tech-heavy Nasdaq to an a… [+2467 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Reuters Editorial",
    title:
      "Harry Potter star says 'transgender women are women' after J.K. Rowling tweets spark row",
    description:
      'Daniel Radcliffe, who played the young wizarding hero in the Harry Potter films, has said "transgender women are women" after an outcry over tweets by author J.K. Rowling criticizing the use of the phrase "people who menstruate".',
    url:
      "http://feeds.reuters.com/~r/reuters/topNews/~3/m3p8Dy5-PVw/harry-potter-star-says-transgender-women-are-women-after-j-k-rowling-tweets-spark-row-idUSKBN23G1ZY",
    urlToImage:
      "https://s2.reutersmedia.net/resources/r/?m=02&d=20200609&t=2&i=1521643919&w=1200&r=LYNXMPEG5816F",
    publishedAt: "2020-06-09T14:26:30Z",
    content:
      "LONDON (Reuters) - Daniel Radcliffe, who played the young wizarding hero in the Harry Potter films, has said “transgender women are women” after an outcry over tweets by author J.K. Rowling criticizi… [+1561 chars]",
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News",
    },
    author: "Fox News",
    title: "Showdown in Georgia: What to know about the June 9 primaries",
    description: "Here's what you need to know about Tuesday's primary races.",
    url: "https://www.foxnews.com/politics/june-9-primaries-what-to-know",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/b111afc3-84b2-40ab-b721-d1b8a3fff0bf/dc2bf6ac-ae84-4e5a-8950-a53e6759d4b8/1280x720/match/image.jpg",
    publishedAt: "2020-06-09T14:22:30.1981176Z",
    content:
      "Voters in five states are heading to the polls Tuesday as the end of the primary season draws near and the summer party conventions loom large as the next major events in the election cycle.\r\nVoters … [+7438 chars]",
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News",
    },
    author: "Fox News",
    title:
      "NY jewelry store owner urges Gov. Cuomo to allow immediate reopenings before it's too late",
    description:
      "A New York City jewelry store owner is calling on New York State's Democratic Gov. Andrew Cuomo to skip COVID-19 re-open phases and save businesses on the verge of shuttering permanently.",
    url:
      "https://www.foxnews.com/media/ny-jewelry-store-cuomo-reopen-fox-friends",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2020/06/ac5c8904-image.jpg",
    publishedAt: "2020-06-09T14:22:28.1673735Z",
    content:
      'A New York City jewelry store owner is calling on Democratic Gov. Andrew Cuomo to skip COVID-19 reopen phases and save businesses on the verge of shuttering permanently.\r\nIn a Tuesday interview on "F… [+3309 chars]',
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News",
    },
    author: "Fox News",
    title:
      "Tucker Carlson: Black Lives Matter is now a powerful political party and has nothing to do with black lives",
    description:
      "Defund the police means a woke militia policing our cities, enforcing Democratic Party orthodoxy.",
    url:
      "https://www.foxnews.com/opinion/tucker-carlson-black-lives-matter-is-really-a-powerful-political-party-and-has-nothing-to-do-with-black-lives",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/d2c3c4a8-f70c-4961-b300-fcf399c51732/801d2904-2e82-4b5b-aeff-5d2fa366c7df/1280x720/match/image.jpg",
    publishedAt: "2020-06-09T14:22:22.9343004Z",
    content:
      "America went insane over the weekend. That's barely an overstatement. People in their 80s who have lived in the U.S. all their lives said they've never seen anything like it. Ask an 80-year-old.\r\nThi… [+27080 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Chad Terhune",
    title:
      "Billions in COVID relief go to biggest hospital chains as smaller rivals await aid",
    description:
      "Spared the worst of COVID-19, the largest for-profit hospital chains in the United States are pursuing a speedy recovery backed by billions of dollars in federal aid, while other hospitals say they have been harder hit and left wanting.",
    url:
      "http://feeds.reuters.com/~r/reuters/topNews/~3/KBJgcjzWod4/billions-in-covid-relief-go-to-biggest-hospital-chains-as-smaller-rivals-await-aid-idUSKBN23G1GI",
    urlToImage:
      "https://s1.reutersmedia.net/resources/r/?m=02&d=20200609&t=2&i=1521641498&w=1200&r=LYNXMPEG580U1",
    publishedAt: "2020-06-09T14:04:24Z",
    content:
      "(Reuters) - Spared the worst of COVID-19, the largest for-profit hospital chains in the United States are pursuing a speedy recovery backed by billions of dollars in federal aid, while other hospital… [+8688 chars]",
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News",
    },
    author: "Fox News",
    title:
      "Tom Arnold suggests people exercise Second Amendment rights against unmarked police in Washington D.C.",
    description:
      "Tom Arnold called for “liberal men” to exercise their Second Amendment rights on unmarked law enforcement in Washington D.C.",
    url:
      "https://www.foxnews.com/entertainment/tom-arnold-exercise-second-amendment-against-unmarked-police-washington-dc",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2018/09/ContentBroker_contentid-f4086e7204784c8a917d4aaced1aefad.png",
    publishedAt: "2020-06-09T13:37:24.4612573Z",
    content:
      "Tom Arnold called for “liberal men” to exercise their Second Amendment rights on unmarked law enforcement in Washington D.C.\r\nThe actor took to Twitter to encourage violence from people protesting po… [+2067 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Howard Schneider",
    title:
      "U.S. economy entered recession in February, business cycle arbiter says",
    description:
      "The U.S. economy ended its longest expansion in history in February and entered recession as a result of the coronavirus pandemic, the private economics research group that acts as the arbiter for determining U.S. business cycles said on Monday.",
    url:
      "http://feeds.reuters.com/~r/reuters/topNews/~3/ms4A0XLBDDc/u-s-economy-entered-recession-in-february-business-cycle-arbiter-says-idUSKBN23F28L",
    urlToImage:
      "https://s3.reutersmedia.net/resources/r/?m=02&d=20200608&t=2&i=1521553775&w=1200&r=LYNXMPEG571E5",
    publishedAt: "2020-06-09T13:08:00Z",
    content:
      "(This June 8 story corrects GDP decline in paragraph 6 to 5.0% from 4.8%) \r\nBy Howard Schneider \r\n(Reuters) - The U.S. economy ended its longest expansion in history in February and entered recession… [+3248 chars]",
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News",
    },
    author: "Fox News",
    title: "Saint Patrick's Cathedral Mass: Tuesday, June 9",
    description:
      "Saint Patrick's Cathedral holds a private Mass in New York City.",
    url: "https://video.foxnews.com/v/6162683672001/",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/87877ce3-fbfa-40cf-a48c-d660bbcbcbef/d6fe55d5-c199-4f3f-9a9b-fdd2e47e9fe7/1280x720/match/image.jpg",
    publishedAt: "2020-06-09T12:37:23.0682585Z",
    content: null,
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Andrea Shalal",
    title: "After George Floyd's death, a groundswell of religious activism",
    description:
      "George Floyd's death has triggered a groundswell of outrage and activism by religious leaders and faith-based groups across the United States, reminiscent of what occurred during the civil rights movement in the 1960s.",
    url:
      "http://feeds.reuters.com/~r/reuters/topNews/~3/F7EcXXtjxq4/after-george-floyds-death-a-groundswell-of-religious-activism-idUSKBN23G1FS",
    urlToImage:
      "https://s3.reutersmedia.net/resources/r/?m=02&d=20200609&t=2&i=1521632289&w=1200&r=LYNXMPEG580TM",
    publishedAt: "2020-06-09T12:33:26Z",
    content:
      "WASHINGTON (Reuters) - George Floyd’s death has triggered a groundswell of outrage and activism by religious leaders and faith-based groups across the United States, reminiscent of what occurred duri… [+5445 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Yanni Chow",
    title:
      "A year on, Hong Kong democracy protesters torn between hope and fear",
    description:
      "Medical sector worker Tana has attended peaceful lunchtime rallies in Hong Kong regularly for months along with thousands of others protesting Beijing's influence and calling for greater democracy in the global financial hub.",
    url:
      "http://feeds.reuters.com/~r/reuters/topNews/~3/t0psIEtYA8M/a-year-on-hong-kong-democracy-protesters-torn-between-hope-and-fear-idUSKBN23G0LV",
    urlToImage:
      "https://s2.reutersmedia.net/resources/r/?m=02&d=20200609&t=2&i=1521598232&w=1200&r=LYNXMPEG580DI",
    publishedAt: "2020-06-09T12:25:18Z",
    content:
      "HONG KONG (Reuters) - Medical sector worker Tana has attended peaceful lunchtime rallies in Hong Kong regularly for months along with thousands of others protesting Beijing’s influence and calling fo… [+3668 chars]",
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News",
    },
    author: "Fox News",
    title:
      "Skip the phases and get everyone back to work, NYC business owner says",
    description:
      "Simcha Minkowitz, owner of Amor Fine Jewelry and founder of Re-Open New York, shares her message on 'Fox &amp; Friends.'",
    url: "https://video.foxnews.com/v/6162687346001/",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/e34b8d4a-9f17-4bc4-96dc-2bf41d4ececb/d148faef-bab1-4bab-81b4-5e0f96bbd9c9/1280x720/match/image.jpg",
    publishedAt: "2020-06-09T12:07:21.5071911Z",
    content: null,
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Jessie Pang",
    title:
      "Protesters gather to mark 'million-people' march anniversary in Hong Kong",
    description:
      "Hundreds of protesters gathered in central Hong Kong on Tuesday to mark a year of sustained pro-democracy rallies as fears over looming national security legislation have reignited unrest in the global financial hub.",
    url:
      "http://feeds.reuters.com/~r/reuters/topNews/~3/mbP_yS_jnco/protesters-gather-to-mark-million-people-march-anniversary-in-hong-kong-idUSKBN23G08C",
    urlToImage:
      "https://s2.reutersmedia.net/resources/r/?m=02&d=20200609&t=2&i=1521628795&w=1200&r=LYNXMPEG580XI",
    publishedAt: "2020-06-09T11:57:59Z",
    content:
      "HONG KONG (Reuters) - Hundreds of protesters gathered in central Hong Kong on Tuesday to mark a year of sustained pro-democracy rallies as fears over looming national security legislation have reigni… [+3454 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Lisa Girion",
    title:
      "Special Report: COVID deepens the other opioid crisis - a shortage of hospital painkillers",
    description:
      "As opioid pills and patches fueled a two-decade epidemic of overdoses in the United States, hospitals faced chronic shortages of the same painkillers in injectable form - narcotics vital to patients on breathing machines.",
    url:
      "http://feeds.reuters.com/~r/reuters/topNews/~3/rIX9SalmpQ0/special-report-covid-deepens-the-other-opioid-crisis-a-shortage-of-hospital-painkillers-idUSKBN23G1GM",
    urlToImage:
      "https://s4.reutersmedia.net/resources/r/?m=02&d=20200609&t=2&i=1521627017&w=1200&r=LYNXMPEG580VT",
    publishedAt: "2020-06-09T11:43:49Z",
    content:
      "(Reuters) - As opioid pills and patches fueled a two-decade epidemic of overdoses in the United States, hospitals faced chronic shortages of the same painkillers in injectable form - narcotics vital … [+17207 chars]",
  },
  {
    source: {
      id: "reuters",
      name: "Reuters",
    },
    author: "Erwin Seba",
    title:
      "George Floyd to be buried Tuesday as global anti-racism protests spread",
    description:
      "George Floyd will be buried in Houston on Tuesday two weeks after his death while being held by police in a Minneapolis street, and more anti-racism rallies inspired by his treatment were set to take place in the United States and in Europe.",
    url:
      "http://feeds.reuters.com/~r/reuters/topNews/~3/2Qx4dlcYhew/george-floyd-to-be-buried-tuesday-as-global-anti-racism-protests-spread-idUSKBN23G1JQ",
    urlToImage:
      "https://s2.reutersmedia.net/resources/r/?m=02&d=20200609&t=2&i=1521626893&w=1200&r=LYNXMPEG580W3",
    publishedAt: "2020-06-09T11:42:01Z",
    content:
      "HOUSTON (Reuters) - George Floyd will be buried in Houston on Tuesday two weeks after his death while being held by police in a Minneapolis street, and more anti-racism rallies inspired by his treatm… [+5053 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Scottie Andrew, CNN",
    title:
      "This city disbanded its police department 7 years ago. Here's what happened next",
    description:
      "The city dssolved its police department and replaced it after corruption rendered the existing agency unfixable. Now, seven years later, the city's crime has dropped by close to half.",
    url:
      "http://us.cnn.com/2020/06/09/us/disband-police-camden-new-jersey-trnd/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/200608135458-02-camden-nj-floyd-protest-super-tease.jpg",
    publishedAt: "2020-06-09T11:00:30Z",
    content: null,
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: null,
    title:
      "Bill Barr contradicts Donald Trump on why he went to the White House bunker - CNN Video",
    description:
      "Attorney General William Barr contradicted President Donald Trump when asked during a Fox News interview why the President was taken to the White House bunker during protests.",
    url:
      "http://us.cnn.com/videos/politics/2020/06/09/bill-barr-donald-trump-white-house-bunker-george-floyd-protests-ebof-sot-vpx.cnn",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/200608205052-bill-barr-donald-trump-white-house-bunker-george-floyd-protests-ebof-sot-vpx-00001803-super-tease.jpg",
    publishedAt: "2020-06-09T10:52:30.03317Z",
    content:
      "Chat with us in Facebook Messenger. Find out what's happening in the world as it unfolds.",
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News",
    },
    author: "Fox News",
    title: "Florida AG on Trump's law enforcement roundtable meeting",
    description:
      "Florida Attorney General Ashley Moody shares insight into what Trump discussed with law enforcement officials",
    url: "https://video.foxnews.com/v/6162653101001/",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/12a635ed-49b6-4753-bbd6-4d39b746da36/f2ab5138-3a6f-431b-8bdc-f2fb965ff4fe/1280x720/match/image.jpg",
    publishedAt: "2020-06-09T10:52:18.9421802Z",
    content: null,
  },
  {
    source: {
      id: "fox-news",
      name: "Fox News",
    },
    author: "Fox News",
    title: "GOP target Russia, China, Iran in new sanctions package",
    description:
      "North Carolina Republican Rep. Mark Walker on efforts to cripple Tehran's global terrorism enterprise.",
    url: "https://video.foxnews.com/v/6162655363001/",
    urlToImage:
      "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/7f076f9e-a78b-457e-a58f-2f2b82725509/7cefb0db-3c22-4953-91e9-2d7656510173/1280x720/match/image.jpg",
    publishedAt: "2020-06-09T10:52:17.6768699Z",
    content: null,
  },
  {
    source: {
      id: "msnbc",
      name: "MSNBC",
    },
    author: "MSNBC",
    title: "MTP Daily on MSNBC",
    description:
      "Get the latest news and video from Chuck Todd, and join MTP Daily’s community.",
    url: "https://www.msnbc.com/mtp-daily",
    urlToImage:
      "https://media4.s-nbcnews.com/j/newscms/2018_34/2539411/mtp_daily_-social-avatar_1200x6301x_a769760b79c8bb61763d6e41914d7560.nbcnews-fp-1200-630.png",
    publishedAt: "2020-06-09T14:37:37.8244979Z",
    content: null,
  },
  {
    source: {
      id: "the-washington-times",
      name: "The Washington Times",
    },
    author: "David Sherfinski",
    title:
      "Priorities USA Action, leading Dem super PAC, moves into Arizona with TV campaign",
    description:
      "Priorities USA Action, a leading Democratic super PAC, on Tuesday announced plans to expand its ongoing TV ad campaign against President Trump into Arizona, where recent polling has indicated Mr. Trump is vulnerable.",
    url:
      "https://www.washingtontimes.com/news/2020/jun/9/priorities-usa-action-leading-dem-super-pac-moves-/",
    urlToImage:
      "https://twt-thumbs.washtimes.com/media/image/2020/06/08/Trump_79981.jpg-585ef_c0-0-4703-2743_s1200x700.jpg?893a6a062ecb764adb57d3c5764696fdae253fc7",
    publishedAt: "2020-06-09T09:09:14Z",
    content:
      "Priorities USA Action, a leading Democratic super PAC, on Tuesday announced plans to expand its ongoing TV ad campaign against President Trump into Arizona, where recent polling has indicated Mr. Tru… [+1513 chars]",
  },
  {
    source: {
      id: "msnbc",
      name: "MSNBC",
    },
    author: "MSNBC",
    title:
      "Trump's 2020 polls helping Powell, Murkowski grow spines. Will other Republicans follow?",
    description:
      "Trump 2020 polls: Colin Powell, James Mattis and Lisa Murkowski the latest Republicans to give statements that should scare Trump — and give Biden hope.",
    url:
      "https://www.nbcnews.com/think/opinion/trump-s-2020-polls-helping-powell-murkowski-grow-spines-will-ncna1227686",
    urlToImage:
      "https://media2.s-nbcnews.com/j/newscms/2020_24/3383606/200608-think-lisa-murkowski-se-521p_1ed32ea6cea1e0b21de29ef5a78e446b.nbcnews-fp-1200-630.jpg",
    publishedAt: "2020-06-09T08:32:00Z",
    content:
      "In mid-April, I took to these pages to make it clear what nearly all Washington insiders have privately concluded: In a fair election, there is no chance for President Donald Trump to survive the ele… [+6749 chars]",
  },
  {
    source: {
      id: "the-washington-times",
      name: "The Washington Times",
    },
    author: "David Sherfinski",
    title:
      "Ronna McDaniel, RNC chief: Decision on convention will likely have to come in next week or so",
    description:
      "Republican National Committee Chairwoman Ronna McDaniel on Tuesday said organizers planning the Republican National Convention will likely have to decide in the next week or so on where parts of it will be relocated.",
    url:
      "https://www.washingtontimes.com/news/2020/jun/9/ronna-mcdaniel-rnc-chief-decision-convention-will-/",
    urlToImage:
      "https://twt-thumbs.washtimes.com/media/image/2018/10/01/rnc_charlotte_2020_79710_c0-0-4812-2807_s1200x700.jpg?15a396ffc98fa6445c4f2c0101e769866b4afa8d",
    publishedAt: "2020-06-09T07:32:35Z",
    content:
      "Republican National Committee Chairwoman Ronna McDaniel on Tuesday said organizers planning the Republican National Convention will likely have to decide in the next week or so on where parts of it w… [+1786 chars]",
  },
  {
    source: {
      id: "the-washington-times",
      name: "The Washington Times",
    },
    author: "David Sherfinski",
    title: "Joe Biden: 'No, I don't support defunding the police'",
    description:
      "Presumptive Democratic presidential nominee Joseph R. Biden on Monday said he doesn't support defunding the police -- a movement among some on the left that has taken hold after the killing of George Floyd at the hands of Minneapolis police last month.",
    url:
      "https://www.washingtontimes.com/news/2020/jun/9/joe-biden-no-i-dont-support-defunding-police/",
    urlToImage:
      "https://twt-thumbs.washtimes.com/media/image/2020/06/05/Election_2020_Joe_Biden_40398.jpg-ca317_c0-401-4937-3280_s1200x700.jpg?fe13f79c3690d7714c909ee7a285d0b611658026",
    publishedAt: "2020-06-09T07:10:43Z",
    content:
      "Presumptive Democratic presidential nominee Joseph R. Biden on Monday said he doesn’t support defunding the police — a movement among some on the left that has taken hold after the killing of George … [+1596 chars]",
  },
  {
    source: {
      id: "msnbc",
      name: "MSNBC",
    },
    author: "MSNBC",
    title:
      "Stocks soar despite coronavirus and a recession. It's time for a reality check, and a crash.",
    description:
      "Coronavirus - stocks and stock market are soaring despite the pandemic. But a recession is officially here, which means the economy is in trouble.",
    url:
      "https://www.nbcnews.com/think/opinion/stocks-soar-despite-coronavirus-recession-it-s-time-reality-check-ncna1227771",
    urlToImage:
      "https://media2.s-nbcnews.com/j/newscms/2020_22/3364171/200526-nyse-mn-0800_ffb035d2e9510fd7af16e30e40f8de41.nbcnews-fp-1200-630.JPG",
    publishedAt: "2020-06-08T22:46:00Z",
    content:
      "The business pages are full of explanations for why an economic calamity has been met with an epic rally in stock markets. But the commentary that might be most telling is that of a would-be investor… [+7050 chars]",
  },
  {
    source: {
      id: "the-washington-times",
      name: "The Washington Times",
    },
    author: "Valerie Richardson",
    title: "George Floyd rioting take heavy toll on black lives, communities",
    description:
      "The rioting on the heels of Black Lives Matter protests sparked by the death of George Floyd in Minneapolis police custody has come at a high price for the black community.",
    url:
      "https://www.washingtontimes.com/news/2020/jun/8/george-floyd-rioting-take-heavy-toll-black-lives-c/",
    urlToImage:
      "https://twt-thumbs.washtimes.com/media/image/2020/05/28/minneapolis_police-death_19867_c0-246-4909-3109_s1200x700.jpg?2d0f20589b18ff12c33fd8984c2e04f182cb0b03",
    publishedAt: "2020-06-08T20:56:17Z",
    content:
      "The rioting on the heels of Black Lives Matter protests sparked by the death of George Floyd in Minneapolis police custody has come at a high price for the black community.\r\nThose killed amid the rio… [+7103 chars]",
  },
  {
    source: {
      id: "msnbc",
      name: "MSNBC",
    },
    author: "MSNBC",
    title:
      "Coronavirus cases have not gone away. And neither has doctors' emotional trauma.",
    description:
      "Coronavirus cases and deaths have not gone away. And neither has doctors' emotional trauma.",
    url:
      "https://www.nbcnews.com/think/opinion/coronavirus-cases-have-not-gone-away-neither-has-doctors-emotional-ncna1217661",
    urlToImage:
      "https://media1.s-nbcnews.com/j/newscms/2020_22/3369666/200529-healthcare-worker-al-1027_fafc2749bc1f53edd7f3086a862cd96e.nbcnews-fp-1200-630.jpg",
    publishedAt: "2020-06-08T20:44:16Z",
    content:
      "Although epicenters like New York have started to see a decline in cases, the coronavirus pandemic has not gone away; cases are continuing to increase in states across the country. Meanwhile, much of… [+7869 chars]",
  },
  {
    source: {
      id: "the-washington-times",
      name: "The Washington Times",
    },
    author: "Tom Howell Jr.",
    title:
      "Coronavirus transmission, symptoms like blood clots, smell loss frustrate scientists",
    description:
      "Scientists are slowly putting together pieces of the coronavirus puzzle but still have more questions.",
    url:
      "https://www.washingtontimes.com/news/2020/jun/8/coronavirus-transmission-symptoms-blood-clots-smel/",
    urlToImage:
      "https://twt-thumbs.washtimes.com/media/image/2020/05/16/virus_outbreak_connecticut_22773_c0-318-3000-2068_s1200x700.jpg?006b9d237112413feb58972ad963c6c47360ea08",
    publishedAt: "2020-06-08T20:04:06Z",
    content:
      "Blood clots that lead to stroke or sudden death. A loss of taste and smell. Inflammation in children and infants. The risk of transmission from loud talking.\r\nThese are some of the things we’ve learn… [+5929 chars]",
  },
  {
    source: {
      id: "the-washington-times",
      name: "The Washington Times",
    },
    author: null,
    title:
      "How To Entirely Empty Your Bowels Every Morning - Top Surgeon Explains How",
    description: null,
    url: "http://gundrymd.com/cmd.php?ad=972729",
    urlToImage: null,
    publishedAt: "2020-06-08T19:37:33.2362375Z",
    content:
      "The information on this website has not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure or prevent any disease.\r\n© Gundry MD 2020. All Rig… [+153 chars]",
  },
  {
    source: {
      id: "msnbc",
      name: "MSNBC",
    },
    author: "MSNBC",
    title:
      "Trump's responses to the George Floyd protests shows the small government mantra was a lie",
    description:
      "Sen. Tom Cotton, R-Ark., came out in favor of sending the military in to put down American protests. What sort of small government conservative is he, anyway?",
    url:
      "https://www.nbcnews.com/think/opinion/trump-s-responses-george-floyd-protests-shows-their-small-government-ncna1227516",
    urlToImage:
      "https://media1.s-nbcnews.com/j/newscms/2020_24/3383281/200608-tom-cotton-donald-trump-ew-1258p_48f971309a1049e8f2acab9c3dc740d6.nbcnews-fp-1200-630.jpg",
    publishedAt: "2020-06-08T18:49:00Z",
    content:
      "Republicans like to claim the mantle of being the party of limited government and individual liberty. As the recent #BlackLivesMatter protests have thrown into sharp relief, however, nothing could be… [+6878 chars]",
  },
  {
    source: {
      id: "the-washington-times",
      name: "The Washington Times",
    },
    author: "Charles Hurt",
    title: "President Trump and all the boomerang lies",
    description:
      "Brace for the fight of your life. The biggest difference between today and four years ago is that this time they know Donald Trump can win.",
    url:
      "https://www.washingtontimes.com/news/2020/jun/8/president-trump-and-all-the-boomerang-lies/",
    urlToImage:
      "https://twt-thumbs.washtimes.com/media/image/2020/06/08/virus_outbreak_trump_44165_c0-449-5379-3586_s1200x700.jpg?8ea52e380d98b8b08604f18a97c7912db363ea9c",
    publishedAt: "2020-06-08T17:19:34Z",
    content:
      "ANALYSIS/OPINION:\r\nBrace for the fight of your life.\r\nThe biggest difference between today and four years ago is that this time they know Donald Trump can win.\r\nSure, it was ugly last time. They desp… [+4608 chars]",
  },
  {
    source: {
      id: "the-washington-times",
      name: "The Washington Times",
    },
    author: "Dave Boyer",
    title: "Trump says no dismantling, defunding of police in face of protests",
    description:
      'President Trump hardened his law-and-order agenda Monday in the face of protests over racial injustice and far-left demands to "defund the police," while his reelection team accused presumptive nominee Joseph R. Biden of backing radical anti-police proposals …',
    url:
      "https://www.washingtontimes.com/news/2020/jun/8/trump-says-no-dismantling-defunding-police-face-pr/",
    urlToImage:
      "https://twt-thumbs.washtimes.com/media/image/2020/06/07/America_Protests_Pittsburgh_55062.jpg-a6ccc_c0-125-3000-1875_s1200x700.jpg?5df86175492ddcdc04d9d2b6261257b2d49617ee",
    publishedAt: "2020-06-08T16:25:00Z",
    content:
      "President Trump hardened his law-and-order agenda Monday in the face of protests over racial injustice and far-left demands to “defund the police,” while his reelection team accused presumptive nomin… [+1425 chars]",
  },
  {
    source: {
      id: "the-washington-times",
      name: "The Washington Times",
    },
    author: "Gabriella Muñoz",
    title:
      "Democrats introduce sweeping police reform package in response to nationwide protests",
    description:
      "Democrats on Capitol Hill unveiled their new sweeping police reform package on Monday, seeking to quickly respond to the outrage that swept across the country in response to George Floyd's killing in Minnesota.",
    url:
      "https://www.washingtontimes.com/news/2020/jun/8/democrats-introduce-sweeping-police-reform-package/",
    urlToImage:
      "https://twt-thumbs.washtimes.com/media/image/2020/06/02/America_Protests_Minneapolis_02647.jpg-66d17_c0-255-3600-2355_s1200x700.jpg?4bca06ecc00ce7a93268091d1ffa2eff8e5ccb4d",
    publishedAt: "2020-06-08T11:05:54Z",
    content:
      "Democrats on Capitol Hill unveiled their new sweeping police reform package on Monday, seeking to quickly respond to the outrage that swept across the country in response to George Floyd’s killing in… [+4061 chars]",
  },
  {
    source: {
      id: "msnbc",
      name: "MSNBC",
    },
    author: "MSNBC",
    title: "Deadline: White House on MSNBC",
    description:
      "Get the latest news and video from Nicolle Wallace, and join Nicolle Wallace’s community.",
    url: "https://www.msnbc.com/deadline-white-house",
    urlToImage:
      "https://media4.s-nbcnews.com/j/newscms/2018_34/2539386/deadline_-social-avatar_1200x6301x_a769760b79c8bb61763d6e41914d7560.nbcnews-fp-1200-630.png",
    publishedAt: "2020-06-04T21:22:48Z",
    content: null,
  },
  {
    source: {
      id: "the-washington-times",
      name: "The Washington Times",
    },
    author: null,
    title: "Heart Surgeon: Throw Out Your Olive Oil Now (Here’s Why)",
    description: null,
    url: "http://gundrymd.com/cmd.php?ad=940902",
    urlToImage: null,
    publishedAt: "2020-04-21T20:37:30.7929737Z",
    content:
      "†These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease. Use only as directed. Consult your healthc… [+531 chars]",
  },
  {
    source: {
      id: "msnbc",
      name: "MSNBC",
    },
    author: "MSNBC",
    title:
      "On the frontlines of opioid addiction with Beth Macy: podcast and transcript",
    description:
      "On the frontlines of opioid addiction with Beth Macy: podcast and transcript",
    url:
      "https://www.nbcnews.com/think/opinion/frontlines-opioid-addiction-beth-macy-podcast-transcript-ncna1132471",
    urlToImage:
      "https://media1.s-nbcnews.com/j/newscms/2019_21/2869906/190524-opioid-prescription-protest-ew-1121a_9b439fab7a40bc4b57395bcd824a07e2.nbcnews-fp-1200-630.jpg",
    publishedAt: "2020-02-12T04:46:28Z",
    content:
      "This is an intimate portrait of what addiction looks like in America. From the board rooms of pharmaceutical companies to the living rooms across America, Beth Macy traces the path of devastation wro… [+56638 chars]",
  },
  {
    source: {
      id: "msnbc",
      name: "MSNBC",
    },
    author: "MSNBC",
    title: "‎The Oath with Chuck Rosenberg on Apple Podcasts",
    description: "‎Society & Culture · 2019",
    url:
      "https://podcasts.apple.com/us/podcast/the-oath-with-chuck-rosenberg/id1461312941",
    urlToImage:
      "https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/ed/ce/e6/edcee6b3-54c7-b30b-1aa2-f744be586013/source/1200x630bb.png",
    publishedAt: "2019-05-01T15:53:24.0751748Z",
    content:
      "The Oath with Chuck Rosenberg, MSNBCs newest original podcast, is a series of revealing, one-on-one conversations with thoughtful former American public officials from the highest levels of governmen… [+340 chars]",
  },
  {
    source: {
      id: "msnbc",
      name: "MSNBC",
    },
    author: "MSNBC",
    title: "Bag Man: A Rachel Maddow podcast from MSNBC",
    description: "Listen to Bag Man: A Rachel Maddow podcast from MSNBC",
    url: "https://www.msnbc.com/bagman",
    urlToImage:
      "https://media3.s-nbcnews.com/j/newscms/2018_42/2611751/bento_header_3-2x1_0c780015971e3ab5803de72488cb9013.nbcnews-fp-1200-630.jpg",
    publishedAt: "2019-01-30T23:08:13.6377175Z",
    content: null,
  },
];

const newspaperSeeds = [
  { name: "CNN", source_name: "cnn" },
  { name: "MSNBC", source_name: "msnbc" },
  { name: "Reuters", source_name: "reuters" },
  { name: "The Washington Times", source_name: "the-washington-times" },
  { name: "Fox News", source_name: "fox-news" },
];
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/byebyas", {
    useNewUrlParser: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const insertArticles = Article.insertMany(articleSeeds);
const insertNewspapers = Newspaper.insertMany(newspaperSeeds);

Promise.all([insertArticles, insertNewspapers]).then((responses) => {
  const newspaperData = responses[1];
  const articleData = responses[0];
  newspaperData.forEach((newspaper) => {
    const filteredData = articleData
      .filter((article) => article.source.id === newspaper.source_name)
      .map((article) => article._id);
    newspaper.articles.push(filteredData);
  });
});
