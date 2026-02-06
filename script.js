const DATA = {
  note: `Hey love,\n\nI made this little page just to remind you of one thing:\nI’m so, so grateful you’re in my life.\n\nI love you today, tomorrow, and on all the ordinary days in between.\n\nYours & Only yours,\n— Gulab Jamun 😊`,
  valentineSpecial:
    "I don’t need a specific date to celebrate us. With you, every day feels like Valentine’s Day. I love you endlessly, and I’m falling deeper in love with you every second that goes by.💖",
  loveNotes: [
    {
      title: "For the girl I keep choosing",
      body: "I love you in the quiet ways — the ways you make ordinary moments feel sacred. I love you for your heart, for your warmth, and for the way you make me want to be better without ever asking.\n\nThis is my promise: I will keep showing up. I will keep understanding you. I will keep loving you — not just when it’s easy, but especially when it’s real.",
    },
    {
      title: "When I think of home",
      body: "Home isn’t a place anymore. It’s your name on my screen. It’s your laugh. It’s the way my heart feels lighter when you say you’re okay.\n\nIf love has a language, you are the only sentence I never get tired of reading.",
      images: [
        { src: "IMG_5943.PNG", alt: "When I think of home" },
        { src: "wall.PNG", alt: "Another memory" }
      ],
    },
  ],
  memories: [
    { caption: "A moment I replay when I miss you.", img: "favmmts1.heic" },
    { caption: "My favorite view.", img: "favmmts2.heic" },
    { caption: "Proof that happiness can be captured.", img: "favmmts3.jpg" },
    { caption: "Soft light, softer hearts.", img: "favmmts4.jpg" },
  ],
  thingsILove: [
    "The little things you notice.",
    "Your voice > any song.",
    "The way you care about me.",
    "Your Dressing Scense ~Chummeshwari. 😘",
    "Your hugs feel like home.",
    "I love to listen to you.",
    "I love you hairs and want to play with it. 🥰",
    "Your smile & laugh is my favorite notification.",
    "Your eyes are my favorite. 😘",
    "You’re stuck with me — now and forever.",
  ],
  galleries: {
    gallery2: [
      { caption: "I'll keep your smile forever.", img: "01.heic" },
      { caption: "A bunch of unforgettable moments.", img: "02.heic" },
      { caption: "The kind of day that stays.", img: "03.JPG" },
      { caption: "Just us being us.", img: "04.JPG" },
      { caption: "A chapter I’ll never close.", img: "05.JPG" },
      { caption: "Golden hour with my golden person.", img: "06.JPG" },
      { caption: "You gave me the world", img: "07.heic" },
      { caption: "Two hearts, one rhythm.", img: "08.jpg" },
      { caption: "Every frame feels like home.", img: "09.jpg" },
      { caption: "The way we look at each other.", img: "10.jpg" },
      { caption: "Moments like these make forever.", img: "11.heic" },
      { caption: "Our story in a single glance.", img: "12.heic" },
      { caption: "Chaos and calm, all in one.", img: "13.jpg" },
      { caption: "Our first outing date", img: "14.heic" },
      { caption: "A pause button for this moment.", img: "15.heic" },
      { caption: "Sunsets and you.", img: "16.JPG" },
      { caption: "Us being Best Fit", img: "17.JPG" },
      { caption: "And so it continues…", img: "18.JPG" },
    ],
  },
  timeline: [
    {
      date: "25 November 2025",
      title: "The First Spark",
      message:
        "All it started with a follow request on Instagram and you got my attention by liking my posts. I decided to text you, but it was late and you’d already fallen asleep, therefore you didn’t reply. When I woke up to your reply—a sweet excuse about dozing off.. that was the moment I started falling for you. I felt something shift in me then, and honestly, I’ve been falling deeper in love with you ever since.",
    },
    {
      date: "27 November 2025",
      title: "The First Meeting",
      message:
        "We planned this the day before, and after class, it finally happened. When I first saw you, I honestly had no words. I was a little nervous, but mostly just so happy to be standing there with you. Then we went to Oxygen Park, and that day is a memory I’ll keep forever.",
    },
    {
      date: "7 December 2025",
      title: "The First Date",
      message:
        "Spending time together at Freshers just wasn't enough, so we decided to go for your first date to Latratu Dam. I’ll never forget that day. It’s where I felt butterflies going crazy in my stomach. That entire moment was just... priceless.",
    },
    {
      date: "Infinity & Endlessly",
      title: "My Promise",
      message:
        "From the day I met you, my love just keeps growing. I love you so much, my Chasni. I love every moment with you... whether it was Broken Woods, or Getalsud Dam (where we made our first reel and you danced while I just stood there!), or our recent bike trip to Netarhat. I’m with you through all the ups and downs. We have a whole life to grow and explore together. I’m never leaving, and I’ll love you infinitely, always. And our fruitfull journey and this timeline will continue for ever",
    },
  ],
};

