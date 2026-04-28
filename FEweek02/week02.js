const wishForm = document.getElementById("wish-form");
const wishInput = document.getElementById("wish-input");
const wishList = document.getElementById("wish-list");


function addWish(event) {
    event.preventDefault(); 
    

    const wishText = wishInput.value.trim();

    if(wishText !== ""){
        const wishItem = document.createElement("li");
        wishItem.className = "wish-item";

        const wishTextSpan = document.createElement("span");
        wishTextSpan.textContent = wishText;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent="삭제";

        wishItem.appendChild(wishTextSpan);
        wishItem.appendChild(deleteBtn);
        wishList.appendChild(wishItem);

        wishInput.value="";

}
}

function handleWishClick(event) {
    const target = event.target;

    if(target.classList.contains("delete-btn")) {
        target.parentElement.remove();
    }
}

wishForm.addEventListener("submit",addWish);
wishList.addEventListener("click",handleWishClick);
