const sequence = new (function(){
    let counter = 0
    this.next = () => ++counter
})();

class Capture {
    constructor(indent = 0, title = 'no title', sourceURL = null, imagePath = null) {
        const id = sequence.next()
        this._props = { id, indent, title, sourceURL, imagePath }
    }
    get id() { return this._props.id }
    get indent() { return this._props.indent }
    get title() { return this._props.title }
    get sourceURL() { return this._props.sourceURL }
    get imagePath() { return this._props.imagePath }
}

const captures = [
    new Capture(0, "ONE PIECEのイラスト", "https://www.irasutoya.com/2021/01/onepiece.html", "irasutoya-com-2021-01-01-onepiece.png"),
    new Capture(1, "モンキー・D・ルフィのイラスト", "https://www.irasutoya.com/2021/01/luffy.html", "onepiece01_luffy.png"),
    new Capture(1, "ロロノア・ゾロのイラスト", "https://www.irasutoya.com/2021/01/zoro.html", "onepiece02_zoro_bandana.png"),
    new Capture(1, "ナミのイラスト", "https://www.irasutoya.com/2021/01/nami.html", "onepiece03_nami.png"),
    new Capture(1, "そげキングのイラスト", "https://www.irasutoya.com/2021/01/sogeking.html", "onepiece04_usopp_sogeking.png"),
    new Capture(1, "サンジのイラスト", "https://www.irasutoya.com/2021/01/sanji.html", "onepiece05_sanji.png"),
    new Capture(1, "トニートニー・チョッパーのイラスト", "https://www.irasutoya.com/2021/01/chopper.html", "onepiece06_chopper.png"),
    new Capture(1, "ニコ・ロビンのイラスト", "https://www.irasutoya.com/2021/01/robin.html", "onepiece07_robin.png"),
    new Capture(1, "フランキーのイラスト", "https://www.irasutoya.com/2021/01/franky.html", "onepiece08_franky.png"),
    new Capture(1, "ブルックのイラスト", "https://www.irasutoya.com/2021/01/brook.html", "onepiece09_brook.png"),
    new Capture(1, "ジンベエのイラスト", "https://www.irasutoya.com/2021/01/jinbe.html", "onepiece10_jinbe.png"),
]
