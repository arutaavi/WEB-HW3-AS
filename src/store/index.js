import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        postList:[{
            profilePicture: require('/src/assets/Account.png'),
            postPicture: require('/src/assets/penguins.jpg'),
            text: "GUYS! I saw 3 penguins today! BEST DAY OF MY LIFE!",
            date: "Sep 25, 2021 13.34",
            likes: 15,
            button: "button1"
        },
            {
                profilePicture: require('/src/assets/Account2.png'),
                postPicture: "",
                text: "Aww ❤❤❤ Where did you see them?",
                date: "Sep 25, 2021 13.40",
                likes: 3,
                button: "button2"
            },
            {
                profilePicture: require('/src/assets/Account.png'),
                postPicture: require("/src/assets/parade.jpg"),
                text: "I saw them on a Parade... PARADE OF THE PENGUINS!!!",
                date: "Sep 25, 2021 13.44",
                likes: 25,
                button: "button3"
            },
            {
                profilePicture: require("/src/assets/fox.jpg"),
                postPicture: "",
                text: "I wish that I were there \uD83D\uDE2D\uD83D\uDE2D\uD83D\uDE2D",
                date: "Sep 25, 2021 13.46",
                likes: 13,
                button: "button4"
            },
            {
                profilePicture: require("/src/assets/Account.png"),
                postPicture: require("/src/assets/proud.jpg"),
                text: "They are really incredible creatures indeed.",
                date: "Oct 22, 2021 15.46",
                likes: 26,
                button: "button5"
            },
            {
                profilePicture: require("/src/assets/Account2.png"),
                postPicture: "",
                text: "Long time no seen mate. How have you been?",
                date: "Oct 22, 2021 15.54",
                likes: 4,
                button: "button6"
            },
            {
                profilePicture: require("/src/assets/Account.png"),
                postPicture: require("/src/assets/sliding.jpg"),
                text: "You know... Busy as a penguin. Just wiggling here, sliding there. How about you?",
                date: "Oct 22, 2021 16.04",
                likes: 6,
                button: "button7"
            },
            {
                profilePicture: require("/src/assets/Account2.png"),
                postPicture: require("/src/assets/haircut.jpg"),
                text: "Same old. My wife said that I need a haircut, but I'm not so sure",
                date: "Oct 22, 2021 16.10",
                likes: 19,
                button: "button8"
            },
            {
                profilePicture: require("/src/assets/fox.jpg"),
                postPicture: "",
                text: "I think it looks lovely \uD83D\uDE0D",
                date: "Oct 22, 2021 16.13",
                likes: 14,
                button: "button9"
            },
            {
                profilePicture: require("/src/assets/giraffe.jpg"),
                postPicture: "",
                text: "Yeah, you are a real heartbreaker \uD83D\uDE02",
                date: "Oct 22, 2021 16.18",
                likes: 28,
                button: "button10"
            }
        ]
    },
    getters: {
        posting: state=> {
            var posting = state.postList.map(post => {
                return {
                    profilePicture: post.profilePicture,
                    postPicture: post.postPicture,
                    text: post.text,
                    date: post.date,
                    likes: post.likes,
                    button: post.button,
                }
            });
            return posting
        },
    },
    mutations: {
        button1: state => {
            state.postList.forEach(post => {
                if (post.button === "button1")
                    post.likes += 1;
            })
        },
        button2: state => {
            state.postList.forEach(post => {
                if (post.button === "button2")
                    post.likes += 1;
            })
        },
        button3: state => {
            state.postList.forEach(post => {
                if (post.button === "button3")
                    post.likes += 1;
            })
        },
        button4: state => {
            state.postList.forEach(post => {
                if (post.button === "button4")
                    post.likes += 1;
            })
        },
        button5: state => {
            state.postList.forEach(post => {
                if (post.button === "button5")
                    post.likes += 1;
            })
        },
        button6: state => {
            state.postList.forEach(post => {
                if (post.button === "button6")
                    post.likes += 1;
            })
        },
        button7: state => {
            state.postList.forEach(post => {
                if (post.button === "button7")
                    post.likes += 1;
            })
        },
        button8: state => {
            state.postList.forEach(post => {
                if (post.button === "button8")
                    post.likes += 1;
            })
        },
        button9: state => {
            state.postList.forEach(post => {
                if (post.button === "button9")
                    post.likes += 1;
            })
        },
        button10: state => {
            state.postList.forEach(post => {
                if (post.button === "button10")
                    post.likes += 1;
            })
        },
        ResetLikes: state => {
            state.postList.forEach(post => {
                post.likes = 0;
            })
        }
    },
    actions: {},
    modules: {},
});