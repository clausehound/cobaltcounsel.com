//Dictionary of all community titles (Keys) and pictures (Values)
var communityData = { 
      "Ryerson Business Law Clinic": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/Ryerson-Buusiness-law-clinic-lesson-on-legal-contracts.png",
      "Bizdom in Detroit": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/Bizdom-in-Detroit.jpg",
      "Detroit Startup": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/Detroit-startup.jpg",
      "Detroit Innovation": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/Detroit-Innovation.jpg",
      "Proud Supporter of the Power Up Sales Challenge": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/Cobalt-Sponsors-Power-Up-Sales-Challenge.jpg",
      "Cobalt Makers and Shakers": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/Cobalt-Sponsors-Makers-and-Shakers-Founders-and-Funders-event-at-the-University-Club.jpg",
      "Team @ Steamwhistle": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/Teamwhistle-@-Steam.jpg",
      "CEO Circle at Legal Innovation Zone": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/CEO-Circle-from-14-Mar-2017-LIZ-Letter.jpg",
      "Supporting Environment Hamilton Cold Weather Readiness": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/BMW-Foundation-Event-Hamilton-4.jpg",
      "Proud Sponsor of the Power Up Sales Challenge": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/5th-Annual-Power-Up-Sales-Challenge.jpg",
      "HackJustice @ MaRS": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/HackJustice-at-MRS.jpg",
      "Innovation Factory Hamilton": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/Innovation-Factory-Hamilton-e1490647142345.jpg",
      "Hacker Studios": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/hacker-studios.jpg",
      "Social Innovation at Work, at Innovation Works": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/InnovationWorks-3.jpg",
      "Kireitsu Forum at Techalliance": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/kireitsu-forum.jpg",
      "Mohawk Surge Funding Event": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/Mohawk-surge.jpg",
      "TSX Speaking Engagement": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/Rajah-at-TSX.jpg",
      "Teaching at Western Accelerator": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/Teaching-at-Western-Accelerator-2017.jpg",
      "Lecture at Ryerson University": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/Lecture-at-Ryerson-University.jpg",
      "Teaching at Ryerson U": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/Teaching-at-Ryerson-U.jpg",
      "OCE Discovery": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/OCE-discovery-2016.jpg",
      "SXSW": "http://cobaltcounselw.wpengine.com/wp-content/uploads/2017/03/SXSW.jpg"
    }
//Global Variables

//Enlarged image div 
var imageHolder;

//Enlarged image being displayed
var currentImage;

//Entire page
var page;



//triger of asynchronous loading once page has loaded
window.onload = function communityLoading() {


  //Make sure image loading doesn't happen on non-contact-us pages
  if(document.getElementById("community-check") !== null){

    setMap()
    window.addEventListener("resize",setMapSize)

    //Separate variable for numeric indexing rather than iterating through a dictionary
    var i = 1; 
    var downloadingImage = new Array();
    
    for (var key in communityData) {
      //Creates image variable corresponding to each html image based on their ID (Same as title/keys)
      var image = document.getElementById(key);

      //Separate image variable for image to be downloaded
      downloadingImage[i - 1] = new Image(); 

      //handler for when image finishes loading
      onLoading(downloadingImage[i - 1], image, key, i); 

      //Starts loading image
      downloadingImage[i - 1].src = communityData[key];
      i++;
    }
    //sets image holder and "page" once the entire page has loaded so it isnt null
    imageHolder = document.getElementById("enlargedImageBox");
    page = document.getElementById("content");
  }
}

//Displays the final image for the page once its done loading
function onLoading(downloadingImageLoad, image, key, i) { 

  downloadingImageLoad.onload = function() {

    //Handler to catch if objectFit is not supported on the user's browser
    if("objectFit" in image.style) 
    {
      //Sets the image src if objectFit is supported
      image.src = downloadingImageLoad.src; 

    }

    //Alternative loading solution
    else{ 
      //Uses background image instead of acutal image because that is support on all browswers. Doesn't work as well so its the backup option.
      image.style.backgroundImage = "url(" + downloadingImageLoad.src + ")"; 

      //Changes the class to the backup css
      image.className = "community-image-IE";
    
    }

    //Adds on click action listeners to every small picture
    var currentPicture = document.getElementById("community-"+i.toString());
    currentPicture.addEventListener("click", 

    function(){
      //Performs desired on-click effects
      pictureOnClick(communityData[key],downloadingImageLoad) 
    });


  }
}

