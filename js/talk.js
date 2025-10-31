new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("尹健良 && 熊梦楠")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("此网页送给最可爱最漂亮的女孩")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();