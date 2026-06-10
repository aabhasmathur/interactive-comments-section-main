document.querySelector(".cancel-button").addEventListener("click", function () {
  document.querySelector(".modal").style.display = "none";
});

document.querySelectorAll(".delete-comment").forEach((button, index) => {
    button.addEventListener("click", function () {
        document.querySelector(".modal").style.display = "block";
        button.closest(".comment-box-self, .replied-box-self").dataset.index = index;
        document.querySelector(".delete-button").dataset.index = index;
    });
});

document.querySelectorAll(".plus").forEach((button, index) => {
  button.addEventListener("click", () => {
    let voteCount = parseInt(
      document.querySelectorAll(".vote-count")[index].textContent,
    );
    voteCount++;
    document.querySelectorAll(".vote-count")[index].textContent = voteCount;
  });
});

document.querySelectorAll(".minus").forEach((button, index) => {
  button.addEventListener("click", () => {
    let voteCount = parseInt(
      document.querySelectorAll(".vote-count")[index].textContent,
    );
    if (voteCount > 0) {
      voteCount--;
    }
    document.querySelectorAll(".vote-count")[index].textContent = voteCount;
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

// document.queryselectroAll(".reply-button").foEach((button,index)=>{

// })