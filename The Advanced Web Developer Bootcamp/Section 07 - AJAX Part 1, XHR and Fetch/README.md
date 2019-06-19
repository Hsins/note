# Section 07 - AJAX Part 1: XHR and Fetch

- [Section 07 - AJAX Part 1: XHR and Fetch](#Section-07---AJAX-Part-1-XHR-and-Fetch)
  - [[Note] AJAX](#Note-AJAX)
  - [[Note] XML and JSON](#Note-XML-and-JSON)
  - [[Note] Make Request with `XMLHttpRequest`](#Note-Make-Request-with-XMLHttpRequest)
  - [[Note] Make Request with Fetch](#Note-Make-Request-with-Fetch)

## [Note] AJAX

## [Note] XML and JSON

## [Note] Make Request with `XMLHttpRequest`

```javascript
var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
  if (XHR.readyState == 4 && XHR.status == 200) {
    console.log(XHR.responseText);
  } else {
    console.log("There was a problem!");
  }
}

XHR.open("GET", "https://api.github.com/zen");
XHR.send();
```

## [Note] Make Request with Fetch