//Performs necessary actions once user has clicked on an image
function pictureOnClick(dict, image) { 
    
    //Variables to determine if the user has scrolled down in the bordered box
    var scrollBox = document.getElementById("community-check");
    var howFarDown = scrollBox.scrollTop;


    //Makes the enlarged image area visible
    imageHolder.className = "community-visible";

    //Stops the scrolling function on the bordered box while a larger image is visible (reinstated later)
    scrollBox.style.overflowY = "hidden";
    
    //Creates enlarged image area once small picure is clicked
    imageHolder.innerHTML = "<div id='enlargedBackground'></div><a href='javascript:void(0)''></a><img id='enlarged-image' src='"+dict+"'> </img>";

    //Offsets enlarged image box based on how far user has scrolled
    imageHolder.style.top = howFarDown.toString() + "px";

    //Centers image
    fixSize(image); 

    //Recenters image every time the user changes their browser size
    window.addEventListener("resize", 
    function(){

      //Checks to make sure function is only run when enlarged image is active
      if(currentImage!==null){ 
        fixSize(image,dict)
      }

    });

}

//centers image within enlarged image box and adds closing click listener
function fixSize(image, dict){

  //gets dimensions of the image to be loaded and the bordered box
  var iHHeight = 770;
  var iHWidth = imageHolder.clientWidth-30;
  var height = image.height;
  var width = image.width;

  //setting enlarged image to be displayed
  currentImage = document.getElementById("enlarged-image");

  //Adds on-click effect to close enlarged image box when ever anywhere is clicked. Must be set after delay so first click doesnt trigger close effect.
  setTimeout(function(){

    //sets click listener for entire page
    var page = document.getElementById("content");
    page.addEventListener("click",closeBigImage);

  }
  //delay of 100ms
  ,100);
  
  //Centering handler for image smaller than the bordered box
  if((height<iHHeight) && (width<iHWidth))
  {
    currentImage.style.marginLeft = ((iHWidth-width)/2).toString()+"px";
    currentImage.style.marginTop = ((iHHeight-height)/2).toString() + "px";
  }

  //Centering handler for image that is bigger than bordered box and more contrained by height
  else if((height/iHHeight) > (width/iHWidth))
    {
      currentImage.style.marginLeft = ((iHWidth-(width/(height/iHHeight)))/2).toString() + "px";
      //Resets top margin for if box is resized
      currentImage.style.marginTop = (0).toString() + "px"; 
    }

  //Centering handler for image that is bigger than bordered box and more constrained by width 
  else{
      currentImage.style.marginTop = ((iHHeight-(height/(width/iHWidth)))/2).toString() + "px";
      //Resets left margin if box is resized
      currentImage.style.marginLeft = (0).toString() + "px"; 
    }  
}

//Closes enlarged image box when anywhere on page is clicked 
function closeBigImage(){

  //removes action listener on the entire page when enlarged image box is closed
  page.removeEventListener("click",closeBigImage);

  //removes enlarged image
  imageHolder.innerHTML = "";

  //resets enlarged image to null
  currentImage = document.getElementById("enlarged-image"); 

  //Removes desired css for visible box
  imageHolder.className = "community-hidden";

  //Returns scrolling functionality
  document.getElementById("community-check").style.overflowY = "scroll";
}

//Creates google maps centered on cobalt counsel for contact us page
function setMap(){

  var mapDiv = document.getElementById("map")
  setMapSize();

  var mapOptions = {
        center: new google.maps.LatLng(43.650034, -79.381209),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    //Adds the map to the element with id map
    var map = new google.maps.Map(mapDiv, mapOptions);

    //Adds marker to the map at the initial centered location
    var marker = new google.maps.Marker({position:mapOptions.center});
    marker.setMap(map)
}

function setMapSize(){
  var mapDiv = document.getElementById("map")
  var contactDiv = document.getElementById("contact-div")
  if(document.defaultView.getComputedStyle){

    mapDiv.style.height = parseInt(document.defaultView.getComputedStyle(contactDiv, null).getPropertyValue("height")).toString() + "px";
  }
  else if(flowchart.currentStyle) {   // For IE 

    mapDiv.style.height = parseInt(contactDiv.currentStyle["height"]).toString() + "px";
  }
}
