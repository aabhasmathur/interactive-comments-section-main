document.querySelector(".cancel-button").addEventListener("click", function () {

  document.querySelector(".modal").style.display = "none";

});

 

document.addEventListener('click', (e) => {

  if (e.target.matches('.delete-comment')) {

    document.querySelector(".modal").style.display = "block";

     const deletecomments = Array.from(document.querySelectorAll('.delete-comment'))

     const currentindex  = deletecomments.indexOf(e.target);

     console.log(currentindex);

     e.target.closest(".comment-box-self, .replied-box-self, .replying-box-inner, .replying-box-self").dataset.index = currentindex;

    document.querySelector(".delete-button").dataset.index = currentindex;

  }

});

 

document.addEventListener('click', (e) => {

  if (e.target.closest('.plus')) {  

        const currentElements = Array.from(document.querySelectorAll('.plus')); // These are used because of closures concept of JS is causing last used variable value to be stored there

        const currentIndex = currentElements.indexOf(e.target.closest('.plus')); // These are used because of closures concept of JS is causing last used variable value to be stored there

        let voteCount = parseInt(

          document.querySelectorAll(".vote-count")[currentIndex].textContent,

        );

        voteCount++;

        document.querySelectorAll(".vote-count")[currentIndex].textContent = voteCount;

  }

});

 

document.addEventListener('click', (e) => {

  if (e.target.closest('.minus')) {  

        const currentElements = Array.from(document.querySelectorAll('.minus')); // These are used because of closures concept of JS is causing last used variable value to be stored there

        const currentIndex = currentElements.indexOf(e.target.closest('.minus')); // These are used because of closures concept of JS is causing last used variable value to be stored there

        let voteCount = parseInt(

          document.querySelectorAll(".vote-count")[currentIndex].textContent,

        );

         if (voteCount > 0) {

       voteCount--;

     }

        document.querySelectorAll(".vote-count")[currentIndex].textContent = voteCount;

  }

});

 

// document.querySelectorAll(".minus").forEach((button) => {

//   button.addEventListener("click", (event) => {

//     const currentElements = Array.from(document.querySelectorAll('.minus'));

//     const currentIndex = currentElements.indexOf(event.currentTarget);

//     let voteCount = parseInt(

//       document.querySelectorAll(".vote-count")[currentIndex].textContent,

//     );

//     if (voteCount > 0) {

//       voteCount--;

//     }

//     document.querySelectorAll(".vote-count")[currentIndex].textContent = voteCount;

//   });

// });

 

document.querySelectorAll(".icon-reply").forEach((button, index) => {

  button.addEventListener("click", () => {

    // Add your reply functionality here

    let parentcommentbox = document.querySelectorAll(".icon-reply")[index].parentElement;

    if (parentcommentbox.closest(".replied-box")) {

      if (parentcommentbox.parentElement.nextElementSibling == null || !parentcommentbox.parentElement.nextElementSibling.classList.contains("replying-box-inner")) {

        let replyingboxinner = document.createElement("div");

        let div = document.createElement("div");

        let commentbox = document.createElement("div");

        let img = document.createElement("img");

        let textarea = document.createElement("textarea");

        let replybutton = document.createElement("button");

        replyingboxinner.classList.add('replying-box-inner', 'replied-box');

        replyingboxinner.append(div);

        replyingboxinner.append(commentbox);

        commentbox.append(img, textarea, replybutton);

        img.src = parentcommentbox.querySelector(".icon").src;

        commentbox.classList.add("comment-box");

        img.classList.add("icon");

        textarea.classList.add("reply-box");

        replybutton.classList.add("reply-button");

        replybutton.textContent = "Reply";

        parentcommentbox.parentElement.after(replyingboxinner);

        replybutton.dataset.id = index;

        console.log(replybutton.dataset.id);

      }

 

    }

    else {

      parentcommentbox = parentcommentbox.closest(".comment-box");

      if (parentcommentbox.nextElementSibling == null || !parentcommentbox.nextElementSibling.classList.contains("replying-box-outer")) {

        let replyingbox = document.createElement("div");

        let img = document.createElement("img");

        let textarea = document.createElement("textarea");

        let replybutton = document.createElement("button");

        replyingbox.classList.add('replying-box-outer');

        replyingbox.append(img, textarea, replybutton);

        img.src = parentcommentbox.querySelector(".icon").src;

        img.classList.add("icon");

        textarea.classList.add("reply-box");

        replybutton.classList.add("reply-button");

        replybutton.textContent = "Reply";

        parentcommentbox.after(replyingbox);

        replybutton.dataset.id = index;

        console.log(replybutton.dataset.id);

      }

    }

  });

});

 

document.querySelectorAll(".delete-button").forEach((button, index) => {

  button.addEventListener("click", () => {

    let commentIndex = button.dataset.index;

    console.log(commentIndex);

    document.querySelector(`[data-index="${commentIndex}"]`).remove();

    // document.querySelectorAll(".replied-box-self")[commentIndex].remove();

    document.querySelector(".modal").style.display = "none";

  });

})

 

//functionality for reply to be added

 

document.addEventListener('click', (e) => {

  if (e.target.matches('.reply-button')) {

    var replyBtn = e.target;

    var replyingbox = replyBtn.closest('.replying-box-outer, .replying-box-inner');

    const textarea = replyBtn.closest('.replying-box-outer, .replying-box-inner')?.querySelector('textarea');

    const originalElement = document.querySelector('.replied-box-self');

    replyingboxnew = originalElement.cloneNode(true);

    replyingbox.replaceWith(replyingboxnew);

    replyingboxnew.querySelector(":scope > .comment-box > div > p").textContent = textarea.value;

    replyingboxnew.querySelector(":scope  .vote-count").textContent = "0";

        console.log('reply clicked');

    console.log(textarea ? textarea.value : null);

  }

});

 

//functionality for edit to be added

 

document.addEventListener('click', (e) => {

if(e.target.matches('.edit-comment')){

  console.log("clicked");

var parentcontainer = e.target.closest('.comment-box-self, .replied-box-self');

var paragraph = parentcontainer.querySelector('p');

var inputtag = document.createElement('input');

inputtag.value = paragraph.textContent;

inputtag.classList.add('reply-box');

paragraph.replaceWith(inputtag);

var updatebutton = document.createElement('button');

updatebutton.textContent = "Update";

updatebutton.classList.add('update-button');

inputtag.after(updatebutton);

}

 

});

 

//functionality for update to be added

 

document.addEventListener('click', (e) => {

if(e.target.matches('.update-button')){

  console.log("clicked");

var parentcontainer = e.target.closest('.comment-box-self, .replied-box-self');

var updatebutton = parentcontainer.querySelector('.update-button');

var inputtag = parentcontainer.querySelector('input');

var paragraph = document.createElement('p');

paragraph.textContent = inputtag.value;

inputtag.classList.add('reply-box');

inputtag.replaceWith(paragraph);

updatebutton.remove();

}

 

});

 