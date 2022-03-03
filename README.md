# What's this?

- Webブラウザで `./img` に配置した画像ファイルを見るだけの Viewer です。
- インターネット上で取得した画面キャプチャなどを見るのに使えます。

# Usage

## Open viewer

（※セットアップが済んでいない場合は、後述するセットアップを参照してください。）
- ES2017対応のWebブラウザで `./app.html` を開いてください。
- 画面左のINDEXにある画像のタイトルをクリックすると、画面右の画像が切り替わります。

## Setups
- `./img` に画像ファイルを配置し、そのデータを `./captures.js` の `captures[]` へ Capture オブジェクトとして追加してください。
    ```js
    captures.push(new Capture(indet, title, sourceURL, imagePath))
    ```
    - indet: INDEX(目次)に並ぶときのインデントレベルです。+1するごとに1文字分のインデントが追加されます。
    - title: 画像のタイトルです。
    - sourceURL: 画像取得元のURLです。
    - imagePath: `./img/` 以降のファイルパスです。