function el(tag, className, attrs = {}) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  for (const [k, v] of Object.entries(attrs)) {
    if (v === null || v === undefined) continue;
    if (k === "text") node.textContent = v;
    else node.setAttribute(k, String(v));
  }
  return node;
}

function mountMemories() {
  const grid = document.getElementById("memoriesGrid");
  if (!grid) return;

  DATA.memories.forEach((m, idx) => {
    const tile = el("article", "tile", { "data-idx": idx });

    const btn = el("button", "tile__btn", { type: "button" });

    const giftWrap = el("div", "tile__gift");
    const gift = el("div", "gift", { text: "🎁" });
    giftWrap.appendChild(gift);

    const content = el("div", "tile__content");
    const img = el("img", "mem-img", {
      src: `photos/${m.img}`,
      alt: "Memory photo",
      loading: "lazy",
    });
    const cap = el("p", "mem-cap", { text: m.caption });
    content.append(img, cap);

    btn.append(giftWrap, content);
    tile.appendChild(btn);

    btn.addEventListener("click", () => {
      tile.classList.toggle("is-open");
    });

    grid.appendChild(tile);
  });
}

function mountThingsILove() {
  const grid = document.getElementById("loveGrid");
  if (!grid) return;

  DATA.thingsILove.forEach((t) => {
    const card = el("div", "love-card", { text: t });
    grid.appendChild(card);
  });
}

function mountValentineSpecial() {
  const p = document.getElementById("valentineText");
  if (!p) return;
  p.textContent = DATA.valentineSpecial;
}

function mountLoveNotes() {
  const wrap = document.getElementById("loveNotes");
  if (!wrap) return;

  DATA.loveNotes.forEach((n) => {
    const hasMedia = Boolean(n.img || n.images);
    const card = el("article", hasMedia ? "note-card note-card--media" : "note-card");

    const content = el("div", "note-card__content");
    content.appendChild(el("h3", "note-card__title", { text: n.title }));
    content.appendChild(el("p", "note-card__body", { text: n.body }));
    card.appendChild(content);

    if (hasMedia) {
      const media = el("div", "note-card__media");
      const imgs = n.images || [{ src: n.img, alt: n.imgAlt || "Love note photo" }];
      imgs.forEach((imgObj) => {
        const thumb = el("div", "note-card__thumb");
        thumb.appendChild(
          el("img", "note-card__img", {
            src: `photos/${imgObj.src}`,
            alt: imgObj.alt || "Love note photo",
            loading: "lazy",
          })
        );
        media.appendChild(thumb);
      });
      card.appendChild(media);
    }

    wrap.appendChild(card);
  });
}

function mountGallery(id, photos) {
  const wrap = document.getElementById(id);
  if (!wrap) return;

  photos.forEach((p) => {
    const fig = el("figure", "photo");
    fig.appendChild(
      el("img", "", {
        src: `photos/${p.img}`,
        alt: "Photo",
        loading: "lazy",
      })
    );
    fig.appendChild(el("figcaption", "photo__cap", { text: p.caption }));
    wrap.appendChild(fig);
  });
}

