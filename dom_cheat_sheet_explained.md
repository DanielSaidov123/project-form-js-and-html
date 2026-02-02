# DOM Cheat Sheet (JavaScript) - עם הסברים

## 1. Selectors - בחירת אלמנטים
```js
// בוחר אלמנט לפי id
document.getElementById("id")

// בוחר את כל האלמנטים עם class מסוים
document.getElementsByClassName("class")   // מחזיר HTMLCollection

// בוחר את כל האלמנטים מסוג tag מסוים
document.getElementsByTagName("div")       // מחזיר HTMLCollection

// בוחר את האלמנט הראשון שעונה לסלקטור CSS
document.querySelector(".box")

// בוחר את כל האלמנטים שעונים לסלקטור CSS
document.querySelectorAll(".box")          // NodeList
```
> הסבר: `querySelector` מודרני ונוח יותר, `getElementsBy...` חי ומעודכן פחות.

## 2. Content - תוכן האלמנטים
```js
element.textContent        // מחזיר את הטקסט בלבד
element.innerText          // מחזיר את הטקסט כפי שהוא מוצג בדף
element.innerHTML          // מחזיר את הטקסט כולל תגיות HTML
```
```js
element.textContent = "שלום"
element.innerHTML = "<strong>שלום</strong>"
```
> הסבר: משתמשים ב-textContent כשצריך טקסט בלבד, ב-innerHTML כשצריך להכניס HTML.

## 3. Style - עיצוב CSS
```js
element.style.color = "red"
element.style.backgroundColor = "black"
element.style.fontSize = "20px"
```
> הסבר: הפקודה משנה את ה-CSS ישירות על האלמנט. `background-color` ב-JS הופך ל-backgroundColor.

## 4. Classes - עבודה עם מחלקות
```js
element.classList.add("active")
element.classList.remove("active")
element.classList.toggle("active")
element.classList.contains("active")
```
> הסבר: מאפשר להוסיף, להסיר, לבדוק או להחליף מחלקות CSS בלי לגעת ב-style ישירות.

## 5. Attributes - מאפייני אלמנט
```js
element.getAttribute("src")
element.setAttribute("src", "img.png")
element.removeAttribute("disabled")
element.hasAttribute("id")
```
> הסבר: מאפשר לקרוא ולשנות תכונות של האלמנט (למשל src, href, value).

## 6. Create / Remove - יצירה ומחיקה
```js
document.createElement("div")      // יוצרת אלמנט חדש
document.createTextNode("טקסט")    // יוצרת טקסט חדש
parent.appendChild(child)           // מוסיפה ילד לסוף
parent.prepend(child)               // מוסיפה ילד להתחלה
element.remove()                     // מסירה אלמנט
```
> הסבר: משמש לבניית דינמית של תוכן בדף.

## 7. Traversal - ניווט בעץ ה-DOM
```js
element.parentElement
element.children
element.firstElementChild
element.lastElementChild
element.nextElementSibling
element.previousElementSibling
```
> הסבר: מאפשר לעבור בין אלמנטים קרובים או הורה/ילד.

## 8. Events - אירועים
```js
element.addEventListener("click", () => {})
element.removeEventListener("click", func)
```
> אירועים נפוצים: click, dblclick, input, change, submit, keydown, keyup, mouseover, mouseout, load
> הסבר: מאזין לפעולות של המשתמש ומגיב להן בזמן אמת.

## 9. Forms - עבודה עם טפסים
```js
input.value
checkbox.checked
select.value
form.submit()
form.reset()
event.preventDefault() // מונע שליחת טופס
```
> הסבר: מאפשר לקרוא ולשנות ערכים של שדות טופס ולשלוט בהתנהגות שלהם.

## 10. Size & Position - מידות ומיקום
```js
element.offsetWidth
element.offsetHeight
element.clientWidth
element.clientHeight
element.getBoundingClientRect()
```
> הסבר: משמש לקבלת מידע על גודל ומיקום אלמנטים בדף.

## 11. document - מידע כללי
```js
document.title
document.body
document.head
document.URL
document.readyState
```
> הסבר: גישה למידע כללי על הדף והמבנה שלו.

## 12. window - חלון הדפדפן
```js
window.alert()
window.prompt()
window.confirm()
window.scrollTo(0, 500)
window.innerWidth
window.innerHeight
```
> הסבר: מאפשר אינטראקציה עם החלון עצמו, הודעות, גודל, גלילה ועוד.

