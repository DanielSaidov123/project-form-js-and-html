# 📘 DOM Cheat Sheet – שליף מלא למבחן

## מה זה DOM?
DOM (Document Object Model) הוא ייצוג של דף ה-HTML כעץ של אובייקטים.
JavaScript משתמש ב-DOM כדי לשלוט בדף אחרי שהוא נטען.

אפשר באמצעות DOM:
- למצוא אלמנטים
- לשנות תוכן
- לשנות עיצוב
- להוסיף / למחוק אלמנטים
- להגיב לפעולות משתמש

---

## 🔍 מציאת אלמנטים (Selectors)

### getElementById
```js
const el = document.getElementById("title");
```
מחפש אלמנט לפי id ומחזיר אלמנט אחד בלבד.

### getElementsByClassName
```js
const boxes = document.getElementsByClassName("box");
```
מחזיר אוסף (HTMLCollection), לא מערך.

### getElementsByTagName
```js
const divs = document.getElementsByTagName("div");
```
מחפש לפי תגית.

### querySelector
```js
const el = document.querySelector(".box");
```
מחזיר את האלמנט הראשון שמתאים לסלקטור CSS.

### querySelectorAll
```js
const els = document.querySelectorAll(".box");
```
מחזיר NodeList.

---

## 🖱️ אירועים (Events)

```js
button.addEventListener("click", () => {
  console.log("נלחץ");
});
```

אירועים נפוצים:
click, dblclick, mouseover, mouseout, keydown, keyup, change, submit

---

## ✏️ שינוי תוכן

```js
el.innerText = "שלום";
el.textContent = "שלום";
el.innerHTML = "<strong>שלום</strong>";
```

---

## 🎨 שינוי עיצוב

```js
el.style.color = "red";
el.classList.toggle("active");
```

---

## ➕ יצירת והוספת אלמנטים

```js
const p = document.createElement("p");
p.innerText = "שלום";
document.body.appendChild(p);
```

---

## ❌ מחיקת אלמנטים

```js
el.remove();
```

---

## 📦 Attributes

```js
img.getAttribute("src");
img.setAttribute("src", "pic.png");
```

---

## ⌨️ input

```js
input.value
checkbox.checked
```

---

## 🧠 event

```js
button.addEventListener("click", (e) => {
  console.log(e.target);
});
```

---

## 🚫 preventDefault

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```
