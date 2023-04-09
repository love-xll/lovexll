new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 150
    })
    .type("哥哥 和 岚岚")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走过的日子")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 150
}).go();
