let quotes =[
    {"quote":"The greatest glory in living lies not in never falling, but in rising every time we fall",
    "author":"Nelson Mandela"
    },
    {"quote":"The way to get started is to quit talking and begin doing.",
    "author":"Walt Disney"
    },
  
    {"quote":"If life were predictable it would cease to be life, and be without flavor",
    "author":"Eleanor Roosevelt"
    },
    {"quote":"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
    "author":"James Cameron"
    },
    {"quote":"Life is what happens when you're busy making other plans.",
    "author":"John Lennon"
    },{"quote":"Spread love everywhere you go. Let no one ever come to you without leaving happier",
    "author":"Mother Teresa"
    },
    {"quote":"When you reach the end of your rope, tie a knot in it and hang on.",
    "author":"Franklin D. Roosevelt"
    },
    {"quote":"Always remember that you are absolutely unique. Just like everyone else.",
    "author":"Margaret Mead"
    },
    {"quote":"Don't judge each day by the harvest you reap but by the seeds that you plant.",
    "author":"Robert Louis Stevenson"
    },
    {"quote":"The future belongs to those who believe in the beauty of their dreams.",
    "author":"Eleanor Rooseveltb"
    },
    {"quote":"Tell me and I forget. Teach me and I remember. Involve me and I learn",
    "author":"Benjamin Franklin"
    },
    {"quote":"It is during our darkest moments that we must focus to see the light.",
    "author":"Aristotle"
    },
    {"quote":"Whoever is happy will make others happy too.",
    "author":"Anne Frank"
    },
    {"quote":"Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "author":"Ralph Waldo Emerson"
    },
    {"quote":"Spread love everywhere you go. Let no one ever come to you without leaving happier",
    "author":"Mother Teresa"
    },
    {"quote":"When you reach the end of your rope, tie a knot in it and hang on",
    "author":"Franklin D. Roosevelt"
    },
    {"quote":"Always remember that you are absolutely unique. Just like everyone else.",
    "author":"Margaret Mead"
    },
    {"quote":"Don't judge each day by the harvest you reap but by the seeds that you plant.",
    "author":"Robert Louis Stevenson"
    },
    {"quote":"The future belongs to those who believe in the beauty of their dreams.",
    "author":"Eleanor Roosevelt"
    },
    {"quote":"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "author":"Benjamin Franklin"
    },
   
    {"quote":"You will face many defeats in life, but never let yourself be defeated.",
    "author":"Maya Angelo"
    
    },
    {"quote":"Never let the fear of striking out keep you from playing the game.",
    "author":"Babe Ruth"
    },

]

const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

btn.addEventListener('click',getrandom);

function getrandom(){
    let number = Math.floor(Math.random()*quotes.length);
    quote.innerHTML = '<span>"</span>' +quotes[number].quote +'<span>"</span>';
    author.innerHTML = '<span>--</span>' +quotes[number].author;
}




