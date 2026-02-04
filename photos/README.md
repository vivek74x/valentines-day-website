# Photos Folder

Place your image files here (jpg, jpeg, png, webp).

Then update the `galleries` data in `script.js` to reference the filenames:

```js
galleries: {
  gallery1: [
    { img: "your-photo1.jpg", caption: "Your caption here" },
    { img: "your-photo2.jpg", caption: "Another caption" },
    // ...
  ],
  gallery2: [
    { img: "your-photo3.jpg", caption: "More memories" },
    // ...
  ]
}
```

The website will automatically load images from this folder.
