# HTML Tags Cheat Sheet - עם הסברים

## 1. מבנה בסיסי
```html
<!DOCTYPE html>
<html lang="he">
<head>
  <meta charset="UTF-8">
  <title>כותרת הדף</title>
</head>
<body>
  <!-- תוכן הדף כאן -->
</body>
</html>
```
> הסבר: כל דף HTML מתחיל בתגית DOCTYPE, אחרי זה html שמכיל head (מידע על הדף) ו-body (התוכן שנראה למשתמש).

## 2. כותרות ופסקאות
```html
<h1>כותרת ראשית</h1>
<h2>כותרת משנה</h2>
<p>פסקה רגילה של טקסט</p>
```
> הסבר: h1-h6 מציינות כותרות בסדר יורד בחשיבות. p היא פסקה רגילה.

## 3. קישורים ותמונות
```html
<a href="https://example.com">קישור</a>
<img src="image.png" alt="תיאור התמונה" width="200">
```
> הסבר: a ליצירת קישורים, img להצגת תמונות עם alt שמתאר את התמונה למשתמשי מסך.

## 4. רשימות
```html
<ul>
  <li>פריט 1</li>
  <li>פריט 2</li>
</ul>
<ol>
  <li>פריט 1</li>
  <li>פריט 2</li>
</ol>
```
> הסבר: ul רשימה לא ממוספרת, ol רשימה ממוספרת, li פריט ברשימה.

## 5. טפסים (Forms)
```html
<form action="submit.php" method="post">
  <input type="text" name="username" placeholder="שם משתמש">
  <input type="password" name="password" placeholder="סיסמה">
  <input type="submit" value="שלח">
</form>
```
> הסבר: form יוצר טופס, input סוגים שונים של שדות, submit שולח את הטופס.

## 6. כפתורים
```html
<button type="button">לחץ כאן</button>
<button type="submit">שלח</button>
```
> הסבר: button ליצירת כפתורים, סוגי button שונים: רגיל או לשליחת טופס.

## 7. דיבים ו-ספנים (Div & Span)
```html
<div class="container">
  <p>טקסט בתוך div</p>
</div>
<span>טקסט קצר</span>
```
> הסבר: div מגדיר בלוק של תוכן, span משמש להחלת עיצוב על טקסט קצר.

## 8. קטעי קוד ומרכאות
```html
<code>console.log('Hello')</code>
<pre>
  קוד עם רווחים
</pre>
```
> הסבר: code להצגת קוד, pre שומר רווחים ושורות כמו במקור.

## 9. מדיה נוספות
```html
<video src="video.mp4" controls></video>
<audio src="audio.mp3" controls></audio>
```
> הסבר: video ואודיו מאפשרים להטמיע סרטון או סאונד עם כפתורי הפעלה.

## 10. טבלאות
```html
<table>
  <tr>
    <th>כותרת</th>
    <th>כותרת 2</th>
  </tr>
  <tr>
    <td>תא 1</td>
    <td>תא 2</td>
  </tr>
</table>
```
> הסבר: table יוצר טבלה, tr שורה, th תא כותרת, td תא רגיל.

## 11. תגיות מטא
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
> הסבר: charset מגדיר קידוד, viewport חשוב לרספונסיביות במובייל.

