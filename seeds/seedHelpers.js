const mongoose = require('mongoose');
const Book = require("../models/book");
const User = require("../models/user");

mongoose.connect('mongodb+srv://Zack:aslk0807@cluster0.bwzxy.mongodb.net/Library', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database Connected");
})

// const seedDB = async() => {
//     await Book.deleteMany({});
// }

// seedDB().then(() => {
//     mongoose.connection.close()
// })

const seedBooks = [
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/5098/9781509858637.jpg',
        name: 'This Is Going to Hurt',
        author: 'Adam Kay',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Medical'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/1410/9780141033570.jpg',
        name: 'Thinking, Fast and Slow',
        author: 'Daniel Kahneman',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Medical'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/7847/9781784701994.jpg',
        name: 'When Breath Becomes Air',
        author: 'Paul Kalanithi',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Medical'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8452/9781845298258.jpg',
        name: 'The Happiness Trap',
        author: 'Russ Harris',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Medical'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8460/9781846041242.jpg',
        name: `Man's Search For Meaning`,
        author: 'Viktor E. Frankl',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Medical'
    },

    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/0995/9780099590088.jpg',
        name: 'Sapiens',
        author: 'Yuval Noah Harari',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Science-Geography'
    },

    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/7847/9781784701994.jpg',
        name: 'When Breath Becomes Air',
        author: 'Paul Kalanithi',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Science-Geography'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/7847/9781784703936.jpg',
        name: 'Homo Deus',
        author: 'Yuval Noah Harari',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Science-Geography'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4736/9781473695986.jpg',
        name: 'Brief Answers to the Big Questions',
        author: 'Stephen Hawking',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Science-Geography'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/3305/9780330523622.jpg',
        name: 'The Man Who Mistook His Wife for a Hat',
        author: 'Oliver Sacks',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Science-Geography'
    },



    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9783/8365/9783836538725.jpg',
        name: 'Sebastiao Salgado. GENESIS',
        author: 'Sebastiao Salgado',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Art-Photography'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/7382/9780738212418.jpg',
        name: 'You Can Draw in 30 Days',
        author: 'Mark Kistler',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Art-Photography'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/7535/9780753545683.jpg',
        name: 'Shit Happens!',
        author: 'James Alexander',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Art-Photography'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/6167/9781616776206.jpg',
        name: 'My First Piano Adventure For The Young Beginner - Writing Book A - Pre-Reading',
        author: 'Nancy Faber',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Art-Photography'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/1419/9780141978109.jpg',
        name: 'Into The Woods',
        author: 'John Yorke',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Art-Photography'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/3490/9780349009728.jpg',
        name: 'Talking As Fast As I Can',
        author: 'Lauren Graham',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Biography'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/3161/9780316194761.jpg',
        name: 'Michael Jordan',
        author: 'Roland Lazenby',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Biography'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/7515/9780751569575.jpg',
        name: 'Tuesdays With Morrie',
        author: 'Mitch Albom',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Biography'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4336/9781433675799.jpg',
        name: 'The Vow',
        author: 'Kim Carpenter',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Biography'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4607/9781460752142.jpg',
        name: 'Working Class Man',
        author: 'Jimmy Barnes',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Biography'
    }
    ,



    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4778/9781477800676.jpg',
        name: 'Manage Your Day-to-Day',
        author: 'Scott Belsky',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Business-Finance-Law'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/7812/9781781257937.jpg',
        name: 'Moneyland',
        author: 'Oliver Bullough',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Business-Finance-Law'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/9275/9781927584026.jpg',
        name: 'Guide to Business Analysis Body of Knowledge (Babok Guide)',
        author: 'IIBY',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Business-Finance-Law'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/6911/9780691152646.jpg',
        name: 'This Time Is Different',
        author: 'Carmen M. Reinhart',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Business-Finance-Law'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/9049/9781904915379.jpg',
        name: 'Confessions Of An Advertising Man',
        author: 'David Ogilvy',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Business-Finance-Law'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/9929/9780992953003.jpg',
        name: 'My Underpants Rule',
        author: 'Rod Power',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Childrens-Books'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/1424/9780142410707.jpg',
        name: 'An Abundance Of Katherines',
        author: 'John Green',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Childrens-Books'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/3408/9780340881545.jpg',
        name: 'CHERUB: Class A',
        author: 'Robert Muchamore',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Childrens-Books'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4711/9781471122668.jpg',
        name: `Since You've Been Gone`,
        author: 'Morgan Matson',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Childrens-Books'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/3408/9780340894330.jpg',
        name: 'CHERUB: The Killing',
        author: 'Robert Muchamore',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Childrens-Books'
    },



    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/1191/9781119138556.jpg',
        name: 'AWS Certified Solutions Architect Official Study Guide',
        author: 'John Stamper',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Computing'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/3217/9780321786616.jpg',
        name: 'Light It, Shoot It, Retouch It',
        author: 'Scott Kelby',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Computing'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4842/9781484226032.jpg',
        name: 'Blockchain Basics',
        author: 'Daniel Drescher',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Computing'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/6006/9781600619724.jpg',
        name: `The Web Designer's Idea Book Volume 2`,
        author: 'Patrick McNeil',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Computing'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/3216/9780321605788.jpg',
        name: 'Agile Product Management with Scrum',
        author: 'Roman Pichler',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Computing'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4493/9781449389550.jpg',
        name: 'Hackers & Painters',
        author: 'Paul Graham',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Computing'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4493/9781449363338.jpg',
        name: 'Getting Started with Arduino',
        author: 'Massimo Banzi',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Computing'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/2620/9780262018029.jpg',
        name: 'Machine Learning',
        author: 'Kevin P. Murphy',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Computing'
    },



    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/3409/9780340992852.jpg',
        name: 'Midnight in the Garden of Good and Evil',
        author: 'John Berendt',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Crime-Thriller'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4091/9781409155737.jpg',
        name: 'City Of Bones',
        author: 'Michael Connelly',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Crime-Thriller'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/5947/9781594745263.jpg',
        name: 'Horrorstor',
        author: 'Sam Stall',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Crime-Thriller'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8402/9781840224009.jpg',
        name: 'The Hound of the Baskervilles & The Valley of Fear',
        author: 'Sir Arthur Conan Doyle',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Crime-Thriller'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/3936/9780393635522.jpg',
        name: 'The Overstory',
        author: 'Richard Powers',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Crime-Thriller'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/0919/9780091929510.jpg',
        name: 'How to Raise a Happy Toddler',
        author: 'Tizzie Hall',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Health'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/8928/9780892811380.jpg',
        name: 'The Complete Illustrated Kama Sutra',
        author: 'Vatsyayana Mallanaga',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Health'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/8445/9781844543090.jpg',
        name: 'Solitary Fitness',
        author: 'Charles Bronson',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Health'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/1437/9780143792208.jpg',
        name: 'Fake',
        author: 'Stephanie Wood',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Health'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/0607/9780060750503.jpg',
        name: 'Rumi: The Book of Love',
        author: 'Coleman Barks',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Health'
    },


    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/3455/9780345532862.jpg',
        name: 'A Victorian Flower Dictionary',
        author: 'Mandy Kirkby',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Natural-History'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/7841/9781784161446.jpg',
        name: 'A Walk In The Woods',
        author: 'Bill Bryson',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Natural-History'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/9112/9781911231127.jpg',
        name: 'The Mosquito',
        author: 'Timothy Winegard',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Natural-History'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4053/9781405394666.jpg',
        name: 'The Complete Dog Breed Book',
        author: 'DK',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Natural-History'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4472/9781447249962.jpg',
        name: 'Wild Food',
        author: 'Roger Phillips',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Natural-History'
    },



    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/0079/9780007902347.jpg',
        name: 'Hamlet',
        author: 'William Shakespeare',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Poetry-Drama'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/5866/9781586638504.jpg',
        name: 'The Merchant of Venice (No Fear Shakespeare)',
        author: 'Sparknotes',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Poetry-Drama'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/1411/9780141190167.jpg',
        name: 'Howl, Kaddish and Other Poems',
        author: 'Allen Ginsberg',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Poetry-Drama'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/3745/9780374531386.jpg',
        name: 'Slouching Towards Bethlehem',
        author: 'Joan Didion',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Poetry-Drama'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/7824/9781782435570.jpg',
        name: 'The Secret Library',
        author: 'Oliver Tearle',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Poetry-Drama'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4711/9781471130533.jpg',
        name: 'This Girl',
        author: 'Colleen Hoover',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Romance'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/3494/9780349414980.jpg',
        name: 'Of Blood and Bone',
        author: 'Nora Roberts',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Romance'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/4515/9780451530172.jpg',
        name: 'Of Human Bondage',
        author: 'W. Somerset Maugham',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Romance'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/4251/9780425178577.jpg',
        name: 'Betrayal in Death',
        author: 'J. D. Robb',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Romance'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/2419/9780241954973.jpg',
        name: 'The Girl on the Cliff',
        author: 'Lucinda Riley',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Romance'
    },

    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/8117/9780811733397.jpg',
        name: 'Self-Coached Climber',
        author: 'Dan Hague',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Sport'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/1401/9780140100181.jpg',
        name: 'The Basketball Diaries',
        author: 'Jim Carroll',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Sport'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/7874/9781787479036.jpg',
        name: 'The Tour According to G',
        author: 'Geraint Thomas',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Sport'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/9383/9781938340239.jpg',
        name: 'Training for the New Alpinism',
        author: 'Steve House',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Sport'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/8573/9780857386243.jpg',
        name: 'Mountain High',
        author: 'Daniel Friebe',
        location: '2nd Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Sport'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/6023/9781602399846.jpg',
        name: 'Mini Farming',
        author: 'Brett L. Markham',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Technology-Engineering'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/8657/9780865718234.jpg',
        name: `The Rocket Mass Heater Builder's Guide`,
        author: 'Erica Wisner',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Technology-Engineering'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/7181/9780718194475.jpg',
        name: 'Private Empire',
        author: 'Steve Coll',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Technology-Engineering'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/6195/9781619544734.jpg',
        name: `Pilot's Handbook of Aeronautical Knowledge`,
        author: 'Federal Aviation Administration (FAA)/Aviation Supplies & Academics (Asa)',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Technology-Engineering'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/8826/9780882668888.jpg',
        name: 'Natural Soap Book',
        author: 'Susan Miller Cavitch',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Technology-Engineering'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/2620/9780262026307.jpg',
        name: 'SITELESS',
        author: 'FranÃ§ois Blanciak',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Technology-Engineering'
    },
    {
        image: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/5932/9781593278212.jpg',
        name: 'The Lego Architecture Ideas Book',
        author: 'Alice Finch',
        location: '1st Floor',
        issued_by: 'None',
        issue_date: 'None',
        status: 'Available',
        category: 'Technology-Engineering'
    }
]

Book.insertMany(seedBooks)
    .then(res => {
        console.log(res)
    })
    .catch(er => {
        console.log(er)
    })