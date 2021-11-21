<template>
<div class="main">
<h2>POSTS</h2>
<posts_style :postList="postList"> </posts_style>
</div>
</template>
<script>
import posts_style from '@/components/posts_style.vue';
export default {
name: "Posts",
components: {posts_style},
data(){
return{
postList:[{
        profilePicture: "./assets/Account.png",
        postPicture: "./assets/penguins.jpg",
        text: "GUYS! I saw 3 penguins today! BEST DAY OF MY LIFE!",
        date: "Sep 25, 2021 13.34"
    },
    {
        profilePicture: "./assets/Account2.png",
        postPicture: "",
        text: "Aww ❤❤❤ Where did you see them?",
        date: "Sep 25, 2021 13.40"
    },
    {
        profilePicture: "./assets/Account.png",
        postPicture: "./assets/parade.jpg",
        text: "I saw them on a Parade... PARADE OF THE PENGUINS!!!",
        date: "Sep 25, 2021 13.44"
    },
    {
        profilePicture: "./assets/fox.jpg",
        postPicture: "",
        text: "I wish that I were there \uD83D\uDE2D\uD83D\uDE2D\uD83D\uDE2D",
        date: "Sep 25, 2021 13.46"
    },
    {
        profilePicture: "./assets/Account.png",
        postPicture: "./assets/proud.jpg",
        text: "They are really incredible creatu. indeed.",
        date: "Oct 22, 2021 15.46"
    },
    {
        profilePicture: "./assets/Account2.png",
        postPicture: "",
        text: "Long time no seen mate. How have you been?",
        date: "Oct 22, 2021 15.54"
    },
    {
        profilePicture: "./assets/Account.png",
        postPicture: "./assets/sliding.jpg",
        text: "You know... Busy as a penguin. Just wiggling here, sliding there. How about you?",
        date: "Oct 22, 2021 16.04"
    },
    {
        profilePicture: "./assets/Account2.png",
        postPicture: "./assets/haircut.jpg",
        text: "Same old. My wife said that I need a haircut, but I'm not so sure",
        date: "Oct 22, 2021 16.10"
    },
    {
        profilePicture: "./assets/fox.jpg",
        postPicture: "",
        text: "I think it looks lovely \uD83D\uDE0D",
        date: "Oct 22, 2021 16.13"
    },
    {
        profilePicture: "./assets/giraffe.jpg",
        postPicture: "",
        text: "Yeah, you are a real heartbreaker \uD83D\uDE02",
        date: "Oct 22, 2021 16.18"
    }
]}}}
</script>

