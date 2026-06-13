document.querySelector(".cancel-button").addEventListener("click", function () {
  document.querySelector(".modal").style.display = "none";
});

document.querySelectorAll(".delete-comment").forEach((button, index) => {
  console.log(index);
  button.addEventListener("click", function () {
        document.querySelector(".modal").style.display = "block";
        button.closest(".comment-box-self, .replied-box-self").dataset.index = index;
        document.querySelector(".delete-button").dataset.index = index;
    });
});


document.addEventListener('click', (e) => {
  if (e.target.matches('.delete-comment')) {
        document.querySelector(".modal").style.display = "block";
        console.log(e.target.dataset.index);
        e.target.closest(".comment-box-self, .replied-box-self").dataset.index = e.target.dataset.index;
        document.querySelector(".delete-button").dataset.index = e.target.dataset.index;
  }
});

document.querySelectorAll(".plus").forEach((button) => {
  button.addEventListener("click", (event) => {
     const currentElements = Array.from(document.querySelectorAll('.plus')); // These are used because of closures concept of JS is causing last used variable value to be stored there
    const currentIndex = currentElements.indexOf(event.currentTarget); // These are used because of closures concept of JS is causing last used variable value to be stored there
    let voteCount = parseInt(
      document.querySelectorAll(".vote-count")[currentIndex].textContent,
    );
    voteCount++;
    document.querySelectorAll(".vote-count")[currentIndex].textContent = voteCount;
  });
});


document.querySelectorAll(".minus").forEach((button) => {
  button.addEventListener("click", (event) => {
    const currentElements = Array.from(document.querySelectorAll('.minus'));
    const currentIndex = currentElements.indexOf(event.currentTarget);
    let voteCount = parseInt(
      document.querySelectorAll(".vote-count")[currentIndex].textContent,
    );
    if (voteCount > 0) {
      voteCount--;
    }
    document.querySelectorAll(".vote-count")[currentIndex].textContent = voteCount;
  });
});

document.querySelectorAll(".icon-reply").forEach((button, index) => {
  button.addEventListener("click", () => {
    // Add your reply functionality here
    let parentcommentbox = document.querySelectorAll(".comment-box")[index];
    if(parentcommentbox.parentElement.classList.contains("replied-box")){
      if(parentcommentbox.parentElement.nextElementSibling==null || !parentcommentbox.parentElement.nextElementSibling.classList.contains("replying-box-inner") ){
        let replyingboxinner = document.createElement("div");
        let div = document.createElement("div");
        let commentbox = document.createElement("div");
        let img = document.createElement("img");
        let textarea = document.createElement("textarea");
        let replybutton = document.createElement("button");
        replyingboxinner.classList.add('replying-box-inner','replied-box');
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
     else{
    if(parentcommentbox.nextElementSibling==null || !parentcommentbox.nextElementSibling.classList.contains("replying-box-outer") ){
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
  }}
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
    console.log(replyingbox);
    const textarea = replyBtn.closest('.replying-box-outer, .replying-box-inner')?.querySelector('textarea');
    const originalElement = document.querySelectorAll('.replied-box-self')[1];
    console.log(originalElement);
    originalElement.querySelector(":scope > .comment-box > div > p").textContent = textarea.value;
    replyingbox.replaceWith(originalElement.cloneNode(true));
    console.log('reply clicked');
    console.log(textarea ? textarea.value : null);
    
  }
});

