let books = [
  {
    title: "ფრედი მერკური",
    price: 60,
    img: "https://apiv1.biblusi.ge/storage/book/XFye73AKdNSfGLiHmZqUs8fBbM3bkiQKqfTrZryX.png",
  },
  {
    title: "ბითლზი - ერნესტო ასანტე",
    price: 60,
    img: "https://apiv1.biblusi.ge/storage/book/4FGBZRaW9yQEmx1114ka4zLxxsFx98eCLVLSu8LF.png",
  },
  {
    title: "მოთხრობები - ეგნატე ნინოშვილი    ",
    price: 10,
    img: "https://apiv1.biblusi.ge/storage/book/rc0e5hTQHxHBEP1HSpszbofyPkdjnwyvrWxADbjO.png",
  },
  {
    title: "ზღაპრები -ძმები გრიმები",
    price: 10,
    img: "https://apiv1.biblusi.ge/storage/book/zRXQcGKR1KKw2nMouUI6ZFZqOJNgsOm5EKSSddAN.png",
  },
  {
    title: "ჯაყოს ხიზნები",
    price: 12,
    img: "https://apiv1.biblusi.ge/storage/book/c0RC6XpPDX1khv1JhhHJIua1HgTslHraexJy9BZN.png",
  },
  {
    title: "ჰეკატე - მიჰყევი ტაროს",
    price: 28,
    img: "https://apiv1.biblusi.ge/storage/book/0Oko4bFEmmtHxgFkmfyJU8Pdz0uuiyZa7BpxyBk6.png",
  },
  {
    title: "უცნაური კითხვები და პასუხები ჩვენს პლანეტაზე",
    price: 13,
    img: "https://apiv1.biblusi.ge/storage/book/AnUhYqaixlnueGVBFzMtBwHCTusSAz92cTgPZB19.png",
  },
  {
    title: "ფრედი მერკური",
    price: 60,
    img: "https://apiv1.biblusi.ge/storage/book/XFye73AKdNSfGLiHmZqUs8fBbM3bkiQKqfTrZryX.png",
  },
  {
    title: "ბითლზი - ერნესტო ასანტე",
    price: 60,
    img: "https://apiv1.biblusi.ge/storage/book/4FGBZRaW9yQEmx1114ka4zLxxsFx98eCLVLSu8LF.png",
  },
  {
    title: "მოთხრობები - ეგნატე ნინოშვილი    ",
    price: 10,
    img: "https://apiv1.biblusi.ge/storage/book/rc0e5hTQHxHBEP1HSpszbofyPkdjnwyvrWxADbjO.png",
  },
  {
    title: "ზღაპრები -ძმები გრიმები",
    price: 10,
    img: "https://apiv1.biblusi.ge/storage/book/zRXQcGKR1KKw2nMouUI6ZFZqOJNgsOm5EKSSddAN.png",
  },
  {
    title: "ჯაყოს ხიზნები",
    price: 12,
    img: "https://apiv1.biblusi.ge/storage/book/c0RC6XpPDX1khv1JhhHJIua1HgTslHraexJy9BZN.png",
  },
  {
    title: "ჰეკატე - მიჰყევი ტაროს",
    price: 28,
    img: "https://apiv1.biblusi.ge/storage/book/0Oko4bFEmmtHxgFkmfyJU8Pdz0uuiyZa7BpxyBk6.png",
  },
  {
    title: "უცნაური კითხვები და პასუხები ჩვენს პლანეტაზე",
    price: 13,
    img: "https://apiv1.biblusi.ge/storage/book/AnUhYqaixlnueGVBFzMtBwHCTusSAz92cTgPZB19.png",
  },
];

books.forEach((book) => console.log(book));
const mainDiv = document.querySelector(".mainDiv");

let div = document.createElement("div");

// div.innerHTML = '<div class="card">
// <img
//   src="https://apiv1.biblusi.ge/storage/book/XFye73AKdNSfGLiHmZqUs8fBbM3bkiQKqfTrZryX.png"
//   alt=""
// />
// <h1>wignis satauri</h1>
// <h3>60 ₾</h3>
// </div>'

div.innerHTML = "gamarjoba";

books.forEach((book) => {
  let div = document.createElement("div");
  div.innerHTML = `<div class="card">
 <img
 src="${book.img}"
 alt=""
 />
 <h1>${book.title}</h1>
 <h3>${book.price} ₾</h3>
 </div>`;
  mainDiv.append(div);
});
