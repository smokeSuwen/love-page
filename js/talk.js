new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("孙茂峰 && 赵冬夏")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("送给最可爱最漂亮的女孩")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 50
}).go();