function mountTimeline() {
  const wrap = document.getElementById("timelineList");
  if (!wrap) {
    console.error("Timeline container missing");
    return;
  }
  console.log("Mounting timeline with items:", DATA.timeline.length);

  const icons = ["✨", "💌", "🤍", "🌙", "🌹", "🫶", "💞", "♾", "🎀", "🕯"]; 

  DATA.timeline.forEach((t, idx) => {
    console.log("Adding timeline item:", t.date, t.title);
    const item = el("button", "timeline-item", {
      type: "button",
      "aria-expanded": "false",
    });

    const left = el("div", "timeline-left");
    left.appendChild(el("div", "timeline-date", { text: t.date }));
    item.appendChild(left);

    const spine = el("div", "timeline-spine");
    spine.appendChild(el("span", "timeline-dot", { "aria-hidden": "true" }));
    item.appendChild(spine);

    const card = el("div", "timeline-card");
    const top = el("div", "timeline-card__top");
    top.appendChild(el("div", "timeline-icon", { "aria-hidden": "true", text: icons[idx % icons.length] }));
    top.appendChild(el("div", "timeline-title", { text: t.title }));
    top.appendChild(el("div", "timeline-chevron", { "aria-hidden": "true", text: "⌄" }));
    card.appendChild(top);

    const body = el("div", "timeline-card__body");
    const bodyInner = el("div", "timeline-card__body-inner");
    bodyInner.appendChild(el("div", "timeline-message", { text: t.message }));
    body.appendChild(bodyInner);
    card.appendChild(body);
    item.appendChild(card);

    item.addEventListener("click", () => {
      console.log("Timeline item clicked:", t.date);
      const next = !item.classList.contains("is-expanded");
      item.classList.toggle("is-expanded", next);
      item.setAttribute("aria-expanded", next ? "true" : "false");
    });

    wrap.appendChild(item);
  });
  console.log("Timeline mount complete. Children count:", wrap.children.length);
}

function createDialog() {
  const modal = document.getElementById("dialogModal");
  const title = document.getElementById("dialogTitle");
  const body = document.getElementById("dialogBody");

  if (!modal || !title || !body) {
    return { open: () => {}, close: () => {}, isOpen: () => false };
  }

  const close = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const open = (t, b) => {
    title.textContent = t;
    body.textContent = b;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  modal.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.dataset.close === "true") close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) close();
  });

  return {
    open,
    close,
    isOpen: () => modal.classList.contains("is-open"),
  };
}

function setupEnvelope(dialog) {
  const envelope = document.getElementById("envelopeBtn");
  if (!envelope) return;

  envelope.addEventListener("click", () => {
    if (envelope.classList.contains("is-opening")) return;
    if (dialog.isOpen()) return;

    envelope.classList.add("is-opening");
    envelope.classList.add("is-open");

    window.setTimeout(() => {
      dialog.open("Secret Note", DATA.note);
      envelope.classList.remove("is-opening");
    }, 520);
  });
}

function setupRevealAnimations() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  document
    .querySelectorAll(
      ".section__head, .tile, .love-card, .note-card, .photo, .timeline-item, .footer__inner"
    )
    .forEach((node) => io.observe(node));
}

function spawnHearts() {
  const root = document.getElementById("bgHearts");
  if (!root) return;

  const emojis = ["❤", "💗", "💖", "💘", "💕"];
  const make = () => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const left = Math.random() * 100;
    const size = 12 + Math.random() * 18;
    const duration = 8 + Math.random() * 10;
    const opacity = 0.08 + Math.random() * 0.16;

    heart.style.left = `${left}vw`;
    heart.style.fontSize = `${size}px`;
    heart.style.opacity = `${opacity}`;
    heart.style.animationDuration = `${duration}s`;

    root.appendChild(heart);

    window.setTimeout(() => {
      heart.remove();
    }, duration * 1000 + 200);
  };

  window.setInterval(make, 520);
  for (let i = 0; i < 14; i++) window.setTimeout(make, i * 220);
}

mountMemories();
mountThingsILove();
mountValentineSpecial();
mountLoveNotes();
mountGallery("gallery2", DATA.galleries.gallery2);

const dialog = createDialog();
setupEnvelope(dialog);
mountTimeline();
setupRevealAnimations();
spawnHearts();
console.log("Init complete. Sections:", document.querySelectorAll(".section").length);
