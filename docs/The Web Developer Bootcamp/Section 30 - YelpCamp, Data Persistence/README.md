# Section 30 - YelpCamp: Data Persistence

## Table of Contents

- [Section 30 - YelpCamp: Data Persistence](#section-30---yelpcamp-data-persistence)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] YelpCamp: Adding Mongoose](#lecture-yelpcamp-adding-mongoose)
  - [[Lecture] How to Avoid Potential Issues with Mongoose](#lecture-how-to-avoid-potential-issues-with-mongoose)
  - [[Lecture] YelpCamp: Campground Show Page](#lecture-yelpcamp-campground-show-page)

## [Lecture] YelpCamp: Adding Mongoose

回到我們主要的 YelpCamp 專案，首先安裝 mongoose：

```bash
npm install --save mongoose
```

接著在 `app.js` 中進行資料庫的交互處理：

```javascript
var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// 設置資料庫綱要（Setup Schema）
var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// 添加資料到資料庫
// Campground.create(
//      {
//          name: "Granite Hill", 
//          image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
//          description: "This is a huge granite hill, no bathrooms.  No water. Beautiful granite!"
         
//      },
//      function(err, campground){
//       if(err){
//           console.log(err);
//       } else {
//           console.log("NEWLY CREATED CAMPGROUND: ");
//           console.log(campground);
//       }
//     });

    
app.get("/", function(req, res){
    res.render("landing");
});

// INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
       if(err){
           console.log(err);
       } else {
          res.render("index", {campgrounds:allCampgrounds});
       }
    });
});

// CREATE - add new campground to DB
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc}

    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            // Redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

// NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
   res.render("new.ejs"); 
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
})

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});
```

## [Lecture] How to Avoid Potential Issues with Mongoose

這一小節處理的是因為 Mongoose 版本差異造成的問題，建議將安裝好的 Mongoose 進行卸載並指定版本安裝：

```bash
# Uninstall mongoose and install with certain version
$ npm uninstall mongoose ; npm install --save mongoose@5.3.15
```

除此之外，連接的方式也略有更動：

```javascript
mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
```

## [Lecture] YelpCamp: Campground Show Page

在這裡我們創建 RESTful 路由，其概念大概如下表所示：

| Name      | URL           | verb.     | Description                       |
| :--       | :--           | :--       | :--                               |
| INDEX     | `/dogs`       | `GET`     | Display a list of dog             |
| NEW       | `/dogs/new`   | `GET`     | Display form to make a new dog    |
| CREATE    | `/dogs/`      | `POST`    | Add new dog to database           |
| SHOW      | `/dogs/:id`   | `GET`     | Shows info about one dog          |

關於 RESTful 更多的介紹詳見下一章節內容。